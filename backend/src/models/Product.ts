import { Schema, model, connection } from 'mongoose';

type ProductType = {
    name: string,
    price: number,
    description: string,
    ratings: number,
    images: string,
    category: string,
    seller: string,
    stock: number,
    numOfReviews: number,
    reviews: string,
    createdAt: Date
}

const schema = new Schema<ProductType>({
    name:{
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxlength: [100, 'Product name cannot exced 100 characters']
    },
    price:{
        type: Number,
        required: [true, 'Please enter product price'],
        maxlength: [5, 'Product name cannot exced 5 characters'],
        default: 0.0
    },
    description:{
        type: String,
        required: [true, 'Please enter product description']
    },
    ratings:{
        type: Number,
        default: 0
    },
    images:[
        {
            public_id: {
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    ],
    category:{
        type: String,
        required:[true, 'Please select category for this product'],
        enum:{
            values:[
                'Electronics',
                'Cameras',
                'Laptop',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message:'Please select correctly category for this product'
        }
    },
    seller:{
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock:{
        type: Number,
        required:[true, 'Please enter product stock'],
        maxlength:[5, 'Product name cannot exced 5 characters'],
        default: 0
    },
    numOfReviews:{
        type: Number,
        default:0
    },
    reviews:[
        {
            name: {
                type:String,
                required:true
            },
            rating:{
                type: Number,
                required: true
            },
            comment:{
                type: String,
                required: true
            }
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const modelName: string = 'Product';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
:
    model<ProductType>(modelName, schema);