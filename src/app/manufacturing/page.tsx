"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Plus,
    Search,
    Hammer,
    Users,
    ClipboardList,
    AlertTriangle,
    Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { MOCK_JOBS } from '@/types/manufacturing';
import StatCard from '@/components/dashboard/StatCard';

export default function ManufacturingPage() {
    const [activeTab, setActiveTab] = useState('All Jobs');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 font-serif">Manufacturing Hub</h1>
                    <p className="text-zinc-400 text-sm mt-1">Track Jobs, Karigars, and Production Cycles.</p>
                </div>
                <div className="flex gap-2">
                    <Link href="/manufacturing/karigar">
                        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm">
                            <Users size={16} /> Karigar List
                        </button>
                    </Link>
                    <Link href="/manufacturing/jobs/new">
                        <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 text-sm">
                            <Plus size={18} /> New Job Card
                        </button>
                    </Link>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard
                    title="Jobs in Progress"
                    value="42"
                    icon={Hammer}
                    description="12 High Priority"
                    className="border-amber-500/20 bg-amber-500/5"
                />
                <StatCard
                    title="Gold with Karigars"
                    value="1,250.5 g"
                    icon={ClipboardList}
                    description="Across 15 Karigars"
                />
                <StatCard
                    title="Due This Week"
                    value="8"
                    icon={Clock}
                    description="Delivery Pending"
                    isPositive={false}
                />
                <StatCard
                    title="Loss / Wastage"
                    value="45.2 g"
                    icon={AlertTriangle}
                    description="This Month"
                />
            </div>

            {/* Job Tracking Area */}
            <div className="space-y-4">
                {/* Tabs & Filters */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 border-b border-zinc-800 pb-2">
                    <div className="flex gap-4 overflow-x-auto">
                        {['All Jobs', 'Casting', 'Setting', 'Polishing', 'Completed'].map((tab) => (
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
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search Job ID or Karigar..."
                            className="w-full bg-zinc-900/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-amber-500/50"
                        />
                    </div>
                </div>

                {/* Kanban / List View of Jobs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_JOBS.map((job) => (
                        <div key={job.id} className="glass-card group hover:border-amber-500/30 transition-all p-5 bg-zinc-900/40 border-zinc-800 relative">
                            {/* Priority Badge */}
                            {job.priority === 'Urgent' && (
                                <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] uppercase font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded-full border border-red-500/20">
                                    <AlertTriangle size={10} /> Urgent
                                </span>
                            )}

                            <div className="mb-4">
                                <div className="text-xs text-zinc-500 font-mono mb-1">{job.jobId}</div>
                                <h3 className="text-base font-semibold text-zinc-200 group-hover:text-amber-500 transition-colors">{job.designName}</h3>
                                <div className="text-xs text-zinc-400 mt-1">Order for: {job.customerName || 'Stock'}</div>
                            </div>

                            <div className="flex justify-between items-center py-3 border-y border-zinc-800/50 mb-4">
                                <div className="text-center">
                                    <div className="text-[10px] uppercase text-zinc-500 mb-0.5">Assigned To</div>
                                    <div className="text-sm font-medium text-zinc-300">{job.karigarName}</div>
                                </div>
                                <div className="h-8 w-px bg-zinc-800"></div>
                                <div className="text-center">
                                    <div className="text-[10px] uppercase text-zinc-500 mb-0.5">Stage</div>
                                    <div className="text-sm font-medium text-amber-500">{job.currentDepartment}</div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-xs text-zinc-500">
                                <div className="flex items-center gap-1.5">
                                    <Clock size={12} /> Due: {job.deliveryDate}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    Issued: <span className="text-zinc-300">{job.issuedGoldWeight}g</span>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-zinc-800/50 flex gap-2">
                                <button className="flex-1 py-1.5 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded border border-zinc-700 transition-colors">
                                    View Details
                                </button>
                                <button className="flex-1 py-1.5 text-xs bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded border border-emerald-500/20 transition-colors">
                                    Complete Process
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Add Job Placeholder Card */}
                    <Link href="/manufacturing/jobs/new" className="border-2 border-dashed border-zinc-800 rounded-xl p-5 flex flex-col items-center justify-center text-zinc-500 hover:text-amber-500 hover:border-amber-500/30 hover:bg-zinc-900/30 transition-all cursor-pointer min-h-[240px]">
                        <Plus size={32} className="mb-2" />
                        <span className="font-medium">Issue New Job</span>
                        <span className="text-xs mt-1 text-center max-w-[150px]">Create job card to karigar</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
