"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Plus,
    Search,
    Filter,
    Printer,
    Eye,
    FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SalesPage() {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 font-serif">Sales & Billing</h1>
                    <p className="text-zinc-400 text-sm mt-1">Manage Invoices, Estimates, and Returns.</p>
                </div>
                <div className="flex gap-2">
                    <Link href="/sales/new">
                        <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 text-sm">
                            <Plus size={18} /> New Bill
                        </button>
                    </Link>
                </div>
            </div>

            {/* Filters */}
            <div className="glass-card p-4 bg-zinc-900/40 border-zinc-800 flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                    {['All', 'Paid', 'Pending', 'Estimates', 'Returns'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors",
                                activeTab === tab
                                    ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2 min-w-[300px]">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search Invoice or Customer..."
                            className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-amber-500/50"
                        />
                    </div>
                    <button className="p-2 bg-zinc-800 text-zinc-400 rounded-lg hover:text-zinc-200">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            {/* Sales Table */}
            <div className="glass-card overflow-hidden bg-zinc-900/40 border-zinc-800">
                <table className="w-full text-sm text-left text-zinc-400">
                    <thead className="bg-zinc-900/80 text-zinc-200 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Invoice #</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Mobile</th>
                            <th className="px-6 py-4 text-right">Amount</th>
                            <th className="px-6 py-4 text-center">Payment</th>
                            <th className="px-6 py-4 text-center">Status</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                        {[1, 2, 3].map((i) => (
                            <tr key={i} className="hover:bg-zinc-900/30 transition-colors">
                                <td className="px-6 py-4">28 Oct, 2025</td>
                                <td className="px-6 py-4 font-mono text-zinc-300">INV-2025-00{i}</td>
                                <td className="px-6 py-4 font-medium text-zinc-200">Rahul Kumar</td>
                                <td className="px-6 py-4">9876543210</td>
                                <td className="px-6 py-4 text-right font-mono text-zinc-200">₹ 85,000</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="text-xs bg-zinc-800 px-2 py-1 rounded">UPI</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-500/20">Paid</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button className="p-1.5 hover:bg-zinc-800 rounded text-sky-400"><Eye size={16} /></button>
                                        <Link href="/print/invoice/1" target="_blank">
                                            <button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400"><Printer size={16} /></button>
                                        </Link>
                                        <button className="p-1.5 hover:bg-zinc-800 rounded text-amber-500"><FileText size={16} /></button>
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
