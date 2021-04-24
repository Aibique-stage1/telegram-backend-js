import { response } from 'express';
import { resolve } from 'node:path';
import { Empty, User, Users } from '../../types';
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

export const getChat = async (userId: Empty | { users: string }) => {
    return store.getChat(userId);
};
