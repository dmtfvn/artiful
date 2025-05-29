import * as Yup from 'yup';

export const artSchema = Yup.object({
  imageUrl: Yup.string()
    .required('Image url is required'),
  title: Yup.string()
    .transform((value) => value === '' ? undefined : value)
    .trim()
    .required('Art name is required')
    .min(3, 'Art name too short (min 3 chars)')
    .max(35, 'Art name too long (max 35 chars)'),
  creator: Yup.string()
    .transform((value) => value === '' ? undefined : value)
    .trim()
    .required('Art creator is required')
    .min(2, 'Art creator too short (min 2 chars)')
    .max(20, 'Art creator too long (max 20 chars)'),
  depiction: Yup.string()
    .trim()
    .transform((value, originalValue) => {
      return originalValue?.trim() === '' ? undefined : value;
    })
    .notRequired()
    .min(5, 'Depiction too short (min 5 chars)')
    .max(505, 'Depiction too long (max 505 chars)'),
});
