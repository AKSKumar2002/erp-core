"use client";

import React from 'react';
import { Printer } from 'lucide-react';

export default function JobCardPrintPage() {
    return (
        <div className="bg-white text-black min-h-[148mm] width-[105mm] p-6 max-w-[210mm] mx-auto font-sans border-2 border-dashed border-zinc-300 m-8">
            <div className="print:hidden mb-6 flex justify-between items-center bg-zinc-100 p-2 rounded">
                <span className="text-xs text-zinc-500">Print Job Card (A6/A5)</span>
                <button onClick={() => window.print()} className="flex items-center gap-1 px-3 py-1 bg-zinc-800 text-white rounded text-xs">
                    <Printer size={12} /> Print
                </button>
            </div>

            <div className="border border-black p-4 h-full">
                <div className="text-center border-b border-black pb-2 mb-2">
                    <h2 className="font-bold text-xl uppercase">Job Order (Karigar)</h2>
                    <p className="text-sm">GMS JAIN JEWELLERS</p>
                </div>

                <div className="flex justify-between items-center text-sm mb-4">
                    <div>
                        <span className="block font-bold">Job No: JOB-2025-001</span>
                        <span className="block text-xs">Date: 28 Oct, 2025</span>
                    </div>
                    <div className="text-right">
                        <span className="block font-bold border border-black px-2 py-0.5">PRIORITY: NORMAL</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                        <div className="font-bold text-xs uppercase text-zinc-500">Item Details</div>
                        <div>Gold Peacock Jhumka</div>
                        <div>22K (916) Yellow Gold</div>
                    </div>
                    <div className="text-right">
                        <div className="font-bold text-xs uppercase text-zinc-500">Approx Weight</div>
                        <div className="text-lg font-bold">25.000 g</div>
                    </div>
                </div>

                {/* Sketch Area */}
                <div className="border border-black h-40 mb-4 flex items-center justify-center text-zinc-300">
                    Sketch / Design Image Area
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm border-t border-black pt-2">
                    <div>
                        <span className="block font-bold text-xs uppercase text-zinc-500">Karigar</span>
                        <span>Ramesh Bengali</span>
                    </div>
                    <div className="text-right">
                        <span className="block font-bold text-xs uppercase text-zinc-500">Issued Wt</span>
                        <span className="font-mono">28.500 g</span>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-dashed border-black flex justify-between text-xs">
                    <p>Karigar Sign</p>
                    <p>Manager Sign</p>
                </div>
            </div>
        </div>
    );
}
