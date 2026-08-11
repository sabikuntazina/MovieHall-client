'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlay, FiCompass, FiFilm, FiStar } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[#19002E] overflow-hidden px-4 md:px-8 py-16">
      {/* Background Neon Gradients & Blur Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#9B00D9]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#FF1688]/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#24003D] rounded-full blur-[90px] pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2b0a4515_1px,transparent_1px),linear-gradient(to_bottom,#2b0a4515_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B0A45]/80 border border-[#9B00D9]/40 backdrop-blur-md shadow-lg shadow-[#9B00D9]/10">
            <FiStar className="w-4 h-4 text-[#FF1688] fill-[#FF1688]" />
            <span className="text-xs md:text-sm font-medium text-[#C9B8D3]">
              Next-Gen Cinema Booking Platform
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Experience Magic On The{' '}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#FF4FA3] via-[#FF1688] to-[#9B00D9]">
              Big Screen
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-[#C9B8D3] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Discover the latest blockbusters, check real-time showtimes, and book your favorite seats seamlessly with MovieHall.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/movies"
              className="flex items-center gap-2 bg-linear-to-r from-[#9B00D9] to-[#FF1688] hover:from-[#8000B3] hover:to-[#E01377] text-white px-6 py-3.5 rounded-2xl text-sm font-semibold shadow-xl shadow-[#FF1688]/25 hover:scale-105 transition-all duration-300"
            >
              <FiCompass className="w-5 h-5" />
              <span>Explore Movies</span>
            </Link>

            <a
              href="#featured"
              className="flex items-center gap-2 bg-[#2B0A45]/90 hover:bg-[#380E5A] text-white border border-[#9B00D9]/40 px-6 py-3.5 rounded-2xl text-sm font-semibold backdrop-blur-md hover:scale-105 transition-all duration-300"
            >
              <FiPlay className="w-5 h-5 text-[#FF1688]" />
              <span>Watch Trailers</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#9B00D9]/20 max-w-md mx-auto lg:mx-0">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">50+</h3>
              <p className="text-xs text-[#C9B8D3] mt-1">Active Movies</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#FF1688]">12+</h3>
              <p className="text-xs text-[#C9B8D3] mt-1">Cinema Halls</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">100k+</h3>
              <p className="text-xs text-[#C9B8D3] mt-1">Happy Viewers</p>
            </div>
          </div>
        </div>

        {/* Right Feature Card / Poster Spotlight */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#24003D]/90 border border-[#9B00D9]/40 p-4 shadow-2xl shadow-black/80 backdrop-blur-md group">
            {/* Glowing Backdrop Behind Poster */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#9B00D9]/30 to-[#FF1688]/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60"></div>

            {/* Poster Card Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-2/3 bg-[#19002E]">
              <Image
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop"
                alt="Movie Spotlight"
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#19002E] via-transparent to-transparent"></div>

              {/* Badge on Poster */}
              <div className="absolute top-3 right-3 bg-[#19002E]/80 backdrop-blur-md border border-[#FF1688]/50 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs text-white">
                <FiFilm className="text-[#FF1688]" />
                <span>Now Showing</span>
              </div>

              {/* Bottom Poster Info */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1 text-left">
                <span className="text-[10px] bg-[#FF1688] text-white px-2 py-0.5 rounded-md uppercase font-bold tracking-wider">
                  Sci-Fi / Action
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  Cyberverse 2099
                </h4>
                <p className="text-xs text-[#C9B8D3]">IMDb 8.9 ★ | IMAX 3D</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}