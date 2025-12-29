"use client";

import React from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Save,
    Search,
    UserPlus,
    Camera,
    Calendar,
    IndianRupee
} from 'lucide-react';
import { toast } from 'sonner';

export default function NewRepairPage() {
    const handleSubmit = () => {
        toast.success("Repair Job Created", {
            description: "Job #REP-2025-090 created. SMS sent to customer.",
        });
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/orders" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-zinc-100 font-serif">New Repair Job</h1>
                        <p className="text-zinc-400 text-sm">Take in jewelry for repairs or polishing.</p>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-6 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                >
                    <Save size={18} /> Create Job Ticket
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Customer Selection */}
                <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4 h-fit">
                    <h2 className="text-lg font-semibold text-zinc-200 border-b border-zinc-800 pb-2 mb-4">1. Customer Details</h2>
                    <div className="relative flex-1 mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search Customer Mobile..."
                            className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg pl-10 pr-4 py-2"
                        />
                    </div>

                    <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-between group cursor-pointer hover:border-zinc-600 transition-colors">
                        <div>
                            <div className="text-zinc-400 text-sm">Create New Customer</div>
                            <div className="text-xs text-zinc-500">If not found in database</div>
                        </div>
                        <UserPlus size={18} className="text-zinc-500 group-hover:text-amber-500 transition-colors" />
                    </div>
                </div>

                {/* Repair Details */}
                <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-200 border-b border-zinc-800 pb-2 mb-4">2. Repair Info</h2>

                    <div className="space-y-3">
                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">Item Description</label>
                            <input type="text" placeholder="e.g. Gold Chain Broken Link" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm" />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Gross Wt (Received)</label>
                                <input type="number" placeholder="0.000" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Damage Condition</label>
                                <select className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm">
                                    <option>Minor</option>
                                    <option>Major Breakage</option>
                                    <option>Stone Missing</option>
                                    <option>Polish Only</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">Repair Instructions</label>
                            <textarea rows={3} placeholder="Specific instructions for karigar..." className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm resize-none" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">Photo Evidence</label>
                            <div className="border-2 border-dashed border-zinc-700 rounded-lg p-3 flex flex-col items-center justify-center text-zinc-500 hover:bg-zinc-900 transition-colors h-24">
                                <Camera size={20} className="mb-1" />
                                <span className="text-[10px]">Upload Photo</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-800/50">
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Est. Delivery</label>
                                <div className="relative">
                                    <input type="date" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm pl-8" />
                                    <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500 w-3.5 h-3.5" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Est. Cost</label>
                                <div className="relative">
                                    <input type="number" placeholder="0" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm pl-8 font-medium text-amber-500" />
                                    <IndianRupee className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500 w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
