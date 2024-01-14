import * as Yup from 'yup';
import { type TypedRequest } from '../utils/typedRequest';

export const taskBodySchema = Yup.object({
  title: Yup.string().required(),
  content: Yup.string().required()
});

export namespace CreateTaks {
  export type BodyType = TypedRequest<typeof taskBodySchema>;
  export const schema = Yup.object().shape({ body: taskBodySchema });
};
