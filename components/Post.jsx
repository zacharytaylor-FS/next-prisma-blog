'use client'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

const Post = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  return (
    <div className='max-w-md rounded-md p-4 bg-slate-600 hover:bg-slate-400' onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}>
    <div className=''>
      <h2 className='text-3xl mb-4'>{post.title}</h2>
      <h3 className='text-bold mb-'>By {authorName}</h3>

    </div>
      <ReactMarkdown children={post.content} />
      {/* <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style> */}
    </div>
  )
}

export default Post