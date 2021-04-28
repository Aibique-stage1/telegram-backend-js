import { Server, Socket } from 'socket.io';
export const socket: { io?: any } = {};

export const connect = (server: any) => {
    socket.io = new Server(server);
};
