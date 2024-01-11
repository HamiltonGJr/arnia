import { Router } from 'express';
import { User } from '../models/Users';
import { CreateUser } from '../schema/create.User.schema';
import validate from '../middleware/validate';

const router = Router();

router.post('/', validate(CreateUser.schema), async (request, response) => {
  const { name, email, password } = request.body;
  const newUser = await new User({ name, email, password }).save();
  response.status(201).send({ user: newUser });
});

export default router;
