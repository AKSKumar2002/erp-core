"use client";

import React, { useState } from 'react';
import {
    Plus,
    Search,
    Coins,
    History,
    AlertTriangle,
    ArrowRight,
    Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import StatCard from '@/components/dashboard/StatCard';

export default function GirviPage() {
    const [activeTab, setActiveTab] = useState('Active Loans');

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 font-serif">Girvi & Mortgages</h1>
                    <p className="text-zinc-400 text-sm mt-1">Manage Loans, Interest, and Releases.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm">
                        <History size={16} /> History
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 text-sm">
                        <Plus size={18} /> New Loan
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard title="Total Loan Amount" value="₹ 85,40,000" icon={Coins} description="Principal Outstanding" />
                <StatCard title="Interest Recovered" value="₹ 2,15,000" icon={Coins} isPositive={true} description="This Month" />
                <StatCard title="Active Accounts" value="142" icon={Users} />
                <StatCard title="Overdue Interest" value="18" icon={AlertTriangle} description="Accounts > 3 months" isPositive={false} />
            </div>

            <div className="glass-card overflow-hidden bg-zinc-900/40 border-zinc-800">
                <div className="p-4 border-b border-zinc-800 flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex gap-4 overflow-x-auto">
                        {['Active Loans', 'Overdue', 'Released', 'Auctioned'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "pb-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap px-1",
                                    activeTab === tab
                                        ? "text-amber-500 border-amber-500"
                                        : "text-zinc-500 border-transparent hover:text-zinc-300"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search Girvi No or Name..."
                            className="w-full sm:w-64 bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-amber-500/50"
                        />
                    </div>
                </div>

                <table className="w-full text-sm text-left text-zinc-400">
                    <thead className="bg-zinc-900/80 text-zinc-200 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Girvi No</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Loan Date</th>
                            <th className="px-6 py-4">Items</th>
                            <th className="px-6 py-4 text-right">Principal</th>
                            <th className="px-6 py-4 text-right">Interest Due</th>
                            <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                        {[1, 2, 3].map(i => (
                            <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                                <td className="px-6 py-4 font-mono text-zinc-300">G-2025-0{i}0</td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-zinc-200">Ramesh Kumar</div>
                                    <div className="text-xs text-zinc-500">9876543210</div>
                                </td>
                                <td className="px-6 py-4">15 Oct, 2025</td>
                                <td className="px-6 py-4">Gold Chain (15g)</td>
                                <td className="px-6 py-4 text-right font-mono text-zinc-200">₹ 50,000</td>
                                <td className="px-6 py-4 text-right font-mono text-red-400">₹ 1,500</td>
                                <td className="px-6 py-4">
                                    <button className="mx-auto flex items-center gap-1 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded border border-zinc-700 text-xs transition-colors">
                                        View <ArrowRight size={12} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
