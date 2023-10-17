'use client'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'


const Post = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author'
  return (
    <div className='p-4 max-w-sm rounded-md bg-white shado-md overflow-hidden hover:bg-slate-400 md:max-w-2xl' onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}>
      <div className='md:flex items-center'>
        <div className='md:shrink-0'>
          <Image
            className='h-8 w-full object-cover md:h-full md:w-40'
            alt='' 
            src={''}
            width={72}
            height={70}
          />
        </div>
        <div className='p-8'>
          <h2 className='text-2xl uppercase tracking-wide text-sm font-semibold text-red-600'>{post.title}</h2>
          <Link href='#' className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'></Link>
          <h3 className='text-lg text-red-400 mt-2'>By 
            <span className=''>
              {authorName} 
            </span>
          </h3>
        </div>
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