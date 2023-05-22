'use client'
import BackButton from '@/components/NewPostButton'
import NewPostForm from '@/components/NewPostForm'

export default async function CreatePostPage() {
  return (
    <main className='flex w-screen h-screen justify-center'>
      <BackButton />
      <article className='flex flex-col m-5 w-[45rem] p-5 space-y-10'>
        <p className='text-5xl font-bold w-64 text-left self-center'>Criar nova postagem</p>
        <NewPostForm />
      </article>
    </main>
  )
}