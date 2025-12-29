"use client";

import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

export default function Header() {
    return (
        <header className="h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-30">
            {/* Left Search */}
            <div className="flex-1 max-w-md hidden md:block">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 group-focus-within:text-amber-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search for Order, Tag No, or Customer..."
                        className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-200 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <span className="hidden sm:block text-amber-500/80 font-medium">Gold Rate:</span>
                    <span className="flex items-center gap-1 font-mono">
                        24K: ₹72,500 <span className="text-green-500 text-xs">▲</span>
                    </span>
                </div>

                <div className="h-6 w-px bg-zinc-800 mx-2" />

                <button className="relative p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full transition-all">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </button>

                <div className="flex items-center gap-3 pl-2 cursor-pointer hover:bg-zinc-900 py-1 px-2 rounded-lg transition-colors">
                    <div className="text-right hidden sm:block">
                        <div className="text-sm font-medium text-zinc-200">Admin User</div>
                        <div className="text-xs text-zinc-500">Super Admin</div>
                    </div>
                    <UserCircle className="w-9 h-9 text-zinc-300" />
                </div>
            </div>
        </header>
    );
}
