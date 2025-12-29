"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 2000 },
    { name: "Thu", sales: 2780 },
    { name: "Fri", sales: 1890 },
    { name: "Sat", sales: 2390 },
    { name: "Sun", sales: 3490 },
];

export default function SalesChart() {
    return (
        <div className="glass-card p-6 bg-zinc-900/40 border-zinc-800 h-[350px]">
            <h3 className="text-lg font-semibold text-zinc-100 mb-6">Weekly Sales Overview</h3>
            <div className="w-full h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#d97706" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#d97706" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                        <XAxis
                            dataKey="name"
                            stroke="#71717a"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            stroke="#71717a"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                            tickFormatter={(value) => `₹${value}k`}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#f4f4f5' }}
                            itemStyle={{ color: '#fbbf24' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="sales"
                            stroke="#d97706"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorSales)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
