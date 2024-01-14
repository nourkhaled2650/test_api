import morgan from 'morgan';
import express, { Request, Response, NextFunction } from 'express';
import foraRouter from '../routes/foraRouter';
import createHttpError, { isHttpError } from 'http-errors';
import cors from 'cors';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    methods: ['POST', 'GET', 'DELETE', 'PATCH'],
    credentials: true,
  }),
);
app.use('/api', foraRouter);

app.use((req, res, next) => {
  next(createHttpError(404, 'endpoint not found'));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  let errorMsg = 'An unknown error occure';
  let errorStatus = 500;
  if (isHttpError(error)) {
    console.log(error.statusCode);
    console.log(error.message);
    errorMsg = error.message;
    errorStatus = error.statusCode;
  }
  res.status(errorStatus).send(errorMsg);
});

export default app;
