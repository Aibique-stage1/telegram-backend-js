import { store } from './store';
import { Empty, FullMessage, TheUser } from '../../types';
import { socket } from '../../socket';
import { Socket } from 'socket.io';

// 🕹️

export const addMessage = (chat: string, user: string, message: string, fileUrl: string): Promise<FullMessage> => {
    return new Promise((response, reject) => {
        if (!user || !message || !chat) {
            return reject(new Error('No user or message provided'));
        }
        const fullMessage: FullMessage = {
            chat,
            user,
            message,
            date: new Date(),
            file: fileUrl,
        };
        store.add(fullMessage);

        // socket.io.on('connect', (client: Socket) => {
        //     console.log('user connected');
        //     client.on('messages', () => {
        //         socket.io.emit('messages', fullMessage);
        //     });
        // });

        socket.io.emit('messages', fullMessage);

        return response(fullMessage);
    });
};

export const readMessages = (theChat: TheUser | Empty): Promise<string> => {
    return new Promise((response, reject) => {
        if (!store.readAll) {
            reject(new Error('No Data in the Database'));
        }
        response(store.readAll(theChat));
    });
};

export const patchMessage = (id: number | string, text: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (!id || !text) {
            return reject(new Error('No id or message provided'));
        }

        resolve(store.patchOne(id, text));
    });
};

export const deleteMessage = (id: number | string): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (!id) {
            return reject(new Error('No ID provided'));
        }

        resolve(store.deleteOne(id));
    });
};
