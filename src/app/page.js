// import Layout from '../components/Layout'
import Post from '../components/Post'
import { makeSerializable } from '../lib/util'
import prisma from '../lib/prisma';
// import CollapseBasicExample from '../components/twComponent';


const Blog = props => {
  return (
    <div>
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
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: { author: true },
//   })
//   return {
//     props: { feed: makeSerializable(feed) },
//   }
// }

export default Blog
