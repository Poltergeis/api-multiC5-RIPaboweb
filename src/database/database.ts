import mongoose from 'mongoose';
import signale from 'signale';

export const runDatabase = async() => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/collarPerros');
    }catch(error){
        signale.error('could not connect to mongo');
    }
}


const conn = mongoose.connection;
conn.once('open', () => { signale.info('mongo connection successful') });
conn.on('error', () => { signale.error('connection error') });
conn.on('mongooseError', () => { signale.warn('mongoose error') });
conn.on('disconnected', () => { signale.warn('mongo connection was closed abruptally') });