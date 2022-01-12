import app from './app';
import dotenv from 'dotenv';
import products from './routes/products';

dotenv.config();

//setiing up config file

app.use(products);

app.listen(process.env.PORT as string, ()=>{
    console.log(`Server started on port: ${process.env.PORT}`);
});