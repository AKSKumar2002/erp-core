"use client";

import React, { useState } from 'react';
import Link from 'next/link';
// Note: User might not have this installed yet, will create basic form first or install it. 
// I will stick to controlled inputs for now to avoid dependency hell unless requested, 
// or I'll implement a clean controlled form.
// Actually, standard React form is fine.

import {
    ArrowLeft,
    Save,
    ScanBarcode,
    Scale
} from 'lucide-react';

export default function AddStockPage() {
    // State for Weight Calculations
    const [grossWt, setGrossWt] = useState<string>('');
    const [stoneWt, setStoneWt] = useState<string>('');

    // Auto-calculate Net Weight
    const gross = parseFloat(grossWt) || 0;
    const stone = parseFloat(stoneWt) || 0;
    const net = gross - stone;
    const netWt = net > 0 ? net.toFixed(3) : '0.000';

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/inventory" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-zinc-100 font-serif">New Stock Entry</h1>
                        <p className="text-zinc-400 text-sm">Add individual items or bulk entry.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700">
                        Save & New
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                        <Save size={18} /> Save Item
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Form Area */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Section 1: Basic Identifiers */}
                    <section className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
                        <h2 className="text-lg font-semibold text-zinc-200 border-b border-zinc-800 pb-2 mb-4">Item Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Tag Number (Auto)</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        defaultValue="TAG-1005"
                                        readOnly
                                        className="w-full bg-zinc-900/50 border border-zinc-700 text-zinc-500 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none"
                                    />
                                    <ScanBarcode className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 w-4 h-4" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">HUID Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter 6-digit HUID"
                                    className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-zinc-400">Product Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Antique Gold Bangle with Ruby"
                                    className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Category</label>
                                <select className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-500/50">
                                    <option>Select Category</option>
                                    <option>Bangles</option>
                                    <option>Necklace</option>
                                    <option>Rings</option>
                                    <option>Chains</option>
                                    <option>Earrings</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Purity</label>
                                <select className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-500/50">
                                    <option>22K (916)</option>
                                    <option>18K (750)</option>
                                    <option>24K (999)</option>
                                    <option>14K</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Weights */}
                    <section className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
                        <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-4">
                            <h2 className="text-lg font-semibold text-zinc-200">Weight Details</h2>
                            <div className="flex items-center gap-2 text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                                Scale Connected
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Gross Weight */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400 flex justify-between">
                                    Gross Wt
                                    <Scale size={14} className="text-zinc-600" />
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        step="0.001"
                                        value={grossWt}
                                        onChange={(e) => setGrossWt(e.target.value)}
                                        placeholder="0.000"
                                        className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-lg font-mono font-medium rounded-lg pl-4 pr-10 py-2.5 focus:outline-none focus:border-amber-500/50"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">g</span>
                                </div>
                            </div>

                            {/* Stone Weight */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Stone/Less Wt</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        step="0.001"
                                        value={stoneWt}
                                        onChange={(e) => setStoneWt(e.target.value)}
                                        placeholder="0.000"
                                        className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-lg font-mono font-medium rounded-lg pl-4 pr-10 py-2.5 focus:outline-none focus:border-amber-500/50"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">g</span>
                                </div>
                            </div>

                            {/* Net Weight (Read Only) */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-amber-500">Net Weight</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        readOnly
                                        value={netWt}
                                        className="w-full bg-amber-500/5 border border-amber-500/30 text-amber-500 text-lg font-mono font-bold rounded-lg pl-4 pr-10 py-2.5 focus:outline-none"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-500/70 text-sm">g</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button className="text-xs text-zinc-500 underline decoration-zinc-700 hover:text-zinc-300">
                                + Add Detailed Stone Breakdown
                            </button>
                        </div>
                    </section>
                </div>

                {/* Sidebar: Pricing & Meta */}
                <div className="space-y-6">
                    <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
                        <h2 className="text-lg font-semibold text-zinc-200 mb-2">Pricing Factors</h2>

                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Wastage (VA) %</label>
                                <input
                                    type="number"
                                    defaultValue={12}
                                    className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Labour / Making Charges (₹)</label>
                                <input
                                    type="number"
                                    defaultValue={650}
                                    className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Stone Value (₹)</label>
                                <input
                                    type="number"
                                    defaultValue={0}
                                    className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm"
                                />
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-zinc-800">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-zinc-400">Est. Price:</span>
                                <span className="text-zinc-200">₹ 2,45,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
                        <h2 className="text-lg font-semibold text-zinc-200 mb-2">Location</h2>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Box No</label>
                                <input
                                    type="text"
                                    placeholder="A-01"
                                    className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm uppercase"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Tray No</label>
                                <input
                                    type="text"
                                    placeholder="T-5"
                                    className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm uppercase"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
