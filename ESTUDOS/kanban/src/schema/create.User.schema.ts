import * as Yup from 'yup';
import { type TypedRequest } from '../utils/typedRequest';

export const userBodySchema = Yup.object({
  name: Yup.string().required().min(3),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8)
});

export namespace CreateUser {
  export type BodyType = TypedRequest<typeof userBodySchema>;
  export const schema = Yup.object().shape({ body: userBodySchema });
};
