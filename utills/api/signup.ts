export const signup = async (email: string,username: string, password: string, password2: string) => {
  // 이메일 유효성
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) throw new Error('유효한 이메일 형식이 아닙니다.')

  if (password.length < 4) throw new Error('비밀번호는 최소 4자 이상이어야 합니다.')
  if (username.length < 2) throw new Error('이름은 2자 이상이어야 합니다.')
  if (password !== password2) throw new Error('비밀번호가 일치하지 않습니다.')

  const res = await fetch('http://13.125.241.160:8000/users/signup/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email,username,password ,password2}),
  })

  const data = await res.json()

  if (!res.ok) throw new Error(data?.error || '회원가입 실패')

  return data.user
}
