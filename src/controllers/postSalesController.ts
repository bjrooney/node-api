import { Request, Response } from 'express';

const postSalesController = (request: Request, response: Response) => {
    const sales = [
        {
            sales_amount: '10.00'
        }
    ]
    response.statusCode=202;
    response.type('application/x-www-form-urlencoded');
    response.send({
        sales: sales
    });
}

export default postSalesController;