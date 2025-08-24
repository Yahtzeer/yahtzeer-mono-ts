import * as yup from 'yup';

export const baseUserSchema = yup.object({
  username: yup.string().required().min(3).max(30),
  password: yup.string().required().min(6).max(100),
});
