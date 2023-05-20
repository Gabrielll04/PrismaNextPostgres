'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { redirect } from 'next/navigation'

const CreatePostSchema = z.object({
  title: z.string(),
  content: z.string().optional()
})

type CreatePostSchemaData = z.infer<typeof CreatePostSchema>

export default function CreatePostPage() {
  const {register, handleSubmit, formState: { errors } } = useForm<CreatePostSchemaData>({
    resolver: zodResolver(CreatePostSchema)
  })

  async function createPost(data: any) {
    const post = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         title: data.title,
         content: data.content
      })
    })

    if (!post.ok) {
      return 'erro painho'
    }
    const parsedJson = await post.json()
    return console.log(parsedJson)
  }

  return (
    <main className='flex w-screen h-screen justify-center'>
      <button onClick={redirect('/home')} className='flex items-center justify-center w-24 h-9 bg-neutral-800 ring-1 font-semibold ring-neutral-700 m-5 rounded absolute left-0 transition ease-in-out hover:bg-neutral-600'>
          <BiLeftArrowAlt size={20}/>
          <span>voltar</span>
      </button>
      <article className='flex flex-col m-5 w-[45rem] p-5 space-y-10'>
        <p className='text-5xl font-bold w-64 text-left self-center'>Criar nova postagem</p>
        <form  
          className='flex flex-col w-full space-y-5'
          onSubmit={handleSubmit(createPost)}
        >
          <input 
            className='input-create h-12' 
            type='text' 
            placeholder='título' 
            required 
            {...register('title')}
          />

          <textarea 
            className='input-create py-3' 
            cols={50}
            placeholder="Content" 
            rows={8}
            {...register('content')}
          />

          <input 
            className='w-full h-12 bg-transparent ring-1 ring-neutral-700 rounded transition ease-in-out hover:bg-zinc-70 cursor-pointer active:bg-zinc-700' 
            type='submit'
          />
        </form>
      </article>
    </main>
  )
}