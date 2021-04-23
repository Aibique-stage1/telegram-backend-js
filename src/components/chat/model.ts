import { Schema, model } from 'mongoose';
// We need the userID to reach all its messages.

const mySchema = new Schema(
    {
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'users',
            },
        ],
    },
    { collection: 'chat' },
);

export const Model = model('chat', mySchema);
