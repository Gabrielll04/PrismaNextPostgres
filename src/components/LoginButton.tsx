'use client'

import { signIn } from 'next-auth/react'

export default function LoginButton() {
    return (
    <button onClick={() => signIn()} className='ring-1 ring-neutral-500 ring-opacity-60 w-32 h-12 rounded font-semibold transition ease-in-out hover:bg-neutral-700 hover:bg-opacity-60'>login now</button>
    )
}