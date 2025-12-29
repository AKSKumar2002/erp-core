"use client";

import React, { useEffect } from 'react';
import { Printer } from 'lucide-react';

export default function InvoicePrintPage() {

    useEffect(() => {
        // Automatically trigger print dialog on load
        // setTimeout(() => window.print(), 500);
    }, []);

    return (
        <div className="bg-white text-black min-h-screen p-8 max-w-[210mm] mx-auto font-serif">
            {/* Print Controls (Hidden when printing) */}
            <div className="print:hidden mb-8 flex justify-between items-center bg-zinc-100 p-4 rounded-lg border border-zinc-200">
                <span className="text-zinc-600 text-sm">Print Preview Mode</span>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-sans text-sm font-medium"
                >
                    <Printer size={16} /> Print Invoice
                </button>
            </div>

            {/* Invoice Content */}
            <div className="border border-zinc-300 p-8 space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start border-b border-zinc-300 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-amber-600">GMS JAIN JEWELLERS</h1>
                        <p className="text-sm text-zinc-600 mt-1">Timeless Elegance</p>
                        <div className="text-xs text-zinc-500 mt-3 space-y-0.5">
                            <p>12, Zaveri Bazaar, Mumbai - 400002</p>
                            <p>Ph: +91 22 1234 5678 | Email: contact@gmsjain.com</p>
                            <p>GSTIN: 27ABCDE1234F1Z5</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-zinc-800">TAX INVOICE</div>
                        <div className="text-sm font-mono mt-2 text-zinc-600">#INV-2025-001</div>
                        <div className="text-sm text-zinc-600">Date: 28 Oct, 2025</div>
                    </div>
                </div>

                {/* Customer Details */}
                <div className="grid grid-cols-2 gap-8 text-sm">
                    <div>
                        <h3 className="font-bold text-zinc-800 mb-1">Bill To:</h3>
                        <p className="font-medium">Mr. Rahul Kumar</p>
                        <p className="text-zinc-600">Flat 402, Lotus Apt, Andheri West</p>
                        <p className="text-zinc-600">Mumbai, Maharashtra</p>
                        <p className="text-zinc-600 mt-1">Ph: 9876543210</p>
                    </div>
                    <div className="text-right">
                        {/* Extra fields if needed */}
                    </div>
                </div>

                {/* Items Table */}
                <table className="w-full text-sm mt-4">
                    <thead className="bg-zinc-50 border-y border-zinc-300">
                        <tr>
                            <th className="py-2 text-left px-2">#</th>
                            <th className="py-2 text-left px-2">Description</th>
                            <th className="py-2 text-right px-2">HSN</th>
                            <th className="py-2 text-right px-2">Gross Wt</th>
                            <th className="py-2 text-right px-2">Net Wt</th>
                            <th className="py-2 text-right px-2">Rate</th>
                            <th className="py-2 text-right px-2">Total</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200">
                        <tr>
                            <td className="py-3 px-2">1</td>
                            <td className="py-3 px-2">
                                <span className="font-bold block">Gold Chain 22K</span>
                                <span className="text-xs text-zinc-500">TAG-1001</span>
                            </td>
                            <td className="py-3 px-2 text-right">7113</td>
                            <td className="py-3 px-2 text-right">43.400 g</td>
                            <td className="py-3 px-2 text-right">43.400 g</td>
                            <td className="py-3 px-2 text-right">6,850</td>
                            <td className="py-3 px-2 text-right font-medium">2,97,290.00</td>
                        </tr>
                    </tbody>
                    <tfoot className="border-t border-zinc-300">
                        <tr>
                            <td colSpan={6} className="text-right py-2 px-2 text-zinc-600">Sub Total</td>
                            <td className="text-right py-2 px-2">2,97,290.00</td>
                        </tr>
                        <tr>
                            <td colSpan={6} className="text-right py-2 px-2 text-zinc-600">Making Charges</td>
                            <td className="text-right py-2 px-2">12,500.00</td>
                        </tr>
                        <tr>
                            <td colSpan={6} className="text-right py-2 px-2 text-zinc-600">CGST (1.5%)</td>
                            <td className="text-right py-2 px-2">4,646.85</td>
                        </tr>
                        <tr>
                            <td colSpan={6} className="text-right py-2 px-2 text-zinc-600">SGST (1.5%)</td>
                            <td className="text-right py-2 px-2">4,646.85</td>
                        </tr>
                        <tr className="bg-zinc-100 font-bold text-base">
                            <td colSpan={6} className="text-right py-3 px-2">Grand Total</td>
                            <td className="text-right py-3 px-2">₹ 3,19,083.70</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="pt-8 grid grid-cols-2 gap-8 text-xs text-zinc-500">
                    <div>
                        <h4 className="font-bold mb-1 text-zinc-700">Terms & Conditions</h4>
                        <ul className="list-disc list-inside space-y-0.5">
                            <li>Goods once sold cannot be taken back.</li>
                            <li>Subject to Mumbai Jurisdiction.</li>
                            <li>E. & O.E.</li>
                        </ul>
                    </div>
                    <div className="text-right flex flex-col justify-end">
                        <div className="h-16"></div>
                        <p className="font-bold text-zinc-800">For GMS JAIN JEWELLERS</p>
                        <p>Authorized Signatory</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
