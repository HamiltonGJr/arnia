import { Router } from 'express';
import validate from '../middleware/validate';
import { CreateAuth } from '../schema/auth.schema';
import { User } from '../models/Users';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authConfig } from '../config/auth';

const router = Router();

router.post('/', validate(CreateAuth.schema), async (response, request) => {
  const { email, password } = response.body;
  const existUser = await User.findOne({ email });

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!existUser) {
    request.status(401).send({ message: "Email and password not match!" });
    return;
  };

  const passwordMatches = await compare(password, existUser.password);

  if (!passwordMatches) {
    request.status(401).send({ message: "Email and password not match!" });
    return;
  };

  const token = jwt.sign({ sub: existUser._id }, authConfig.secret);
  request.status(200).send({ token });
});

export default router;
