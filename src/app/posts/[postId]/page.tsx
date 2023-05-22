import BackButton from "@/components/NewPostButton"
import prisma from "@/lib/prisma"

export default async function PostPage({params}) {
  const post = await getPost(params.postId)

  return (
    <main className='w-screen h-screen flex'>
      <BackButton />
      <article className='flex flex-col mx-auto h-full max-h-none w-[50rem] p-5 pt-14 space-y-5 text-ellipsis overflow-hidden'>
        <p className='font-bold text-7xl'>{post.title}</p>
        <div className='flex items-center gap-1'>
          <img alt='posts author image' src={post.author.image} className='w-8 h-8 rounded-full'/>
          <span className='text-sm'>{post.author.name}</span>
        </div>
        <span className='text-lg'>
          {post.content}
        </span>
      </article>
    </main>
  )
}

async function getPost(postId) {
  return prisma.post.findFirst({
    where: {
      id: postId
    },
    include: {
      author: {
        select: { name: true, image: true }
      }
    }
  })
} 