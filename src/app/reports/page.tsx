"use client";

import React, { useState } from 'react';
import {
    BarChart3,
    FileText,
    Download,
    Calendar,
    Layers,
    TrendingUp,
    AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import SalesChart from '@/components/dashboard/SalesChart';
import StatCard from '@/components/dashboard/StatCard';

export default function ReportsPage() {
    const [reportType, setReportType] = useState('Sales');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 font-serif">Business Reports</h1>
                    <p className="text-zinc-400 text-sm mt-1">Deep dive into Sales, Stock, and Financial Health.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm">
                        <Calendar size={16} /> This Month
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 text-sm">
                        <Download size={18} /> Export PDF
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar Navigation */}
                <div className="glass-card bg-zinc-900/40 border-zinc-800 p-4 space-y-2 h-fit">
                    <h3 className="text-xs uppercase font-semibold text-zinc-500 mb-2 px-2">Report Categories</h3>
                    {[
                        { id: 'Sales', icon: TrendingUp },
                        { id: 'Stock / Inventory', icon: Layers },
                        { id: 'GST & Accounting', icon: FileText },
                        { id: 'Karigar Analysis', icon: BarChart3 },
                        { id: 'Exceptions', icon: AlertCircle },
                    ].map((r) => (
                        <button
                            key={r.id}
                            onClick={() => setReportType(r.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-left",
                                reportType === r.id
                                    ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                            )}
                        >
                            <r.icon size={18} /> {r.id}
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {reportType === 'Sales' && (
                        <>
                            <SalesChart />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="glass-card p-5 bg-zinc-900/40 border-zinc-800">
                                    <h3 className="text-sm font-semibold text-zinc-300 mb-4">Top Selling Categories</h3>
                                    <div className="space-y-3">
                                        {[
                                            { name: 'Gold Bangles (22K)', pct: '45%' },
                                            { name: 'Diamond Rings', pct: '25%' },
                                            { name: 'Silver Articles', pct: '15%' },
                                        ].map((c) => (
                                            <div key={c.name} className="space-y-1">
                                                <div className="flex justify-between text-xs text-zinc-400">
                                                    <span>{c.name}</span>
                                                    <span>{c.pct}</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-amber-500" style={{ width: c.pct }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-card p-5 bg-zinc-900/40 border-zinc-800">
                                    <h3 className="text-sm font-semibold text-zinc-300 mb-4">Payment Modes</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 bg-zinc-950/50 rounded-lg text-center border border-zinc-800">
                                            <div className="text-xs text-zinc-500">Cash</div>
                                            <div className="text-lg font-bold text-zinc-200">₹ 15.2L</div>
                                        </div>
                                        <div className="p-3 bg-zinc-950/50 rounded-lg text-center border border-zinc-800">
                                            <div className="text-xs text-zinc-500">Digital / Card</div>
                                            <div className="text-lg font-bold text-zinc-200">₹ 28.5L</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {reportType === 'Stock / Inventory' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard title="Total Gold Weight" value="4,250 g" icon={Layers} />
                            <StatCard title="Total Diamond Carat" value="145.5 ct" icon={Layers} />
                            <StatCard title="Stock Value (Est)" value="₹ 3.2 Cr" icon={TrendingUp} />

                            <div className="md:col-span-3 glass-card p-6 bg-zinc-900/40 border-zinc-800">
                                <h3 className="text-lg font-semibold text-zinc-200 mb-4">Aging Analysis</h3>
                                <table className="w-full text-sm text-left text-zinc-400">
                                    <thead>
                                        <tr className="border-b border-zinc-800">
                                            <th className="py-2">Age Group</th>
                                            <th className="py-2">Items</th>
                                            <th className="py-2 text-right">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-zinc-800/50">
                                            <td className="py-3">0-30 Days</td>
                                            <td>145</td>
                                            <td className="text-right">₹ 45L</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800/50">
                                            <td className="py-3">30-90 Days</td>
                                            <td>82</td>
                                            <td className="text-right">₹ 28L</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 text-red-400">90+ Days (Dead Stock)</td>
                                            <td className="text-red-400">12</td>
                                            <td className="text-right text-red-400">₹ 8.5L</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Placeholders for others */}
                    {!['Sales', 'Stock / Inventory'].includes(reportType) && (
                        <div className="flex flex-col items-center justify-center h-64 text-zinc-500 glass-card bg-zinc-900/40 border-zinc-800">
                            <FileText size={48} className="mb-4 opacity-50" />
                            <p>Detailed report generation for {reportType}...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
