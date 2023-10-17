// import Layout from '../components/Layout'
import Post from '../components/Post'
import { makeSerializable } from '../lib/util'
import prisma from '../lib/prisma';
import Header from '../components/Header';
// import CollapseBasicExample from '../components/twComponent';


const Blog = props => {
  return (
    <div>
    <Header />
      <div className="page">
        <main className='py-24 px-4'>
        <h1 className='text-5xl'>My Blog</h1>
      {/* <CollapseBasicExample /> */}
          {props.feed.map(post => (
            <div key={post.id} className="post mt-5 p-6">
              <Post className='max-w-sm' post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  )
}

export const getServerSideProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  })
  return {
    props: { feed: makeSerializable(feed) },
  }
}

export default Blog
