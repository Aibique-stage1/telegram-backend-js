import { Schema, model } from 'mongoose';

// 🧨
const mySchema = new Schema(
    {
        chat: [
            {
                type: Schema.Types.ObjectId,
                ref: 'chats',
            },
        ],
        user: [
            {
                type: Schema.Types.ObjectId,
                ref: 'users',
            },
        ],
        message: String,
        date: Date,
    },
    { collection: 'messages' },
);

export const Model = model('messages', mySchema);
