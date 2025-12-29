"use client";

import React from 'react';
import Link from 'next/link';
import {
    Building2,
    Coins,
    Users,
    Printer,
    Database,
    ShieldCheck,
    Bell,
    ChevronRight
} from 'lucide-react';


export default function SettingsPage() {
    const settingsGroups = [
        {
            title: "Business & Configuration",
            items: [
                { name: "Company Profile", icon: Building2, desc: "Logo, GST, Address", href: "/settings/profile" },
                { name: "Daily Gold Rates", icon: Coins, desc: "Update 22K/18K/Silver Rates", href: "/settings/rates" },
                { name: "User Management", icon: Users, desc: "Staff Roles & Access", href: "/settings/users" },
            ]
        },
        {
            title: "System & Peripherals",
            items: [
                { name: "Printers & Tags", icon: Printer, desc: "Barcode & Invoice Settings", href: "/settings/printers" },
                { name: "Data Backup", icon: Database, desc: "Auto-backup frequency", href: "/settings/backup" },
            ]
        },
        {
            title: "Security & Notifications",
            items: [
                { name: "Security Logs", icon: ShieldCheck, desc: "Audit trails", href: "/settings/security" },
                { name: "Notifications", icon: Bell, desc: "WhatsApp & SMS Alerts", href: "/settings/notifications" },
            ]
        }
    ];

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h1 className="text-2xl font-bold text-zinc-100 font-serif">Settings</h1>
                <p className="text-zinc-400 text-sm mt-1">Manage global preferences and system configurations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {settingsGroups.map((group) => (
                    <div key={group.title} className="space-y-4">
                        <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider px-1">{group.title}</h3>
                        <div className="grid gap-4">
                            {group.items.map((item) => (
                                <Link key={item.name} href={item.href} className="block group">
                                    <div className="glass-card p-4 bg-zinc-900/40 border-zinc-800 hover:border-amber-500/30 hover:bg-zinc-900/60 transition-all flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-amber-500 group-hover:border-amber-500/20 transition-colors">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <div className="font-medium text-zinc-200 group-hover:text-white transition-colors">{item.name}</div>
                                                <div className="text-xs text-zinc-500 group-hover:text-zinc-400">{item.desc}</div>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-zinc-600 group-hover:text-amber-500 transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
