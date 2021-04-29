import express, { Request, Response } from 'express';
import { postChat, getChat } from './controller';
import { successResponse, errorResponse } from '../../network/response';

const chat = express.Router();

chat.post('/', (req, res) => {
    try {
        const { users } = req.body;
        successResponse(req, res, postChat(users), 201);
    } catch (error) {
        errorResponse(req, res, error.message, 500);
    }
});

chat.get('/:userId', (req, res) => {
    const { userId } = req.params;
    let filter = userId ? { users: userId } : {};

    getChat(filter)
        .then((answer) => successResponse(req, res, answer, 200))
        .catch((err) => errorResponse(req, res, err.message, 500));
});

export default chat;
