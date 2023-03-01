import moment from 'moment';
import * as yup from 'yup';

const email = yup
  .string()
  .email('InvalidEmail')
  .max(150, 'MaxLengthField')
  .required('IsRequired');

const password = yup
  .string()
  .min(8, 'MinLengthPassword')
  .max(150, 'MaxLengthField')
  .required('IsRequired');

const groupName = yup
  .string()
  .max(150, 'MaxLengthField')
  .required('IsRequired');

const confirmPassword = password.oneOf(
  [yup.ref('password'), null],
  'PasswordsDontMatch'
);

const confirmNewPassword = password.oneOf(
  [yup.ref('newPassword'), null],
  'PasswordsDontMatch'
);

const profileName = yup
  .string()
  .max(70, 'MaxLengthName')
  .trim()
  .matches(/^[\p{L} '-]+$/u, 'IncorrectTextFormat')
  .nullable(true);

const profileBirthday = yup
  .date()
  .transform((value: string, originalValue: string, context) => {
    if (context.isType(value)) {
      return value;
    }
    return moment(originalValue, 'L').toDate();
  })
  .min('01/01/1900', 'MinDate')
  .max(new Date(), 'MaxDate')
  .nullable(true)
  .typeError('WrongDateFormat');

const profileDescription = yup
  .string()
  .max(255, 'MaxLengthDesc')
  .nullable(true);

const VALIDATION_SCHEMAS = {
  profilesField: yup.object({ name: yup.string().required('IsRequired') }),
  signIn: yup.object({
    login: email,
    password,
  }),
  recoveryPassword: yup.object({
    email,
  }),
  sendConfirmationEmail: yup.object({
    email,
  }),
  updateAgent: yup.object({
    title: yup.string().max(30, 'MaxAgentLengthField').required('IsRequired'),
  }),
  resetPassword: yup.object({
    newPassword: password,
    confirmNewPassword,
  }),
  changePassword: yup.object({
    oldPassword: password,
    newPassword: password.notOneOf(
      [yup.ref('oldPassword'), null],
      'NewPasswordDontChange'
    ),
    confirmNewPassword,
  }),
  registration: yup.object({
    email,
    password,
    confirmPassword,
    policy: yup.boolean().oneOf([true], 'PrivacyPolicy'),
  }),
  updateCreateGroup: yup.object({
    title: groupName,
  }),
  createTrigger: yup.object({
    title: groupName,
    profileGroupId: yup.string().required(),
  }),
  updateProfileInfo: yup.object({
    name: profileName,
    birthday: profileBirthday,
    description: profileDescription,
  }),
  profileFilters: yup.object({
    age: yup.string().matches(/^[0-9]+$/),
  }),
  updateEndpoint: yup.object({
    type: yup.string(),
    url: yup.string().when('type', {
      is: 'Webhook',
      then: (schema) => schema.url('IncorrectURL').required('IsRequired'),
    }),
    target_email: yup.string().when('type', {
      is: 'Email',
      then: (schema) => schema.email('IncorrectEmail').required('IsRequired'),
    }),
  }),
  createIntegration: yup.object({
    login: yup.string().required('IsRequired'),
    password: yup.string().required('IsRequired'),
    url: yup.string().required('IsRequired'),
  }),
};

export default VALIDATION_SCHEMAS;
