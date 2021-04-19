import {FullMessage} from '../../types'

const list: FullMessage[] = []

const addMessage = (message: FullMessage) => {
    list.push(message);
}

const readMessages = () => {
    return list
}

export const store = {
    add: addMessage,
    readAll: readMessages,
    //readOne
    //deleteOne
}