"use client";

import React from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Save,
    Scale,
    User,
    Image as ImageIcon,
    Calendar
} from 'lucide-react';

export default function NewJobCardPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/manufacturing" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-zinc-100 font-serif">Issue New Job Card</h1>
                        <p className="text-zinc-400 text-sm">Assign material and design to Karigar.</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                    <Save size={18} /> Issue Job
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Design & Order Details */}
                <section className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-200 border-b border-zinc-800 pb-2 mb-4">1. Design & Order</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-zinc-400 mb-2 block">Upload Design / Sketch</label>
                            <div className="border-2 border-dashed border-zinc-700 rounded-lg h-32 flex flex-col items-center justify-center text-zinc-500 hover:bg-zinc-900/50 hover:border-amber-500/30 transition-colors cursor-pointer">
                                <ImageIcon size={24} className="mb-2" />
                                <span className="text-xs">Click to upload image</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Design Name</label>
                                <input type="text" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm" placeholder="e.g. Jhumka Type A" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Priority</label>
                                <select className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm">
                                    <option>Normal</option>
                                    <option>Urgent</option>
                                    <option>VVIP</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">Description / Instructions</label>
                            <textarea rows={3} className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm resize-none" placeholder="Special instructions for karigar..." />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">Due Date</label>
                            <div className="relative">
                                <input type="date" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm pl-10" />
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="space-y-6">
                    {/* Material Issue */}
                    <section className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
                        <h2 className="text-lg font-semibold text-zinc-200 border-b border-zinc-800 pb-2 mb-4">2. Material Issue</h2>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Metal Type & Purity</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <select className="bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm">
                                        <option>Gold</option>
                                        <option>Silver</option>
                                    </select>
                                    <select className="bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm">
                                        <option>22K (916)</option>
                                        <option>18K (750)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400 flex justify-between">
                                    Weighing Scale Reading
                                    <span className="text-amber-500 flex items-center gap-1"><Scale size={12} /> Live</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        placeholder="0.000"
                                        className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-lg font-mono font-medium rounded-lg pl-4 pr-10 py-2.5 focus:border-amber-500"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">g</span>
                                </div>
                            </div>

                            <div className="flex gap-2 text-xs">
                                <button className="flex-1 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 rounded border border-zinc-700 transition-colors">
                                    + Add Stone Packet
                                </button>
                                <button className="flex-1 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 rounded border border-zinc-700 transition-colors">
                                    + Add Scrap
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Karigar Selection */}
                    <section className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
                        <h2 className="text-lg font-semibold text-zinc-200 border-b border-zinc-800 pb-2 mb-4">3. Assign Karigar</h2>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Select Karigar</label>
                                <div className="relative">
                                    <select className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm appearance-none focus:border-amber-500">
                                        <option>Ramesh Bengali (Gold Bal: 125g)</option>
                                        <option>Suresh Setter</option>
                                        <option>Abdul Polish</option>
                                    </select>
                                    <User className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 pointer-events-none" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Department Stage</label>
                                <select className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm focus:border-amber-500">
                                    <option>Casting</option>
                                    <option>Filing / Ghat</option>
                                    <option>Setting</option>
                                    <option>Polishing</option>
                                </select>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
