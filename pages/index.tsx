import { useRouter } from 'next/router'
import { FaDumbbell } from "react-icons/fa6";
export default function Home() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen bg-emerald-50 flex flex-col items-center justify-center overflow-hidden text-center">
      {/* 회전 원 배경 */}
      <div className="absolute w-[800px] h-[800px] rounded-full border-2 border-dashed border-emerald-200 animate-spin-slow opacity-30"></div>

      {/* 로고/텍스트 */}
      <h1 className="flex text-8xl font-bold text-emerald-500 z-10">
        <FaDumbbell />ealth-Life
      </h1>
      <p className="mt-4 text-gray-500 z-10 text-2xl tracking-wide">
        내 몸을 위한 작은 선택, 오늘도 안전하게
      </p>

      {/* 시작하기 버튼 */}
      <button
        onClick={() => router.push('/users/login')}
        className="mt-10 bg-emerald-500 hover:bg-sky-400  rounded-full shadow-lg transition duration-300 text-white px-8 py-3 z-10"
      >
        시작하기
      </button>

      {/* 둥둥 떠다니는 아이콘 */}
      <div className="absolute w-6 h-6 bg-sky-300 rounded-full top-20 left-24 animate-bounce opacity-40"></div>
      <div className="absolute w-8 h-8 bg-emerald-300 rounded-full bottom-24 right-28 animate-ping opacity-30"></div>
      <div className="absolute w-5 h-5 bg-cyan-300 rounded-full top-1/2 left-1/3 animate-ping opacity-40"></div>
      <div className="absolute w-4 h-4 bg-emerald-200 rounded-full bottom-12 left-10 animate-bounce opacity-50"></div>
      <div className="absolute w-3 h-3 bg-sky-200 rounded-full top-12 right-12 animate-ping opacity-30"></div>
      <div className="absolute w-10 h-10 bg-cyan-100 rounded-full top-[60%] left-[80%] animate-ping opacity-20"></div>
      <div className="absolute w-12 h-12 bg-emerald-100 rounded-full bottom-[10%] right-[15%] animate-bounce opacity-20"></div>
      <div className="absolute w-4 h-4 bg-sky-200 rounded-full top-8 right-12 animate-bounce opacity-40"></div>
      <div className="absolute w-6 h-6 bg-emerald-100 rounded-full top-[40%] right-[18%] animate-ping opacity-30"></div>
      <div className="absolute w-10 h-10 bg-cyan-100 rounded-full bottom-10 right-10 blur-sm opacity-20"></div>
      <div className="absolute w-5 h-5 bg-cyan-300 rounded-full top-[30%] right-[35%] animate-ping opacity-40"></div>
    </div>
  )
}
