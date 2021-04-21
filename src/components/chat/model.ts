import { Schema, model } from 'mongoose';

const mySchema = new Schema({

},{collection: 'chat'});

export const Model = model('chat', mySchema);
