import { apiClient } from '@/lib/axios';

export interface ChatResponse {
	reply: string;
}

export const sendChatMessage = async (message: string): Promise<ChatResponse> => {
	const { data } = await apiClient.post<ChatResponse>('/api/chat', { message });
	return data;
};
