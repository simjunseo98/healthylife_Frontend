export const login = async (email: string, password: string) => {
  // ✅ 이메일 유효성 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('유효한 이메일 형식이 아닙니다.');
  }

  // ✅ 비밀번호 길이 검사
  if (password.length < 4) {
    throw new Error('비밀번호는 최소 4자 이상이어야 합니다.');
  }

  // 실제 요청
  const res = await fetch('/api/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error || '로그인 실패');
  }

  return data.user;
};
