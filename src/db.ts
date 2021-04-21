import db from 'mongoose'

db.Promise = global.Promise;

export const ConnectDB = async (URI: string) => {
    try{

        await db.connect(URI, { useNewUrlParser: true , useUnifiedTopology: true });
        console.log('[db] Connected successfully')
    }catch(error){
        console.error(error)
    }
}

