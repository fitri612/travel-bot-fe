import React from 'react';

interface ChatInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSend: () => void;
    loading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSend, loading }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            onSend();
        }
    };

    return (
        <footer className="p-4 bg-slate-900 border-t border-slate-800">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Ketik pertanyaan liburanmu..."
                />
                <button
                    type="button"
                    onClick={onSend}
                    disabled={loading || !value.trim()}
                    className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:cursor-not-allowed text-white px-5 py-3 rounded-xl font-medium text-sm transition-all shadow-md cursor-pointer shrink-0"
                >
                    Kirim
                </button>
            </div>
        </footer>
    );
};