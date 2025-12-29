"use client";

import React, { useState } from 'react';
import {
    Users,
    Gift,
    Calendar,
    Search,
    Plus,
    CheckCircle,
    Phone
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import { cn } from '@/lib/utils';
import { MOCK_CUSTOMERS, MOCK_ACCOUNTS } from '@/types/crm';

export default function CRMPage() {
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 font-serif">CRM & Loyalty</h1>
                    <p className="text-zinc-400 text-sm mt-1">Manage Customers, Kitty Schemes, and Rewards.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm">
                        <Gift size={16} /> New Scheme
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 text-sm">
                        <Plus size={18} /> Add Customer
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard title="Total Customers" value="2,450" icon={Users} change="+15 this week" isPositive={true} />
                <StatCard title="Active Schemes" value="227" icon={Calendar} description="₹ 4.5L Monthly Collection" />
                <StatCard title="Loyalty Points" value="1.2M" icon={Gift} description="Redeemable Value: ₹ 1.2L" />
                <StatCard title="Birthdays Today" value="3" icon={Gift} description="Send Wishes" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Customer List */}
                <div className="lg:col-span-2 glass-card bg-zinc-900/40 border-zinc-800 flex flex-col">
                    <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                        <div className="flex gap-4">
                            {['Overview', 'Customers', 'Schemes'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn("text-sm font-medium transition-colors", activeTab === tab ? "text-amber-500" : "text-zinc-400 hover:text-zinc-200")}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <Search className="w-4 h-4 text-zinc-500" />
                    </div>

                    <div className="p-0 overflow-auto">
                        <table className="w-full text-sm text-left text-zinc-400">
                            <thead className="bg-zinc-900/50 text-zinc-200">
                                <tr>
                                    <th className="px-6 py-3">Customer</th>
                                    <th className="px-6 py-3">City</th>
                                    <th className="px-6 py-3 text-right">Points</th>
                                    <th className="px-6 py-3 text-center">KYC</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800">
                                {MOCK_CUSTOMERS.map(c => (
                                    <tr key={c.id} className="hover:bg-zinc-900/30">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-zinc-200">{c.name}</div>
                                            <div className="text-xs flex items-center gap-1 mt-0.5"><Phone size={10} /> {c.mobile}</div>
                                        </td>
                                        <td className="px-6 py-4">{c.city}</td>
                                        <td className="px-6 py-4 text-right font-mono text-amber-500">{c.loyaltyPoints}</td>
                                        <td className="px-6 py-4 text-center">
                                            {c.kycStatus === 'Verified' ? (
                                                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/20 flex items-center justify-center gap-1 w-fit mx-auto">
                                                    <CheckCircle size={10} /> Verified
                                                </span>
                                            ) : (
                                                <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded-full border border-zinc-700 w-fit mx-auto">Pending</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-xs hover:text-amber-500 underline">View Profile</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Scheme Due Reminders */}
                <div className="glass-card bg-zinc-900/40 border-zinc-800 p-5 space-y-4">
                    <h3 className="font-semibold text-zinc-200">Upcoming Scheme Due</h3>
                    <div className="space-y-3">
                        {MOCK_ACCOUNTS.map(acc => (
                            <div key={acc.id} className="p-3 bg-zinc-950/50 border border-zinc-800 rounded-lg hover:border-amber-500/30 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="text-sm font-medium text-zinc-200">{acc.customerName}</div>
                                        <div className="text-xs text-zinc-500">{acc.schemeName}</div>
                                    </div>
                                    <span className="text-xs font-mono bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded">
                                        {acc.installmentsPaid}/11
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-zinc-400">Due: <span className="text-zinc-300">{acc.nextDueDate}</span></span>
                                    <button className="text-emerald-400 hover:text-emerald-300 font-medium">Collect Now</button>
                                </div>
                            </div>
                        ))}

                        <button className="w-full py-2 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-lg text-sm pt-2 mt-4 text-center border border-zinc-700">
                            Send WhatsApp Reminders
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
