/** @format */

import express from 'express';
import { boardRouter } from './routes/boards.routes.js';
import { columnsRouter } from './routes/columns.routes.js';
import { tasksRouter } from './routes/tasks.routes.js';
import cors from 'cors';
import { subtasksRouter } from './routes/subtasks.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/boards', boardRouter);
app.use('/columns', columnsRouter);
app.use('/tasks', tasksRouter);
app.use('/subtasks', subtasksRouter);

app.listen('3000', () => {
  console.log('server started...');
});
