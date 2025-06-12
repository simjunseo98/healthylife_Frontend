import React, { useEffect } from 'react';
import Link from 'next/link';
import { VscAccount, VscHome } from 'react-icons/vsc';
import { HiOutlineHome, HiOutlineUser, HiOutlineLogin } from 'react-icons/hi';
import { useRouter } from 'next/router';
import { useUserStore } from '@/store/userStore';
import { FaDumbbell } from "react-icons/fa6";

const Header = () => {
  const router = useRouter();
  const token = useUserStore((state) => state.token);

  useEffect(() => {
    if (!token) {
      router.replace("/");
    }
  }, [token]);

  const logout = useUserStore((state) => state.logout);
  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="h-25 bg-white shadow-2xl z-10">
      <nav className="flex justify-between items-center px-5 py-5">
        {/* 로고 */}
        <Link href="/">
          <div className="flex">
            <p className="text-[50px] mt-[1px] text-emerald-800">
              <FaDumbbell />
            </p>
            <span className="text-[40px] text-emerald-500 font-bold cursor-pointer">
              ealth-Life
            </span>
          </div>
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center space-x-5">
          <button
            onClick={handleLogout}
            className="px-6 py-2 ml-4 text-white bg-emerald-500 hover:bg-sky-400 rounded-full shadow-lg transition duration-300 cursor-pointer hover:scale-90"
          >
            로그아웃
          </button>
          <Link href="/main">
            <VscHome size={40} className="text-emerald-500 cursor-pointer hover:scale-90" />
          </Link>
          <Link href="/users/mypage">
            <VscAccount size={40} className="text-emerald-500 cursor-pointer hover:scale-90" />
          </Link>
        </div>
      </nav>
      {/* 모바일 하단 탭바 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300 shadow-md md:hidden">
        <div className="flex justify-around items-center h-[100px]">
          <Link
            href="/main"
            className="flex flex-col items-center text-xl text-gray-700 hover:text-black hover:scale-95"
          >
            <HiOutlineHome size={40} className="text-emerald-500 hover:text-sky-400" />
            <span>홈</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex flex-col items-center text-xl text-gray-700 hover:text-black hover:scale-95"
          >
            <HiOutlineLogin size={40} className="text-emerald-500 hover:text-sky-400" />
            <span>로그아웃</span>
          </button>
          <Link
            href="/users/mypage"
            className="flex flex-col items-center text-xl text-gray-700 hover:text-black hover:scale-95"
          >
            <HiOutlineUser size={40} className="text-emerald-500 hover:text-sky-400" />
            <span>마이페이지</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
