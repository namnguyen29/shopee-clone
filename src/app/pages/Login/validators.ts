import { object, string } from 'yup';

export const loginValidatorSchema = object({
  email: string()
    .required('Email field is required')
    .email('Please enter a valid email')
    .min(5, 'The minimum length is 6')
    .max(160, 'The maximum length is 160'),
  password: string()
    .required('Password field is required')
    .min(5, 'The minimum length is 6')
    .max(160, 'The maximum length is 160')
});
