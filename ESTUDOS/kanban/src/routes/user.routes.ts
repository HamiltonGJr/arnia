import { Router } from 'express';
import { User } from '../models/Users';
import { CreateUser } from '../schema/user.schema';
import validate from '../middleware/validate';
import { hash } from 'bcrypt';

const router = Router();

router.post('/', validate(CreateUser.schema), async (request, response) => {
  const { name, email, password } = request.body;
  const existUser = await User.findOne({ email });

  if (existUser != null) {
    response.status(401).send({ message: 'Email already registered!' });
    return;
  };

  const passwordHashed = await hash(password, 8);

  const newUser = await new User({
    name,
    email,
    password: passwordHashed
  }).save();
  response.status(201).send({ user: newUser });
});

export default router;
