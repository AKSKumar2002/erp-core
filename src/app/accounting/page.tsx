"use client";

import React from 'react';
import StatCard from '@/components/dashboard/StatCard';
import { Landmark, TrendingUp, TrendingDown, FileText, Download } from 'lucide-react';

export default function AccountingPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 font-serif">Accounting & Compliance</h1>
                    <p className="text-zinc-400 text-sm mt-1">Ledgers, GST Returns, and Profit Analysis.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm">
                    <Download size={16} /> GST Report
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard
                    title="Total Receivables"
                    value="₹ 45,20,000"
                    icon={TrendingUp}
                    isPositive={true}
                    change="+5%"
                />
                <StatCard
                    title="Total Payables"
                    value="₹ 12,80,000"
                    icon={TrendingDown}
                    isPositive={false}
                />
                <StatCard
                    title="Cash Balance"
                    value="₹ 5,20,000"
                    icon={Landmark}
                />
                <StatCard
                    title="GST Liability"
                    value="₹ 1,45,000"
                    icon={FileText}
                    description="Due in 5 days"
                />
            </div>

            <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800">
                <h2 className="text-lg font-semibold text-zinc-200 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['New Payment Voucher', 'New Receipt Voucher', 'Journal Entry', 'Contra Entry'].map(action => (
                        <button key={action} className="p-4 bg-zinc-950/50 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-900 rounded-xl text-zinc-300 text-sm transition-all hover:text-amber-500 font-medium">
                            {action}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
