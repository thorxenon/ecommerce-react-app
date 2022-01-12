import { Request, Response,  NextFunction } from 'express';

export const getProduct = async(req: Request, res: Response, next: NextFunction) =>{
    res.status(200).json({
        success: true,
        message: 'This route will show all products in database :)'
    })
}