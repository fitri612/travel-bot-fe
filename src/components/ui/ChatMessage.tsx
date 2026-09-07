import React from 'react';
import ReactMarkdown from 'react-markdown';

export interface Message {
	role: 'user' | 'assistant';
	content: string;
}

interface ChatMessageProps {
	message?: Message;
	isLoading?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLoading }) => {
	if (isLoading) {
		return (
			<div className="flex flex-col items-start">
				<span className="text-[11px] text-slate-400 mb-1 px-1">Bot</span>
				<div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-slate-400 flex items-center gap-2">
					<span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
					<span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]"></span>
					<span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]"></span>
				</div>
			</div>
		);
	}

	if (!message) return null;

	const isUser = message.role === 'user';

	return (
		<div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
			<span className="text-[11px] text-slate-400 mb-1 px-1">{isUser ? 'Kamu' : 'Bot'}</span>
			<div
				className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
					isUser ? 'rounded-tr-none bg-blue-600 text-white shadow-md' : 'rounded-tl-none border border-slate-700 bg-slate-800 text-slate-100 shadow-sm'
				}`}
			>
				<div className=" [&_strong]:font-bold [&_strong]:text-white [&_em]:italic [&_p]:my-1 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-0.5 [&_h1]:mb-2 [&_h1]:text-base [&_h1]:font-bold [&_h2]:mb-2 [&_h2]:text-base [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:font-bold ">
					<ReactMarkdown>{message.content}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
};
