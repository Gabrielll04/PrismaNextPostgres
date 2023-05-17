'use client'
import { BiLeftArrowAlt } from 'react-icons/bi'

export default function CreatePostPage() {
    return (
        <main className='flex w-screen h-screen justify-center'>
            <button className='flex items-center justify-center w-24 h-9 bg-neutral-800 ring-1 font-semibold ring-neutral-700 m-5 rounded absolute left-0 transition ease-in-out hover:bg-neutral-600'>
                <BiLeftArrowAlt size={20}/>
                <span>voltar</span>
            </button>
            <article className='flex flex-col m-5 w-[45rem] p-5 space-y-10'>
                <p className='text-5xl font-bold w-64 text-left self-center'>Criar nova postagem</p>
                <form className='flex flex-col w-full space-y-5'>
                    <input className='input-create h-12' type='text' placeholder='título' required />
                    <textarea className='input-create py-3' cols={50}  placeholder="Content" rows={8}/>
                    <input className='w-full h-12 bg-transparent ring-1 ring-neutral-700 rounded transition ease-in-out hover:bg-zinc-700 cursor-pointer' type='submit' />
                </form>
            </article>
        </main>
    )
}