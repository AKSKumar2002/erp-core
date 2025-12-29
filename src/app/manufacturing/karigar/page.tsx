"use client";

import React from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Search,
    UserPlus,
    FileText,
    Phone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { MOCK_KARIGARS } from '@/types/manufacturing';

export default function KarigarsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/manufacturing" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-zinc-100 font-serif">Karigar Directory</h1>
                        <p className="text-zinc-400 text-sm mt-1">Manage artisans, their ledgers, and job history.</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 text-sm">
                    <UserPlus size={18} /> Add New Karigar
                </button>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-5 bg-zinc-900/40 border-zinc-800">
                    <div className="text-zinc-500 text-xs uppercase font-medium mb-1">Total Active Karigars</div>
                    <div className="text-2xl font-bold text-zinc-100">12</div>
                </div>
                <div className="glass-card p-5 bg-zinc-900/40 border-zinc-800">
                    <div className="text-zinc-500 text-xs uppercase font-medium mb-1">Total Gold Outstanding</div>
                    <div className="text-2xl font-bold text-amber-500 font-mono">1,450.00 g</div>
                </div>
                <div className="glass-card p-5 bg-zinc-900/40 border-zinc-800">
                    <div className="text-zinc-500 text-xs uppercase font-medium mb-1">Total Labour Payable</div>
                    <div className="text-2xl font-bold text-zinc-100 font-mono">₹ 1,25,000</div>
                </div>
            </div>

            {/* Karigar List */}
            <div className="glass-card overflow-hidden bg-zinc-900/40 border-zinc-800">
                {/* Search Filter */}
                <div className="p-4 border-b border-zinc-800 bg-zinc-900/20">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search by Name or Mobile..."
                            className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-amber-500/50"
                        />
                    </div>
                </div>

                <table className="w-full text-sm text-left text-zinc-400">
                    <thead className="bg-zinc-900/80 text-zinc-200 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Karigar Name</th>
                            <th className="px-6 py-4">Skills / Dept</th>
                            <th className="px-6 py-4 text-right">Gold Balance</th>
                            <th className="px-6 py-4 text-right">Cash Balance</th>
                            <th className="px-6 py-4 text-center">Status</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                        {MOCK_KARIGARS.map((k) => (
                            <tr key={k.id} className="hover:bg-zinc-900/30 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-zinc-200">{k.name}</div>
                                    <div className="flex items-center gap-1 text-xs text-zinc-500 mt-0.5">
                                        <Phone size={10} /> {k.mobile}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-1">
                                        {k.skills.map(s => (
                                            <span key={s} className="px-2 py-0.5 bg-zinc-800 rounded text-xs border border-zinc-700">{s}</span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className={cn("font-mono font-medium", k.balanceGold > 0 ? "text-amber-500" : "text-zinc-400")}>
                                        {k.balanceGold.toFixed(3)} g
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className={cn("font-mono font-medium", k.balanceCash > 0 ? "text-red-400" : "text-zinc-400")}>
                                        ₹ {k.balanceCash.toLocaleString()}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs border border-emerald-500/20">
                                        {k.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-2">
                                        <button className="text-zinc-400 hover:text-amber-500 text-xs underline decoration-zinc-600 hover:decoration-amber-500 flex items-center gap-1">
                                            <FileText size={12} /> Ledger
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
