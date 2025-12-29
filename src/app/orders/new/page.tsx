"use client";

import React from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    Save,
    UserPlus,
    Search,
    Calendar,
    Image as ImageIcon,
    IndianRupee,
    Scale
} from 'lucide-react';
import { toast } from 'sonner';

export default function NewOrderPage() {
    const handleSubmit = () => {
        // Validate logic would go here
        toast.success("Order created successfully!", {
            description: "Order #ORD-2025-003 has been generated and sent to production.",
            action: {
                label: 'View Order',
                onClick: () => console.log('View'),
            },
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
                        <h1 className="text-2xl font-bold text-zinc-100 font-serif">Create New Order</h1>
                        <p className="text-zinc-400 text-sm">Custom jewelry order for customer.</p>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-6 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                >
                    <Save size={18} /> Save Order
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Customer Details */}
                <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4 h-fit">
                    <h2 className="text-lg font-semibold text-zinc-200 border-b border-zinc-800 pb-2 mb-4">1. Customer Info</h2>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">Search Customer</label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Mobile or Name..."
                                        className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg pl-10 pr-4 py-2"
                                    />
                                </div>
                                <button className="p-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700" title="Add New Customer">
                                    <UserPlus size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-zinc-800/50">
                            <div className="text-xs text-zinc-500 mb-2">Selected Customer</div>
                            <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                                <div className="font-medium text-zinc-200">Mrs. Sharma</div>
                                <div className="text-xs text-zinc-400">+91 98765 43210</div>
                                <div className="text-xs text-amber-500 mt-1">Loyalty Points: 150</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Details */}
                <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-4">
                    <h2 className="text-lg font-semibold text-zinc-200 border-b border-zinc-800 pb-2 mb-4">2. Order Details</h2>

                    <div className="space-y-3">
                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">Item Name</label>
                            <input type="text" placeholder="e.g. Gold Necklace Design A4" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm" />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Metal</label>
                                <select className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm">
                                    <option>Gold</option>
                                    <option>Silver</option>
                                    <option>Platinum</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Purity</label>
                                <select className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm">
                                    <option>22K</option>
                                    <option>18K</option>
                                    <option>24K</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Approx Weight (g)</label>
                                <div className="relative">
                                    <input type="number" placeholder="25.000" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm pl-8" />
                                    <Scale className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500 w-3.5 h-3.5" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Delivery Date</label>
                                <div className="relative">
                                    <input type="date" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm pl-8" />
                                    <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500 w-3.5 h-3.5" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs text-zinc-400">Design Image</label>
                            <div className="border-2 border-dashed border-zinc-700 rounded-lg p-3 flex flex-col items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:border-zinc-500 transition-colors cursor-pointer text-xs h-24">
                                <ImageIcon size={20} className="mb-1" />
                                Click or Drag Image
                            </div>
                        </div>

                        <div className="space-y-1 pt-2 border-t border-zinc-800/50">
                            <label className="text-xs text-zinc-400">Advance Amount</label>
                            <div className="relative">
                                <input type="number" className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-lg font-medium rounded pl-8 pr-4 py-2 focus:border-amber-500" placeholder="0" />
                                <IndianRupee className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
