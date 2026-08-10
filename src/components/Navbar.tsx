'use client';

import React from 'react';
import Link from 'next/link';
import { FiFilm, FiSearch, FiUser, FiLogOut, FiLogIn } from 'react-icons/fi';
import { NavbarProps } from '@/types/navbar';

export const Navbar: React.FC<NavbarProps> = ({
  role,
  searchQuery = '',
  onSearchChange,
  user,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#24003D]/80 backdrop-blur-md border-b border-[#9B00D9]/20 px-4 md:px-8 py-3.5 flex items-center justify-between">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-xl theme-gradient flex items-center justify-center glow-pink group-hover:scale-105 transition-transform duration-300">
          <FiFilm className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FF4FA3] to-[#FF1688]">
          MovieHall
        </span>
      </Link>

      {/* Movie Search Bar */}
      {role === 'user' && (
        <div className="relative hidden md:block w-80 lg:w-96">
          <input
            type="text"
            placeholder="Search movies by title, genre..."
            value={searchQuery}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            className="w-full bg-[#2B0A45]/90 text-white placeholder-[#C9B8D3] text-sm rounded-full pl-10 pr-4 py-2 border border-[#9B00D9]/30 focus:outline-none focus:border-[#FF1688] transition-colors"
          />
          <FiSearch className="w-4 h-4 text-[#C9B8D3] absolute left-3.5 top-3" />
        </div>
      )}

      {/* User Status / Better Auth Auth Buttons */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#2B0A45] px-3 py-1.5 rounded-xl border border-[#9B00D9]/30">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-7 h-7 rounded-full border border-[#FF1688]"
                />
              ) : (
                <div className="w-7 h-7 rounded-full bg-[#9B00D9] flex items-center justify-center text-xs font-bold text-white">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="text-xs font-medium text-white hidden sm:inline">
                {user.name}
              </span>
              <span className="text-[10px] bg-[#FF1688] text-white px-2 py-0.5 rounded-full uppercase font-semibold">
                {role}
              </span>
            </div>

            <button
              onClick={() => console.log('Better Auth SignOut Call')}
              className="p-2 rounded-xl bg-[#2B0A45] border border-[#9B00D9]/30 text-[#C9B8D3] hover:text-[#FF1688] hover:border-[#FF1688] transition-all duration-300"
              title="Logout"
            >
              <FiLogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 bg-[#FF1688] hover:bg-[#FF4FA3] text-white text-xs font-semibold px-4 py-2 rounded-xl glow-pink transition-all duration-300"
          >
            <FiLogIn className="w-4 h-4" />
            <span>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;