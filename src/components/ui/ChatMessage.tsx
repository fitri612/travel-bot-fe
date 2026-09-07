import React from 'react';

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
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    isUser
                        ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                        : 'bg-slate-800 text-slate-100 border border-slate-700 rounded-tl-none shadow-sm'
                }`}
            >
                {message.content}
            </div>
        </div>
    );
};