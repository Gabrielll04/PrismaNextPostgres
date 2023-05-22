'use client'
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function BackButton() {
  return (
    <Link href='/home' className='flex items-center justify-center w-24 h-9 bg-neutral-800 ring-1 font-semibold ring-neutral-700 m-5 rounded absolute left-0 transition ease-in-out hover:bg-neutral-600'>
          <BiLeftArrowAlt size={20}/>
          <span>voltar</span>
    </Link>
  )
}