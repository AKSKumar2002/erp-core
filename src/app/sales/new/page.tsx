"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Search,
    Trash2,
    UserPlus,
    CreditCard,
    Save,
    ScanBarcode
} from 'lucide-react';

export default function NewSalePage() {
    const [items, setItems] = useState([
        { id: 1, tag: 'TAG-1001', name: 'Gold Necklace 22K', weight: '43.400', va: '12%', rate: '6850', total: '2,97,290' }
    ]);

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col md:flex-row gap-6 pb-6">

            {/* LEFT: Billing Area */}
            <div className="flex-1 flex flex-col gap-4 overflow-hidden">

                {/* Header & Customer Selection */}
                <div className="glass-card p-4 bg-zinc-900/40 border-zinc-800 flex items-center gap-4">
                    <Link href="/sales" className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400">
                        <ArrowLeft size={20} />
                    </Link>
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search Customer (Mobile / Name)..."
                            className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-amber-500/50"
                            autoFocus
                        />
                    </div>
                    <button className="p-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 border border-zinc-700">
                        <UserPlus size={20} />
                    </button>
                </div>

                {/* Items Table */}
                <div className="flex-1 glass-card bg-zinc-900/40 border-zinc-800 overflow-hidden flex flex-col">
                    {/* Scanner Input */}
                    <div className="p-4 border-b border-zinc-800 flex gap-4">
                        <div className="relative flex-1">
                            <ScanBarcode className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Scan Tag or Enter Item Code..."
                                className="w-full bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-amber-500"
                            />
                        </div>
                        <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-sm border border-zinc-700">
                            Manual Add
                        </button>
                    </div>

                    <div className="flex-1 overflow-auto">
                        <table className="w-full text-sm text-left text-zinc-400">
                            <thead className="bg-zinc-900/80 text-zinc-200 sticky top-0">
                                <tr>
                                    <th className="px-4 py-3">#</th>
                                    <th className="px-4 py-3">Item Details</th>
                                    <th className="px-4 py-3 text-right">Net Wt</th>
                                    <th className="px-4 py-3 text-right">VA %</th>
                                    <th className="px-4 py-3 text-right">Rate</th>
                                    <th className="px-4 py-3 text-right">Total</th>
                                    <th className="px-4 py-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800">
                                {items.map((item, idx) => (
                                    <tr key={item.id} className="hover:bg-zinc-900/30">
                                        <td className="px-4 py-3">{idx + 1}</td>
                                        <td className="px-4 py-3">
                                            <div className="text-zinc-200 font-medium">{item.name}</div>
                                            <div className="text-xs text-zinc-500 font-mono">{item.tag}</div>
                                        </td>
                                        <td className="px-4 py-3 text-right font-mono text-zinc-300">{item.weight} g</td>
                                        <td className="px-4 py-3 text-right font-mono text-zinc-300">{item.va}</td>
                                        <td className="px-4 py-3 text-right font-mono text-zinc-300">{item.rate}</td>
                                        <td className="px-4 py-3 text-right font-mono text-amber-500 font-medium">₹ {item.total}</td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-red-400 hover:text-red-300 p-1 hover:bg-red-500/10 rounded">
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {items.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="text-center py-20 text-zinc-600">
                                            Scan a tag to start billing...
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* RIGHT: Payment & Totals */}
            <div className="w-full md:w-96 flex flex-col gap-4">

                <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-400">Sub Total</span>
                        <span className="text-zinc-200 font-mono">₹ 2,97,290</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-400">Making Charges</span>
                        <span className="text-zinc-200 font-mono">₹ 12,500</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-400">GST (3%)</span>
                        <span className="text-zinc-200 font-mono">₹ 9,293</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-zinc-800 pb-4">
                        <span className="text-zinc-400">Discount</span>
                        <span className="text-green-500 font-mono">- ₹ 0</span>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                        <span className="text-lg font-bold text-zinc-100">Grand Total</span>
                        <span className="text-2xl font-bold text-amber-500 font-serif">₹ 3,19,083</span>
                    </div>
                </div>

                <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 flex-1 flex flex-col justify-end space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs text-zinc-400">Payment Mode</label>
                        <div className="grid grid-cols-3 gap-2">
                            <button className="p-2 border border-amber-500 bg-amber-500/20 text-amber-500 rounded text-sm font-medium">Cash</button>
                            <button className="p-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 rounded text-sm">Card</button>
                            <button className="p-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 rounded text-sm">UPI</button>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-colors">
                        <CreditCard size={20} /> Checkout & Print
                    </button>
                    <button className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium rounded-lg border border-zinc-700 flex items-center justify-center gap-2 transition-colors">
                        <Save size={20} /> Save as Estimate
                    </button>
                </div>
            </div>

        </div>
    );
}
