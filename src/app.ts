import express, { Application, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

const app: Application = express();

const port = process.env.PORT || 3000;
let refreshCount: number = 0;

const handleRefresh = (res: Response) => {
    console.log(`Refresh count: ${refreshCount++}`)
};

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    handleRefresh(res);
    res.send(`Hello World! Page load count: ${refreshCount}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});