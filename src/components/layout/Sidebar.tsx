"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Hammer,
    ClipboardList,
    Users,
    Landmark,
    BarChart3,
    Settings,
    Menu,
    X,
    Gem
} from 'lucide-react';

const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Inventory & Tags', icon: Package, href: '/inventory' },
    { name: 'Sales & Billing', icon: ShoppingCart, href: '/sales' },
    { name: 'Manufacturing', icon: Hammer, href: '/manufacturing' },
    { name: 'Orders & Repairs', icon: ClipboardList, href: '/orders' },
    { name: 'Girvi / Mortgage', icon: Gem, href: '/girvi' },
    { name: 'CRM', icon: Users, href: '/crm' },
    { name: 'Accounting', icon: Landmark, href: '/accounting' },
    { name: 'Reports', icon: BarChart3, href: '/reports' },
    { name: 'Settings', icon: Settings, href: '/settings' },
];

const NavContent = ({
    collapsed,
    mobileOpen,
    pathname,
    setCollapsed,
    setMobileOpen
}: {
    collapsed: boolean;
    mobileOpen: boolean;
    pathname: string;
    setCollapsed: (v: boolean) => void;
    setMobileOpen: (v: boolean) => void;
}) => (
    <div className="flex flex-col h-full bg-zinc-950 border-r border-zinc-800">
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-center border-b border-zinc-800 flex-shrink-0">
            {collapsed && !mobileOpen ? (
                <Gem className="text-amber-500 w-8 h-8" />
            ) : (
                <div className="flex items-center gap-2 px-4">
                    <Gem className="text-amber-500 w-6 h-6" />
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                        GMS JAIN
                    </span>
                </div>
            )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-4 overflow-y-auto custom-scrollbar">
            <ul className="space-y-1 px-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group",
                                    isActive
                                        ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100",
                                    (collapsed && !mobileOpen) && "justify-center"
                                )}
                            >
                                <item.icon
                                    size={20}
                                    className={cn(
                                        "transition-colors",
                                        isActive ? "text-amber-500" : "text-zinc-400 group-hover:text-zinc-100"
                                    )}
                                />
                                {(!collapsed || mobileOpen) && (
                                    <span className="font-medium whitespace-nowrap">
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>

        {/* User Profile / Collapse Toggle (Desktop Only) */}
        <div className="p-4 border-t border-zinc-800 flex-shrink-0 hidden md:block">
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="w-full flex items-center justify-center p-2 text-zinc-500 hover:text-zinc-300 rounded-md hover:bg-zinc-900 transition-colors"
            >
                <span className="sr-only">Toggle Sidebar</span>
                {collapsed ? (
                    <div className="w-1 h-8 bg-zinc-800 rounded-full" />
                ) : (
                    <div className="text-xs uppercase tracking-widest">Collapse</div>
                )}
            </button>
        </div>
    </div>
);

export default function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="p-2 bg-zinc-900 text-gold-500 rounded-md border border-zinc-800 shadow-lg"
                >
                    {mobileOpen ? <X size={20} className="text-amber-500" /> : <Menu size={20} className="text-amber-500" />}
                </button>
            </div>

            {/* Desktop Sidebar (Relative Flex Item) */}
            <aside
                className={cn(
                    "hidden md:block h-screen transition-all duration-300 ease-in-out sticky top-0",
                    collapsed ? "w-20" : "w-64"
                )}
            >
                <NavContent
                    collapsed={collapsed}
                    mobileOpen={mobileOpen}
                    pathname={pathname}
                    setCollapsed={setCollapsed}
                    setMobileOpen={setMobileOpen}
                />
            </aside>

            {/* Mobile Sidebar (Fixed Overlay) */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 bg-zinc-950 transition-transform duration-300 ease-in-out md:hidden",
                    mobileOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <NavContent
                    collapsed={collapsed}
                    mobileOpen={mobileOpen}
                    pathname={pathname}
                    setCollapsed={setCollapsed}
                    setMobileOpen={setMobileOpen}
                />
            </aside>

            {/* Mobile Backdrop */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </>
    );
}
