'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <h1>Hello</h1>
      <button onClick={()=>router.push("/login")}>Login Page</button>
      <br/>
      <Link href="/about">Go to About page</Link>
      <br/>
      <Link href="/login">Go to Login page</Link>
    </main>
  )
}

