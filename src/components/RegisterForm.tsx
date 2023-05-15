'use client'

import { signIn } from 'next-auth/react'

export default function RegisterPage() {
    return (
        <button onClick={() => signIn('github')}>Github</button>
    )
}