import { resolve } from 'node:path';
import { User, Users } from '../../types';
import { store } from './store';

export const postChat = (users: string[]): Promise<Users> => {
    if (!users || !Array.isArray(users)) {
        return Promise.reject(new Error('No users provided'));
    }

    const chat = {
        users,
    };
    return store.addChat(chat);
};

export const getChat = (userId: string): Promise<User[]> => {
    if (!userId) return Promise.reject(new Error('No user ID provided'));

    return store.getChat(userId);
};
