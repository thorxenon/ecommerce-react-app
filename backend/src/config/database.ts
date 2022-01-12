import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDatabase = async() =>{
    try{
        await connect(process.env.DB_LOCAL_URL as string);
        console.log('MongoDB conectado com sucesso');
    }catch(error){
        console.log('Erorr ao conectar ao MongoDB');
    }
}