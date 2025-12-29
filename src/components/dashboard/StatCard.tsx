import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    change?: string;
    isPositive?: boolean;
    icon: LucideIcon;
    description?: string;
    className?: string;
}

export default function StatCard({
    title,
    value,
    change,
    isPositive,
    icon: Icon,
    description,
    className
}: StatCardProps) {
    return (
        <div className={cn("glass-card p-6 flex flex-col justify-between h-full bg-zinc-900/40 border-zinc-800", className)}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-sm font-medium text-zinc-400">{title}</h3>
                    <div className="mt-2 text-3xl font-bold text-zinc-100">{value}</div>
                </div>
                <div className="p-2 bg-amber-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-amber-500" />
                </div>
            </div>

            {(change || description) && (
                <div className="flex items-center gap-2 text-xs">
                    {change && (
                        <span className={cn(
                            "font-medium px-1.5 py-0.5 rounded",
                            isPositive
                                ? "text-emerald-400 bg-emerald-400/10"
                                : "text-rose-400 bg-rose-400/10"
                        )}>
                            {change}
                        </span>
                    )}
                    {description && (
                        <span className="text-zinc-500">{description}</span>
                    )}
                </div>
            )}
        </div>
    );
}
