import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface DestinationItem {
	name: string;
	tag: string;
	icon: LucideIcon;
    color: string;
    bgColor: string;
}

interface DestinationCardProps {
	item: DestinationItem;
	onClick: (destinationName: string) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ item, onClick }) => {
	const Icon = item.icon;

	return (
		<button type="button" onClick={() => onClick(item.name)} className="cursor-pointer rounded-xl border border-slate-700 bg-slate-800 p-3 text-left transition-all hover:bg-slate-700/80">
			<div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg ${item.bgColor}`}>
				<Icon className={`h-5 w-5 ${item.color}`} />
			</div>

			<p className="text-sm font-semibold text-white">{item.name}</p>

			<p className="text-[11px] text-slate-400">{item.tag}</p>
		</button>
	);
};
