import {Schema, model} from 'mongoose'


const mySchema = new Schema({
    user: String,
    message: String,
    date: Date,
}, {collection: 'messages'});

export const Model = model('messages', mySchema);