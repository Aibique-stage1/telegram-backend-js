import { Empty, FullMessage, User } from '../../types'
import { store } from './store'

export const postUser = (user: User):Promise<FullMessage> => {
    if(!user){
        return Promise.reject(new Error('No user'))
    }

    return store.addUser(user);
}

export const getUsers = (filter: User | Empty ):Promise<FullMessage[]> => {
    if(!store.readUsers(filter)){
        return Promise.reject(new Error('No Users found'))
    }

    return store.readUsers(filter);
}