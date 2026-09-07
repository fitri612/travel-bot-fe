import { Palmtree, Landmark, Mountain, Waves, Utensils, Sun, Backpack } from 'lucide-react';

export const QUICK_PROMPTS = [
	{
		icon: Palmtree,
		prompt: 'Wisata hits Bali 3 hari',
		color: 'text-emerald-400',
		bgColor: 'bg-emerald-500/10',
	},
	{
		icon: Utensils,
		prompt: 'Kuliner malam di Jogja',
		color: 'text-orange-400',
		bgColor: 'bg-orange-500/10',
	},
	{
		icon: Sun,
		prompt: 'Cuaca & tips di Jakarta',
		color: 'text-amber-400',
		bgColor: 'bg-amber-500/10',
	},
	{
		icon: Backpack,
		prompt: 'Tips hemat backpacker',
		color: 'text-sky-400',
		bgColor: 'bg-sky-500/10',
	},
];

export const POPULAR_DESTINATIONS = [
	{
		name: 'Bali',
		tag: 'Pantai & Budaya',
		icon: Palmtree,
		color: 'text-emerald-400',
		bgColor: 'bg-emerald-500/10',
	},
	{
		name: 'Yogyakarta',
		tag: 'Sejarah & Kuliner',
		icon: Landmark,
		color: 'text-amber-400',
		bgColor: 'bg-amber-500/10',
	},
	{
		name: 'Bandung',
		tag: 'Belanja & Alam',
		icon: Mountain,
		color: 'text-sky-400',
		bgColor: 'bg-sky-500/10',
	},
	{
		name: 'Lombok',
		tag: 'Bahari & Wisata',
		icon: Waves,
		color: 'text-cyan-400',
		bgColor: 'bg-cyan-500/10',
	},
];
