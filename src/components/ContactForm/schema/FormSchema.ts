/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const FormSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().min(1),
  message: yup.string().required(),
  isAgree: yup.boolean(),
});
