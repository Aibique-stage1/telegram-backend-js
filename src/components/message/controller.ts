import { store } from './store'
import { FullMessage } from '../../types'
import { resolve } from 'node:path'

export const addMessage = (user: string, message: string): Promise<FullMessage> => {

    return new Promise((response, reject) => {
        if(!user || !message){
            return reject(new Error('No user or message provided'))
        }
        const fullMessage: FullMessage = {
            user,
            message,
            date: new Date()
        }
        store.add(fullMessage)
        return response(fullMessage)
    })
}

export const readMessages = ():Promise<string> => {
    return new Promise((response, reject) => {
        if(!store.readAll){
            reject(new Error('No Data in the Database'))
        }
        response(store.readAll())

    })
}

export const patchMessage = (id: number | string, text: string):Promise<string> => {
    return new Promise((resolve, reject) => {
        if(!id || !text){
            return reject(new Error('No id or message provided'))
        }

        resolve(store.patchOne(id, text));
    })
}