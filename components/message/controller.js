

function addMessage(user, message){
   return new Promise((response, reject) => {
       if(!user || !message){
           return reject(new Error('No user or message provided'))
       }
       const fullMessage = {
           user,
           message,
           date: new Date()
       }
       return response(fullMessage)
   })
}

module.exports = {
    addMessage,
}