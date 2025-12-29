"use client";

import React from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Save,
    Upload,
    Store,
    MapPin,
    FileText
} from 'lucide-react';
import { toast } from 'sonner';

export default function BusinessProfilePage() {
    const handleSave = () => {
        toast.success("Settings Saved", {
            description: "Business profile details updated successfully."
        });
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/settings" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-zinc-100 font-serif">Company Profile</h1>
                        <p className="text-zinc-400 text-sm">Update your business identity for invoices.</p>
                    </div>
                </div>
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                >
                    <Save size={18} /> Save Changes
                </button>
            </div>

            <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-6">
                {/* Section 1: Identity */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                        <Store size={16} className="text-amber-500" /> Basic Identity
                    </h3>

                    <div className="flex items-start gap-6">
                        <div className="w-24 h-24 rounded-lg bg-zinc-950 border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center text-zinc-500 hover:border-amber-500/50 hover:text-amber-500 cursor-pointer transition-colors group">
                            <Upload size={24} className="mb-1" />
                            <span className="text-[10px]">Upload Logo</span>
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Business Name</label>
                                <input type="text" defaultValue="GMS JAIN JEWELLERS" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Tagline / Slogan</label>
                                <input type="text" defaultValue="Timeless Elegance" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-zinc-800/50 w-full" />

                {/* Section 2: Contact & Address */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                        <MapPin size={16} className="text-amber-500" /> Location & Contact
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2 space-y-1">
                            <label className="text-xs text-zinc-400">Showroom Address</label>
                            <input type="text" defaultValue="12, Zaveri Bazaar, Mumbai, Maharashtra 400002" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">Phone</label>
                            <input type="text" defaultValue="+91 22 1234 5678" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">Email</label>
                            <input type="text" defaultValue="contact@gmsjain.com" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm" />
                        </div>
                    </div>
                </div>

                <div className="h-px bg-zinc-800/50 w-full" />

                {/* Section 3: Compliance */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                        <FileText size={16} className="text-amber-500" /> Compliance & Tax
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">GSTIN</label>
                            <input type="text" defaultValue="27ABCDE1234F1Z5" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm font-mono tracking-wide" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">BIS License No</label>
                            <input type="text" defaultValue="HM/C-12345678" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm font-mono tracking-wide" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
