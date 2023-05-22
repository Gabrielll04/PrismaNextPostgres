'use client'

import Link from "next/link"

export default function PostCard({PostContent}: any) {
  console.log(PostContent)
  return (
    <Link href={`/posts/${PostContent.id}`} className='flex w-full min-h-20 h-auto max-h-44 ring-1 ring-neutral-700 rounded p-2'>
        <section className='flex flex-col w-full h-full space-y-4'>
          <div className='flex items-center space-x-2'>
            <img 
              src={PostContent.author.image} 
              alt="posts's author image`"
              className='w-10 h-10 rounded-full'
            />
            <span className='font-semibold'>
              {PostContent.author.name}
            </span>
          </div>

          <div className='flex flex-col w-full h-full overflow-clip space-y-2'>
            <p className='text-2xl font-semibold'>{PostContent.title}</p>
            <span className='block text-ellipsis overflow-hidden'>
              {PostContent.content}
            </span>
          </div>
        </section>
    </Link>
  )
}