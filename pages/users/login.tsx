'use client'
import React, { useState, FormEvent, JSX } from 'react'
import UserForm from '@/components/userForm'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useUserStore } from '@/store/userStore'

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { login } = useUserStore()

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await login(email, password)
      router.push('/main')
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 mt-15">
      <UserForm
        title="Login"
        submitText="로그인"
        onSubmit={handleLogin}
        bottomText={
          <Link href="/users/signup" className="text-blue-500 hover:underline block">
            아직 계정이 없으신가요? 회원가입
          </Link>
        }
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-6 border rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-6 border rounded-md"
        />
      </UserForm>
    </main>
  )
}

export default Login
