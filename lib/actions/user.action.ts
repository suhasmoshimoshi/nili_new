
'user server'
import { connectToDatabase } from '../database';
import User from '../database/models/user.model';
import { handleError } from '../utils';
import { CreateUserParams } from './../../types/index';


export const createUser = async (user : CreateUserParams )=>{
try {


    await connectToDatabase()

    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
    
} catch (error) {
    handleError(error)
}
}