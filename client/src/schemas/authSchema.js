import * as Yup from 'yup';

export const signupSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(2, 'Username too short (min 2 chars)')
    .max(20, 'Username too long (max 20 chars)')
    .trim(),
  email: Yup.string()
    .required('Email is required')
    .min(7, 'Email too short (min 7 chars)')
    .max(21, 'Email too long (max 21 chars)')
    .matches(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.(bg|com|org|io)$/i, 'Invalid email format')
    .trim(),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password too short (min 8 chars)')
    .max(24, 'Password too long (max 24 chars)')
    .trim(),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords don\'t match')
    .trim(),
});
