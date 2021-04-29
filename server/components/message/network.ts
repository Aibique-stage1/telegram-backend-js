import express, { Request, Response } from 'express';
import multer from 'multer';

import { addMessage, readMessages, patchMessage, deleteMessage } from './controller';
import { successResponse, errorResponse } from '../../network/response';

const messages = express.Router();
const upload = multer({
    dest: 'public/files',
});

// 🕸️
messages.get('/', async (req: Request, res: Response) => {
    try {
        const { chat: theChat } = req.query;
        const { user: theUser } = req.query;
        const data = theChat || theUser ? { chat: theChat, user: theUser } : {};

        const allMessages = await readMessages(data);

        res.header({ 'my-header': 'This a custom header' });

        successResponse(req, res, allMessages, 201);
    } catch (error) {
        console.error(error.message);
    }
});

// 🕸️
messages.post('/', upload.single('file'), async (req: Request, res: Response) => {
    try {
        const { chat, user, message } = req.body;
        console.log(req.file);
        const fileUrl = req.file ? `http://localhost:3000/app/files/${req.file.filename}` : '';
        const fullMessage = await addMessage(chat, user, message, fileUrl);

        successResponse(req, res, fullMessage, 201);
    } catch (error) {
        errorResponse(req, res, error.message, 500);
    }
});

// 🕸️
messages.patch('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { message: text } = req.body;
        const newMessage = await patchMessage(id, text);

        successResponse(req, res, newMessage, 200);
    } catch (error) {
        errorResponse(req, res, error.message, 500);
    }
    successResponse(req, res, 'You commit a PUT method, Congratulations! ');
});

// 🕸️
messages.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedMessage = await deleteMessage(id);

        successResponse(req, res, `${deletedMessage} [DELETED] `, 200);
    } catch (error) {
        errorResponse(req, res, error.message, 500);
    }
});

export default messages;
