import React, { useState, useRef, useEffect } from 'react';

interface Message {
	role: 'user' | 'assistant';
	content: string;
}

const QUICK_PROMPTS = [
	{ icon: '🌴', prompt: 'Wisata hits Bali 3 hari' },
	{ icon: '🍜', prompt: 'Kuliner malam di Jogja' },
	{ icon: '☀️', prompt: 'Cuaca & tips di Jakarta' },
	{ icon: '🎒', prompt: 'Tips hemat backpacker' },
];

const POPULAR_DESTINATIONS = [
	{ name: 'Bali', tag: 'Pantai & Budaya', img: '🌴' },
	{ name: 'Yogyakarta', tag: 'Sejarah & Kuliner', img: '🏛️' },
	{ name: 'Bandung', tag: 'Belanja & Alam', img: '⛰️' },
	{ name: 'Lombok', tag: 'Bahari & Wisata', img: '🌊' },
];

const HomePage: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	const scrollToBottom = (): void => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages, loading]);

	const sendMessage = async (customPrompt?: string): Promise<void> => {
		const textToSend = customPrompt || input;
		if (!textToSend.trim()) return;

		const newMessages: Message[] = [...messages, { role: 'user', content: textToSend }];
		setMessages(newMessages);
		if (!customPrompt) setInput('');
		setLoading(true);

		try {
			const response = await fetch('http://localhost:3000/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: textToSend }),
			});

			const data: { reply: string } = await response.json();
			setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
		} catch (error) {
			console.error('Error:', error);
			setMessages([...newMessages, { role: 'assistant', content: 'Maaf, terjadi kesalahan koneksi ke server.' }]);
		} finally {
			setLoading(false);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === 'Enter') {
			sendMessage();
		}
	};

	return (
		<main className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 md:px-8">
			<div className="max-w-7xl mx-auto space-y-8">
				{/* Banner Hero */}
				<section className="text-center max-w-3xl mx-auto space-y-3">
					<span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">AI Travel Companion</span>
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
						Rencanakan Liburanmu Bersama <span className="text-blue-500">TravelBot</span>
					</h1>
					<p className="text-slate-400 text-sm md:text-base">Dapatkan rekomendasi tempat wisata, estimasi rencana perjalanan, hingga cek kondisi cuaca.</p>
				</section>

				{/* Layout 2 Kolom */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
					{/* Sidebar Kiri */}
					<aside className="lg:col-span-4 space-y-6">
						<div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
							<h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
								<span>📍</span> Destinasi Favorit
							</h2>
							<div className="grid grid-cols-2 gap-3">
								{POPULAR_DESTINATIONS.map((item, idx) => (
									<button
										key={idx}
										type="button"
										onClick={() => sendMessage(`Rekomendasikan tempat wisata terbaik di ${item.name}`)}
										className="p-3 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-xl text-left transition-all cursor-pointer"
									>
										<div className="text-2xl mb-1">{item.img}</div>
										<p className="font-semibold text-white text-sm">{item.name}</p>
										<p className="text-[11px] text-slate-400">{item.tag}</p>
									</button>
								))}
							</div>
						</div>

						<div className="bg-slate-900 border border-blue-500/20 rounded-2xl p-5">
							<h3 className="font-semibold text-blue-400 text-sm mb-1">💡 Tips Chat</h3>
							<p className="text-xs text-slate-300 leading-relaxed">Tanyakan cuaca real-time, rekomendasi hotel sesuai budget, atau itinerary harian secara lengkap.</p>
						</div>
					</aside>

					{/* Area Chat Utama */}
					<section className="lg:col-span-8">
						<div className="w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col h-[600px] overflow-hidden">
							{/* Header Chat */}
							<header className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold text-white shadow-md">🤖</div>
									<div>
										<h2 className="font-bold text-white text-base leading-tight">Travel Assistant Bot</h2>
										<p className="text-xs text-emerald-400 flex items-center gap-1.5 mt-0.5">
											<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Siap Membantu
										</p>
									</div>
								</div>
							</header>

							{/* Chat Body */}
							<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
								{messages.length === 0 ? (
									<div className="h-full flex flex-col items-center justify-center text-center p-4">
										<div className="w-14 h-14 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-3">✈️</div>

										<h3 className="font-bold text-white text-base">Mulai Obrolan Liburanmu</h3>
										<p className="text-xs text-slate-400 mt-1 mb-6">Pilih pertanyaan cepat di bawah ini atau ketik pesan secara bebas.</p>

										<div className="w-[100] rounded-lg space-y-2">
											{QUICK_PROMPTS.map((item, i) => (
												<button
													key={i}
													type="button"
													onClick={() => sendMessage(item.prompt)}
													className="w-[100] p-3 flex items-center gap-3 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-xl text-left transition-all cursor-pointer"
												>
													<span className="text-xl shrink-0">{item.icon}</span>
													<span className="text-xs font-medium text-slate-200 truncate">{item.prompt}</span>
												</button>
											))}
										</div>
									</div>
								) : (
									messages.map((msg, index) => {
										const isUser = msg.role === 'user';
										return (
											<div key={index} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
												<span className="text-[11px] text-slate-400 mb-1 px-1">{isUser ? 'Kamu' : 'Bot'}</span>
												<div
													className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
														isUser ? 'bg-blue-600 text-white rounded-tr-none shadow-md' : 'bg-slate-800 text-slate-100 border border-slate-700 rounded-tl-none shadow-sm'
													}`}
												>
													{msg.content}
												</div>
											</div>
										);
									})
								)}

								{loading && (
									<div className="flex flex-col items-start">
										<span className="text-[11px] text-slate-400 mb-1 px-1">Bot</span>
										<div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-slate-400 flex items-center gap-2">
											<span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
											<span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]"></span>
											<span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]"></span>
										</div>
									</div>
								)}

								<div ref={messagesEndRef} />
							</div>

							{/* Input Footer */}
							<footer className="p-4 bg-slate-900 border-t border-slate-800">
								<div className="flex items-center gap-2">
									<input
										type="text"
										className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
										value={input}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
										onKeyDown={handleKeyDown}
										placeholder="Ketik pertanyaan liburanmu..."
									/>
									<button
										type="button"
										onClick={() => sendMessage()}
										disabled={loading || !input.trim()}
										className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white px-5 py-3 rounded-xl font-medium text-sm transition-all shadow-md cursor-pointer shrink-0"
									>
										Kirim
									</button>
								</div>
							</footer>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
