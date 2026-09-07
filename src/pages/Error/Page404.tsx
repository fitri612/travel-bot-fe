import { Clock7 } from 'lucide-react';

export default function Page404() {
	return (
		<main className="min-h-[calc(100vh-80px)] bg-slate-950 text-slate-100 flex items-center justify-center p-4">
			<div className="w-full text-center space-y-6">
				{/* Visual Icon & Status */}
				<div className="relative inline-block">
					<div className="w-24 h-24 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-5xl mx-auto shadow-xl">
						<Clock7 size={48} className="text-slate-500" />
					</div>
					<span className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full border-2 border-slate-950">404</span>
				</div>

				{/* Text Content */}
				<div className="space-y-2">
					<h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Tersesat di Peta?</h1>
					<p className="text-sm text-slate-400 leading-relaxed">Halaman yang kamu cari tidak ditemukan atau telah dipindahkan ke destinasi lain.</p>
				</div>

				{/* Action Button */}
				<div>
					<a
						href="/"
						className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 no-underline"
					>
						<span>✈️</span> Kembali ke Beranda
					</a>
				</div>
			</div>
		</main>
	);
}
