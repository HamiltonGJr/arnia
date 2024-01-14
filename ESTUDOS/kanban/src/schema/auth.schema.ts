import * as Yup from 'yup';
import { type TypedRequest } from '../utils/typedRequest';

export const authBodySchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8)
});

export namespace CreateAuth {
  export type BodyType = TypedRequest<typeof authBodySchema>;
  export const schema = Yup.object().shape({ body: authBodySchema });
};
