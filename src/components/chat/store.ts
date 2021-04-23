import { rejects } from 'node:assert';
import { resolve } from 'node:path';
import { User, Users } from '../../types';
import { Model } from './model';

const addChat = (chat: Users) => {
    const newChat = new Model(chat);
    newChat.save();

    return newChat;
};

const getChat = async (userId: string) => {
    try {
        const filter = userId ? { users: userId } : {};

        const theChat = await Model.find({ filter }).populate('users').exec();

        return theChat;
    } catch (err) {
        return console.error(err);
    }
};

export const store = {
    addChat,
    getChat,
};
