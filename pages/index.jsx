
import Layout from '../components/Layout'
import Post from '../components/Post'
import { makeSerializable } from '../lib/util'
import prisma from '../lib/prisma';
import Header from '../components/Header';

const Blog = props => {
  return (
    <>
    <Header />
      <div className="page">
        <h1 className='text-5xl'>My Blog</h1>
        <main>
          {props.feed.map(post => (
            <div key={post.id} className="post mt-5 p-6">
              <Post post={post} />
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
    </>
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
