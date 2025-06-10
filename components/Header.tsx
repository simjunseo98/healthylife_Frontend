import React from 'react';
import Link from 'next/link';
import { VscAccount, VscHome } from 'react-icons/vsc';
import { HiOutlineHome,HiOutlineUser,HiOutlineLogin } from 'react-icons/hi';

const Header = () => {

  return (
    <header className="h-15 border-b-gray-950">
      <nav className="flex justify-between items-center px-5 py-5 ">
        {/* 로고 */}
        <Link href="/">
          <span className="text-[30px] font-bold cursor-pointer">Health-Life</span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center space-x-2">
          <Link href="/user/login">
            <button className="px-4 py-2 ml-4 border border-gray-400 rounded hover:bg-gray-300 transition cursor-pointer hover:scale-90">
              Log in
            </button>
          </Link>
          <Link href="/">
            <VscHome size={40} className='cursor-pointer hover:scale-90'/>
          </Link>
          <Link href="/user/mypage">
            <VscAccount size={40} className='cursor-pointer hover:scale-90'/>
          </Link>
        </div>
      </nav>
{/* 모바일 하단 탭바 */}
<div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300 shadow-md md:hidden">
  <div className="flex justify-around items-center h-[60px]">
    <Link href="/" className="flex flex-col items-center text-xs text-gray-700 hover:text-black hover:scale-95">
      <HiOutlineHome size={24} />
      <span>홈</span>
    </Link>
    <Link href="/user/login" className="flex flex-col items-center text-xs text-gray-700 hover:text-black hover:scale-95">
      <HiOutlineLogin size={24} />
      <span>로그인</span>
    </Link>
    <Link href="/user/mypage" className="flex flex-col items-center text-xs text-gray-700 hover:text-black hover:scale-95">
      <HiOutlineUser size={24} />
      <span>마이페이지</span>
    </Link>
  </div>
</div>

    </header>
  );
};

export default Header;
