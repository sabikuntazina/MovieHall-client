'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiFilm, FiLogOut, FiLogIn } from 'react-icons/fi';
import { authClient } from '@/lib/auth-client';

export default function Navbar() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const role = user && 'role' in user ? (user.role as string | undefined) : undefined;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login');
        },
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#24003D]/80 backdrop-blur-md border-b border-[#9B00D9]/20 px-4 md:px-8 py-3.5 flex items-center justify-between">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-xl theme-gradient flex items-center justify-center glow-pink group-hover:scale-105 transition-transform duration-300">
          <FiFilm className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-[#FF4FA3] to-[#FF1688]">
          MovieHall
        </span>
      </Link>

      {/* User Status / Better Auth Auth Buttons */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 bg-[#2B0A45] px-3 py-1.5 rounded-xl border border-[#9B00D9]/30">
              {/* Avatar Image or Initial Letter */}
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || 'User'}
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-full object-cover border border-[#FF1688]"
                />
              ) : (
                <div className="w-7 h-7 rounded-full bg-[#9B00D9] flex items-center justify-center text-xs font-bold text-white border border-[#FF1688]">
                  {user.name?.charAt(0).toUpperCase() || 'U'}
                </div>
              )}

              {/* User Name */}
              <span className="text-xs font-medium text-white hidden sm:inline">
                {user.name}
              </span>

              {/* Role Badge */}
              {role && (
                <span className="text-[10px] bg-[#FF1688] text-white px-2 py-0.5 rounded-full uppercase font-semibold">
                  {role}
                </span>
              )}
            </div>

            {/* Logout Button */}
            <button
              onClick={handleSignOut}
              className="p-2 rounded-xl bg-[#2B0A45] border border-[#9B00D9]/30 text-[#C9B8D3] hover:text-[#FF1688] hover:border-[#FF1688] transition-all duration-300 cursor-pointer"
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
}