"use client";

import React from 'react';
import StatCard from '@/components/dashboard/StatCard';
import SalesChart from '@/components/dashboard/SalesChart';
import {
  Coins,
  TrendingUp,
  Scale,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  return (
    <div className="space-y-6 pb-10">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-100 font-serif">Welcome back, Admin</h1>
          <p className="text-zinc-400 mt-1">Here is your daily overview for GMS Jain Jewellers.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/reports">
            <button className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-700 transition-colors text-sm font-medium">
              Generate Report
            </button>
          </Link>
          <Link href="/sales/new">
            <button className="px-4 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition-colors text-sm font-bold shadow-lg shadow-amber-500/20">
              + New Sale
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Sales (Today)"
          value="₹ 12,45,000"
          change="+12.5%"
          isPositive={true}
          description="vs yesterday"
          icon={TrendingUp}
        />
        <StatCard
          title="Gold Stock (Weight)"
          value="4,250.50 g"
          change="-450 g"
          isPositive={false}
          description="Since opening"
          icon={Scale}
        />
        <StatCard
          title="Pending Orders"
          value="18"
          change="Urgent: 3"
          isPositive={false}
          description="Due this week"
          icon={AlertCircle}
        />
        <StatCard
          title="Cash in Hand"
          value="₹ 5,20,000"
          icon={Coins}
          description="Updated 5m ago"
        />
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <SalesChart />
        </div>

        {/* Quick Actions / Notifications */}
        <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800">
          <h3 className="text-lg font-semibold text-zinc-100 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              { label: 'Create Custom Order', href: '/orders/new' },
              { label: 'Add New Stock', href: '/inventory/add' },
              { label: 'Manage Daily Rates', href: '/settings/rates' },
              { label: 'Karigar Issue / Receive', href: '/manufacturing/karigar' },
            ].map(action => (
              <button
                key={action.label}
                className="w-full text-left p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-amber-500/30 transition-all group flex items-center justify-between"
              >
                <span className="text-zinc-300 group-hover:text-amber-500 transition-colors">{action.label}</span>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-500" />
              </button>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-zinc-100 mt-8 mb-4">Low Stock Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-900/10 border border-red-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div>
                  <div className="text-sm font-medium text-zinc-200">Gold Bangles (22K)</div>
                  <div className="text-xs text-zinc-500">Only 2 items remaining</div>
                </div>
              </div>
              <button className="text-xs text-red-400 hover:text-red-300">Restock</button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table (Simplified) */}
      <div className="glass-card overflow-hidden bg-zinc-900/40 border-zinc-800">
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-zinc-100">Recent Transactions</h3>
          <Link href="/sales" className="text-amber-500 text-sm hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-zinc-400">
            <thead className="bg-zinc-900/60 text-zinc-200">
              <tr>
                <th className="px-6 py-3">Invoice #</th>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Items</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {[
                { id: 'INV-001', customer: 'Rahul Sharma', items: 'Gold Chain (12g)', amount: '₹ 85,000', status: 'Paid' },
                { id: 'INV-002', customer: 'Priya Verma', items: 'Diamond Ring', amount: '₹ 1,20,000', status: 'Pending' },
                { id: 'INV-003', customer: 'Amit Jain', items: 'Silver Coins (50g)', amount: '₹ 4,500', status: 'Paid' },
              ].map((row) => (
                <tr key={row.id} className="hover:bg-zinc-900/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-zinc-300">{row.id}</td>
                  <td className="px-6 py-4">{row.customer}</td>
                  <td className="px-6 py-4">{row.items}</td>
                  <td className="px-6 py-4 font-semibold text-zinc-200">{row.amount}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      row.status === 'Paid' ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-500"
                    )}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
