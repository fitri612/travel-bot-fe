import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface QuickPromptItem {
	icon: LucideIcon;
	prompt: string;
	color: string;
	bgColor: string;
}

interface QuickPromptButtonProps {
	item: QuickPromptItem;
	onClick: (promptText: string) => void;
}

export const QuickPromptButton: React.FC<QuickPromptButtonProps> = ({ item, onClick }) => {
	const Icon = item.icon;

	return (
		<button
			type="button"
			onClick={() => onClick(item.prompt)}
			className=" group flex w-full min-w-0 shrink-0 items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/80 p-3 text-left transition-all hover:border-slate-600 hover:bg-slate-700/80 cursor-pointer "
		>
			<span className={` flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.bgColor} `}>
				<Icon className={`h-5 w-5 ${item.color}`} />
			</span>

			<span className="min-w-0 flex-1 text-sm font-medium leading-5 text-slate-200">{item.prompt}</span>

			<span className="shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5">→</span>
		</button>
	);
};
