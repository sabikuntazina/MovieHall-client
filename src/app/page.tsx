'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="min-h-screen bg-[#18002B] text-white">
      <Navbar
        role={role}
        onRoleChange={(newRole) => setRole(newRole)}
        searchQuery={searchQuery}
        onSearchChange={(query) => setSearchQuery(query)}
      />

      <main className="max-w-7xl mx-auto p-6">
        <div className="bg-[#2B0A45] border border-[#9B00D9]/30 p-8 rounded-2xl mt-6">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FF4FA3] to-[#FF1688]">
            Welcome to MovieHall
          </h1>
          <p className="text-[#C9B8D3] mt-2">
            Active Mode: <span className="text-[#FF1688] font-bold">{role.toUpperCase()}</span>
          </p>
          {role === 'user' && searchQuery && (
            <p className="text-xs text-[#FF4FA3] mt-2">Searching for: "{searchQuery}"</p>
          )}
        </div>
      </main>
    </div>
  );
}