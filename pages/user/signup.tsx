'use client'
import React, { useState, FormEvent } from 'react'
import UserForm from '@/components/userForm'
import Link from 'next/link'
import { useUserStore } from '@/store/userStore'
import { useRouter } from 'next/navigation'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const { signup } = useUserStore()

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }

    try {
      await signup(email, password, username)
      router.push('/user/login')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <UserForm
        title="Sign-up"
        submitText="회원가입"
        onSubmit={handleSignup}
        bottomText={
          <Link href="/user/login" className="text-blue-500 hover:underline block mt-2">
            이미 계정이 있으신가요? 로그인
          </Link>
        }
      >
        {error && (
          <p className="text-red-500 text-sm mb-2">
            {error}
          </p>
        )}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </UserForm>
    </main>
  )
}

export default Signup
