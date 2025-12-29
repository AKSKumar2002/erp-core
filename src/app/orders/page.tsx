"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Search,
    Hammer,
    ShoppingCart,
    Calendar,
    Eye,
    CheckCircle2,
    XCircle,
    Clock,
    Printer
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { MOCK_ORDERS, OrderStatus } from '@/types/orders';
import { toast } from 'sonner';

export default function OrdersPage() {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 font-serif">Orders & Repair Management</h1>
                    <p className="text-zinc-400 text-sm mt-1">Track Custom Orders, Repairs, and Deliveries.</p>
                </div>
                <div className="flex gap-2">
                    <Link href="/orders/new">
                        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm">
                            <ShoppingCart size={16} /> New Custom Order
                        </button>
                    </Link>
                    <Link href="/orders/repair">
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 text-sm">
                            <Hammer size={18} /> New Repair Job
                        </button>
                    </Link>
                </div>
            </div>

            {/* Tabs & Search */}
            <div className="glass-card p-4 bg-zinc-900/40 border-zinc-800 flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex gap-4 overflow-x-auto">
                    {['All', 'Custom Orders', 'Repairs', 'Overdue', 'Delivered'].map((tab) => (
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

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search Order No or Customer..."
                        className="w-full sm:w-64 bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-amber-500/50"
                    />
                </div>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
                {MOCK_ORDERS.map((order) => (
                    <div key={order.id} className="glass-card p-5 bg-zinc-900/40 border-zinc-800 hover:border-amber-500/30 transition-all group">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            {/* Left: Info */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="font-mono text-zinc-400 text-sm">{order.orderNo}</span>
                                    <span className={cn(
                                        "px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider",
                                        order.type === 'Custom' ? "bg-amber-500/10 text-amber-500" : "bg-blue-500/10 text-blue-400"
                                    )}>
                                        {order.type}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-200">{order.customerName}</h3>
                                <div className="text-sm text-zinc-500 mt-1">{order.itemDetails}</div>

                                <div className="flex gap-4 mt-3 text-sm text-zinc-400">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} /> Due: <span className="text-zinc-300">{order.deliveryDate}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        Est. Amount: <span className="text-zinc-300">₹ {order.estimatedAmount.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Actions & Status */}
                            <div className="flex flex-col items-end gap-3 justify-center min-w-[200px]">
                                <StatusBadge status={order.status} />

                                <div className="flex items-center gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => toast.success("Invoice sent to WhatsApp!")}
                                        className="p-2 hover:bg-zinc-800 text-zinc-400 hover:text-green-500 rounded-lg transition-colors"
                                        title="WhatsApp"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.99 16.59c-.87.72-1.89 1.14-2.99 1.14-3.52 0-6.38-2.58-6.91-5.91-.18-1.12.04-2.31.64-3.35.08-.14.28-.15.39-.03.7.83 1.57 1.53 2.55 2.05.15.08.31.06.4-.08.62-1.01 1.09-2.14 1.37-3.32.05-.2.27-.3.44-.22 1.3.61 2.37 1.5 3.12 2.62.15.22.09.52-.15.65-.68.36-1.42.63-2.21.78-.29.05-.51.27-.58.56-.25 1.05-.72 2.02-1.37 2.86-.14.18-.08.44.15.49 1.5.33 3.09.12 4.43-.6.2-.11.45.02.48.25.1.75.05 1.48-.13 2.16z"></path></svg>
                                    </button>
                                    <Link href="/print/job/1" target="_blank">
                                        <button
                                            className="p-2 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 rounded-lg transition-colors"
                                            title="Print Job Card"
                                        >
                                            <Printer size={18} />
                                        </button>
                                    </Link>
                                    <button
                                        className="p-2 hover:bg-zinc-800 text-zinc-400 hover:text-amber-500 rounded-lg transition-colors"
                                        title="View Details"
                                    >
                                        <Eye size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: OrderStatus }) {
    const styles = {
        'Pending': 'bg-zinc-800 text-zinc-400 border-zinc-700',
        'In Process': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        'Ready': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        'Delivered': 'bg-zinc-800 text-zinc-500 border-zinc-700 line-through',
        'Cancelled': 'bg-red-500/10 text-red-400 border-red-500/20',
    };

    const icons = {
        'Pending': Clock,
        'In Process': Hammer,
        'Ready': CheckCircle2,
        'Delivered': CheckCircle2,
        'Cancelled': XCircle
    };

    const Icon = icons[status];

    return (
        <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5", styles[status])}>
            {Icon && <Icon size={12} />}
            {status}
        </span>
    );
}
