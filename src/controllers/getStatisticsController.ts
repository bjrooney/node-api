import { Request, Response } from 'express';

const getStatisticsController = (request: Request, response: Response) => {
    const statistics = [
        {
            total_sales_amount: '100000000.00',
            average_amount_per_order: "45.04"
        }
    ]
    response.statusCode=200;
    response.send({
        statistics: statistics
    });
}

export default getStatisticsController;