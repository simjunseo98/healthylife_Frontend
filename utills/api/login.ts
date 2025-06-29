export const login = async (email: string, password: string) => {
  // ✅ 이메일 유효성 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('유효한 이메일 형식이 아닙니다.');
  }

  // ✅ 비밀번호 길이 검사
  if (password.length < 9) {
    throw new Error('비밀번호는 최소 8자 이상이어야 합니다.');
  }

  // 실제 요청
  const res = await fetch('http://127.0.0.1:8000/users/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || '로그인 실패');
  }
   const { token } = await res.json(); // ✅ 여기서 바로 꺼내기
  sessionStorage.setItem('token',token)

  return token;
};
