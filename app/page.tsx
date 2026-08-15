'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username.trim()}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Background Decorative Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <header className="relative z-10 border-b border-slate-800/80 bg-slate-900/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
              P
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              DevPortfolio Hub
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex-1 flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Dynamic Developer Portfolios
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Showcase Your <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Developer Journey
            </span> Effortlessly
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Build, customize, and share your personal developer portfolio in seconds. Manage your projects, skills, and bio seamlessly with our intuitive admin panel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full mb-16">
          {/* Admin / Builder Card */}
          <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Admin Panel</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Create or update your developer profile, add projects, tech stacks, experience, and social links with real-time database updates.
              </p>
            </div>
            <Link
              href="/admin"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/20"
            >
              Go to Admin Dashboard
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">View Portfolio</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Enter any developer's username below to view their live personalized portfolio page directly.
              </p>

              <form onSubmit={handleSearch} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Enter username (e.g. dev_user)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-colors"
                >
                  Search
                </button>
              </form>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Quick Demo Link:</span>
              <Link href="/dev_user" className="text-purple-400 hover:underline font-medium">
                /dev_user &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full text-center">
          <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/30">
            <h3 className="text-white font-semibold mb-2">⚡ Lightning Fast</h3>
            <p className="text-slate-400 text-xs">Powered by Next.js Server Components and Neon PostgreSQL.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/30">
            <h3 className="text-white font-semibold mb-2">🎨 Clean UI Design</h3>
            <p className="text-slate-400 text-xs">Modern dark theme crafted for developers and tech recruiters.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/30">
            <h3 className="text-white font-semibold mb-2">🔗 Dynamic Routing</h3>
            <p className="text-slate-400 text-xs">Access your unique profile instantly at <code>/[your-username]</code>.</p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        DevPortfolio Hub &copy; {new Date().getFullYear()} &bull; Built with Next.js &amp; Neon
      </footer>
    </div>
  );
}