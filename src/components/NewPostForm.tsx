import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const CreatePostSchema = z.object({
  title: z.string(),
  content: z.string().optional()
})

type CreatePostSchemaData = z.infer<typeof CreatePostSchema>

export default function NewPostForm() {
  const {register, handleSubmit} = useForm<CreatePostSchemaData>({
    resolver: zodResolver(CreatePostSchema)
  })

  async function createPost(data: any) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data.title,
        content: data.content
      })
    })

    if (!response.ok) {
      return 'an error was occured, error 500'
    }
  }

  return (
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
  )
}