import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

// Declare variables
const port: number = 5000;
let refreshCount: number = 0;

const handleRefresh = (res: Response) => {
    console.log(`Refresh count: ${refreshCount++}`)
};

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    handleRefresh(res);
    res.send(`Hello World! \n Page load count: ${refreshCount}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});