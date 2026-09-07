import TravelBotLogo from '@/assets/icons/TravelBotLogo';
import { ChatInput } from '@/components/ui/ChatInput';
import { ChatMessage, Message } from '@/components/ui/ChatMessage';
import { DestinationCard } from '@/components/ui/DestinationCard';
import { QuickPromptButton } from '@/components/ui/QuickPromptButton';
import { POPULAR_DESTINATIONS, QUICK_PROMPTS } from '@/data/default_data';
import { LampDesk, Lightbulb, LocationEdit, Plane } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

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

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
					{/* Sidebar Kiri */}
					<aside className="lg:col-span-4 space-y-6">
						<div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
							<h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
								<span>
									<LocationEdit size={16} />
								</span>{' '}
								Destinasi Favorit
							</h2>
							<div className="grid grid-cols-2 gap-3">
								{POPULAR_DESTINATIONS.map((item, idx) => (
									<DestinationCard key={idx} item={item} onClick={(name) => sendMessage(`Rekomendasikan tempat wisata terbaik di ${name}`)} />
								))}
							</div>
						</div>

						<div className="bg-slate-900 border border-blue-500/20 rounded-2xl p-5">
							<div className="flex row gap-1">
								<Lightbulb size={16} color="#FFF" />
								<h3 className="font-semibold text-blue-400 text-sm mb-1">Tips Chat</h3>
							</div>
							<p className="text-xs text-slate-300 leading-relaxed">Tanyakan cuaca real-time, rekomendasi hotel sesuai budget, atau itinerary harian secara lengkap.</p>
						</div>
					</aside>

					{/* Area Chat Utama */}
					<section className="lg:col-span-8">
						<div className="w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col h-[600px] overflow-hidden">
							{/* Header Chat */}
							<header className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
								<div className="flex items-center gap-3">
									<TravelBotLogo />
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
										<div className="mb-3 flex py-2 h-14 w-14 items-center justify-center rounded-full border border-blue-500/20 bg-blue-600/10">
											<Plane className="h-7 w-7 text-blue-400" />
										</div>
										<h3 className="font-bold text-white text-base">Mulai Obrolan Liburanmu</h3>
										<p className="text-xs text-slate-400 mt-1 mb-6">Pilih pertanyaan cepat di bawah ini atau ketik pesan secara bebas.</p>
										<div className="w-[100] rounded-lg space-y-2">
											{QUICK_PROMPTS.map((item, i) => (
												<QuickPromptButton key={i} item={item} onClick={(prompt) => sendMessage(prompt)} />
											))}
										</div>
									</div>
								) : (
									messages.map((msg, index) => <ChatMessage key={index} message={msg} />)
								)}

								{loading && <ChatMessage isLoading />}

								<div ref={messagesEndRef} />
							</div>

							{/* Input Footer */}
							<ChatInput value={input} onChange={(e) => setInput(e.target.value)} onSend={() => sendMessage()} loading={loading} />
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
