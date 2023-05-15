'use client'
import { signIn } from "next-auth/react"
import { SiGithub } from "react-icons/si"

export default function GithubLoginButton() {
    return <button type='button' onClick={() => signIn('github')} className='flex justify-center items-center input-login text-3xl transition ease-in-out hover:bg-neutral-800'><SiGithub /></button>
}