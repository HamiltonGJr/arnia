import { Router } from 'express';
import { CreateTaks } from '../schema/taks.schema';
import validate from '../middleware/validate';
import { Task } from '../models/Tasks';

const router = Router();

router.post('/', validate(CreateTaks.schema), async (request, response) => {
  const { title, content } = request.body;

  const newTaks = await new Task({ title, content }).save();
  response.status(201).send({ task: newTaks });
});

export default router;
