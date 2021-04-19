
interface FullMessage {
    user: string,
    message: string,
    date: Date
}

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
        return response(fullMessage)
    })
}