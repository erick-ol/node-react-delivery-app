import * as yup from 'yup';
/** usado para validar - https://www.npmjs.com/package/yup */
const checkoutSchema = yup.object({
  address: yup.string().required(),
  number: yup.string().required(),
});

export default checkoutSchema;
