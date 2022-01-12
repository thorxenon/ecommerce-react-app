import app from './app';
import dotenv from 'dotenv';
import products from './routes/products';
import { connectDatabase } from './config/database';

dotenv.config();

//setiing up config file

app.use(products);

//connecting to database 

connectDatabase();

app.listen(process.env.PORT as string, ()=>{
    console.log(`Server started on port: ${process.env.PORT}`);
});