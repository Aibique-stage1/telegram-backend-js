import { rejects } from 'node:assert';
import { resolve } from 'node:path';
import { Empty, User, Users } from '../../types';
import { Model } from './model';

const addChat = (chat: Users) => {
    const newChat = new Model(chat);
    newChat.save();

    return newChat;
};

const getChat = async (userId: Empty | { users: string }) => {
    try {
        const answer = await Model.find(userId).populate('users').exec();
        return answer;
    } catch (err) {
        return err;
    }
};

export const store = {
    addChat,
    getChat,
};
