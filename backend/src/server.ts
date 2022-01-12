import app from './app';
import dotenv from 'dotenv';

dotenv.config();

//setiing up config file

app.listen(process.env.PORT as string, ()=>{
    console.log(`Server started on port: ${process.env.PORT}`);
});