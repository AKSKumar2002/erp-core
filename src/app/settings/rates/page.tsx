"use client";

import React from 'react';
import { Save } from 'lucide-react';

export default function RatesSettingsPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-zinc-100 font-serif">Daily Gold Rates</h1>
                <p className="text-zinc-400 text-sm mt-1">Update buy/sell rates for all purities.</p>
            </div>

            <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 space-y-6">
                <div className="grid grid-cols-3 gap-4 border-b border-zinc-800 pb-2 mb-2">
                    <div className="text-sm font-semibold text-zinc-500">Purity</div>
                    <div className="text-sm font-semibold text-zinc-500">Sell Rate (per g)</div>
                    <div className="text-sm font-semibold text-zinc-500">Buy Rate (per g)</div>
                </div>

                {[
                    { purity: '24K (999)', sell: '7250', buy: '7100' },
                    { purity: '22K (916)', sell: '6850', buy: '6650' },
                    { purity: '18K (750)', sell: '5400', buy: '5200' },
                    { purity: 'Silver', sell: '85', buy: '80' },
                ].map((rate, idx) => (
                    <div key={idx} className="grid grid-cols-3 gap-4 items-center">
                        <div className="text-zinc-200 font-medium">{rate.purity}</div>
                        <input
                            type="number"
                            defaultValue={rate.sell}
                            className="bg-zinc-950 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm focus:border-amber-500 outline-none"
                        />
                        <input
                            type="number"
                            defaultValue={rate.buy}
                            className="bg-zinc-950 border border-zinc-700 text-zinc-100 rounded px-3 py-2 text-sm focus:border-amber-500 outline-none"
                        />
                    </div>
                ))}

                <div className="pt-6">
                    <button className="w-full py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
                        <Save size={18} /> Update Rates
                    </button>
                </div>
            </div>
        </div>
    );
}
