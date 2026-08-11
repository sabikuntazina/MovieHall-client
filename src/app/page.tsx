'use client';

import Hero from '@/components/Hero';
import { useState } from 'react';


export default function Home() {


  return (
    <div className="min-h-screen bg-[#18002B] text-white">
    

      <main className="max-w-7xl mx-auto p-6">
      <Hero></Hero>
      </main>
    </div>
  );
}