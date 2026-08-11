"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiFilm, FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          setLoading(false);
          router.push("/");
        },
        onError: (ctx) => {
          setLoading(false);
          setErrorMessage(
            ctx.error.message || "Login failed. Please check your credentials.",
          );
        },
      },
    );
  };

  return (
    <div className="min-h-screen bg-[#19002E] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glowing Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#9B00D9]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FF1688]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Login Card */}
      <div className="card w-full max-w-md bg-[#24003D]/80 backdrop-blur-md border border-[#9B00D9]/30 shadow-2xl shadow-black/60 relative z-10">
        <div className="card-body p-6 sm:p-8">
          {/* Logo & Header */}
          <div className="flex flex-col items-center text-center gap-2 mb-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-[#9B00D9] to-[#FF1688] flex items-center justify-center shadow-lg shadow-[#FF1688]/30 group-hover:scale-105 transition-transform duration-300">
                <FiFilm className="w-6 h-6 text-white" />
              </div>
            </Link>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white via-[#FF4FA3] to-[#FF1688]">
              Welcome Back
            </h2>
            <p className="text-xs text-[#C9B8D3]">
              Sign in to manage bookings & explore movies
            </p>
          </div>

          {/* Error Alert */}
          {errorMessage && (
            <div className="alert alert-error text-xs py-2.5 px-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 mb-2">
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text text-xs text-[#C9B8D3]">
                  Email Address
                </span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="yourname@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input input-bordered w-full bg-[#2B0A45]/90 text-white placeholder-[#C9B8D3]/50 text-sm pl-10 border-[#9B00D9]/40 focus:border-[#FF1688] focus:outline-none rounded-xl"
                />
                <FiMail className="w-4 h-4 text-[#C9B8D3] absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label py-1 flex justify-between items-center">
                <span className="label-text text-xs text-[#C9B8D3]">
                  Password
                </span>
                <Link
                  href="/forgot-password"
                  className="text-[11px] text-[#FF4FA3] hover:underline"
                >
                  Forgot?
                </Link>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input input-bordered w-full bg-[#2B0A45]/90 text-white placeholder-[#C9B8D3]/50 text-sm pl-10 border-[#9B00D9]/40 focus:border-[#FF1688] focus:outline-none rounded-xl"
                />
                <FiLock className="w-4 h-4 text-[#C9B8D3] absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn w-full bg-linear-to-r from-[#9B00D9] to-[#FF1688] hover:from-[#8000B3] hover:to-[#E01377] text-white border-none rounded-xl text-sm font-semibold shadow-lg shadow-[#FF1688]/25 transition-all duration-300 mt-2"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <>
                  <FiLogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>

          {/* Footer Register Link */}
          <div className="text-center mt-4 pt-4 border-t border-[#9B00D9]/20">
            <p className="text-xs text-[#C9B8D3]">
              Don&apos;t have an account?{" "}
              <Link
                href="/register/user"
                className="font-semibold text-[#FF1688] hover:text-[#FF4FA3] transition-colors"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
