import { Schema, model } from 'mongoose'

const mySchema = new Schema({
    name: String,
    age: Number,
}, {collection: 'users'})

export const Model = model('users', mySchema);