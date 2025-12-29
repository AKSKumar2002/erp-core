"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Plus,
    Search,
    Filter,
    Download,
    Printer,
    Edit,
    Eye
} from 'lucide-react';
import { MOCK_INVENTORY, StockStatus } from '@/types/inventory';
import { cn } from '@/lib/utils';

export default function InventoryPage() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter logic could be expanded
    const filteredInventory = MOCK_INVENTORY.filter(item =>
        item.tagId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.huid && item.huid.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-100 font-serif">Inventory Management</h1>
                    <p className="text-zinc-400 text-sm mt-1">Track Stock, Tags, and HUIDs details.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm">
                        <Download size={16} /> Export
                    </button>
                    <Link href="/inventory/add">
                        <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 text-sm">
                            <Plus size={18} /> Add New Stock
                        </button>
                    </Link>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="glass-card p-4 bg-zinc-900/40 border-zinc-800 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search by Tag No, HUID, or Item Name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-zinc-950/50 border border-zinc-700 text-zinc-100 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-zinc-600"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700 text-sm">
                        <Filter size={16} /> Filters
                    </button>
                    <select className="bg-zinc-800 text-zinc-300 border border-zinc-700 text-sm rounded-lg block p-2.5 focus:ring-amber-500 focus:border-amber-500">
                        <option>All Categories</option>
                        <option>Bangles</option>
                        <option>Chains</option>
                        <option>Rings</option>
                        <option>Earrings</option>
                    </select>
                </div>
            </div>

            {/* Inventory Table */}
            <div className="glass-card overflow-hidden bg-zinc-900/40 border-zinc-800">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-zinc-400">
                        <thead className="bg-zinc-900/80 text-zinc-200 uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Tag No / HUID</th>
                                <th className="px-6 py-4">Item Details</th>
                                <th className="px-6 py-4">Purity</th>
                                <th className="px-6 py-4 text-right">Gross Wt</th>
                                <th className="px-6 py-4 text-right">Stone Wt</th>
                                <th className="px-6 py-4 text-right">Net Wt</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800">
                            {filteredInventory.length > 0 ? (
                                filteredInventory.map((item) => (
                                    <tr key={item.id} className="hover:bg-zinc-900/30 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-mono font-medium text-zinc-300">{item.tagId}</div>
                                            {item.huid && <div className="text-xs text-amber-500/80">{item.huid}</div>}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-zinc-200">{item.productName}</div>
                                            <div className="text-xs text-zinc-500">{item.category} • {item.boxNumber}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs">
                                                {item.purity}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right font-mono text-zinc-300">{item.grossWeight.toFixed(3)}</td>
                                        <td className="px-6 py-4 text-right font-mono text-zinc-500">{item.stoneWeight.toFixed(3)}</td>
                                        <td className="px-6 py-4 text-right font-mono text-amber-500 font-medium">{item.netWeight.toFixed(3)}</td>
                                        <td className="px-6 py-4 text-center">
                                            <StatusBadge status={item.status} />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-1.5 hover:bg-zinc-800 rounded text-sky-400" title="View"><Eye size={16} /></button>
                                                <button className="p-1.5 hover:bg-zinc-800 rounded text-amber-500" title="Edit"><Edit size={16} /></button>
                                                <button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400" title="Print Tag"><Printer size={16} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8} className="px-6 py-12 text-center text-zinc-500">
                                        No inventory items found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: StockStatus }) {
    const styles = {
        'In Stock': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        'Sold': 'bg-zinc-800 text-zinc-500 border-zinc-700',
        'On Approval': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        'Repair': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        'Reserved': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    };

    return (
        <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium border", styles[status])}>
            {status}
        </span>
    );
}
