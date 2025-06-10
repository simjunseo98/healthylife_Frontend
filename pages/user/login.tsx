'use client'
import React, { useState, FormEvent, JSX } from 'react'
import UserForm from '@/components/userForm'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/userStore'


const Login = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error , setError ] = useState('')
  const router = useRouter()
  const { login } = useUserStore()

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    try{
      await login(email, password)
      router.push('/')
    } catch (err : any) {
      setError(err.message)
    }
    
  }

  return (
    <main className='min-h-screen flex items-center justify-center px-4'>
      <UserForm
        title='Login'
        submitText='로그인'
        onSubmit={handleLogin}
        bottomText={
          <Link href='/user/signup' className='text-blue-500 hover:underline block'>
            아직 계정이 없으신가요? 회원가입
          </Link>
        }
      >
        {error && (
          <p className="text-red-500 text-sm mb-2">
            {error}
          </p>
        )}
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
          className='w-full p-6 border rounded-md'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
          className='w-full p-6 border rounded-md'
        />
      </UserForm>
    </main>
  )
}

export default Login;
