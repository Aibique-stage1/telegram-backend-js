import { Empty, User } from '../../types';
import { Model } from './model'



const addUser = (user: User) => {
    const theUser = new Model(user);
    theUser.save();

    return theUser;
}

const readUsers = (user: User | Empty) => {
    const listUsers =  Model.find(user);
    
    return listUsers;
}

export const store = {
    addUser,
    readUsers,
}