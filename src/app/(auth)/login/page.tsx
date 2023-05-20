'use client'
import { BiRightArrowAlt } from 'react-icons/bi'
import GithubLoginButton from '@/components/GithubLoginButton'

export default function LoginPage() {
    return (
        <div className='flex flex-col items-center h-[30rem] w-screen py-32'>
            <span className='font-light opacity-80'>Welcome again! We are happy you came back!</span>
            <div className='flex flex-col items-center w-96 space-y-3 p-5'>
                <div className='flex flex-col w-full p-5 space-y-5'>
                    <input className='input-login'  type='email' placeholder='insert your email' required />
                    <input className='input-login'  type='password' placeholder='insert your password' required />
                    <button type='submit' className='flex self-end w-full h-9 ring-1 items-center justify-center ring-white ring-opacity-20 rounded group'>login<span className='text-xl ml-1 transition ease-in-out group-hover:translate-x-1'><BiRightArrowAlt /></span></button>
                    <span className='mx-auto font-light opacity-80'>or continue with</span>
                    <GithubLoginButton/>
                </div>
                <div className='w-[200px] h-[200px] blur-[200px] antialiased bg-zinc-500 absolute -z-10'></div>
                <span className='font-light opacity-60 text-sm'>If you are not logged, register <span className='text-sky-400'>hear</span></span>
            </div>
        </div>
    )
}