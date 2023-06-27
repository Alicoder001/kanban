/** @format */

import { Router } from 'express';
import { crud } from '../controller/subtasks.controller.js';
export const subtasksRouter = Router();

subtasksRouter.patch('/:id', (req, res) => {
  crud.updateData(req, res);
});
