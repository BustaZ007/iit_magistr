import * as yup from "yup";

const email = yup
  .string()
  .email("InvalidEmail")
  .max(150, "MaxLengthField")
  .required("IsRequired");

const password = yup
  .string()
  .min(8, "MinLengthPassword")
  .max(150, "MaxLengthField")
  .required("IsRequired");

const confirmNewPassword = password.oneOf(
  [yup.ref("newPassword"), null],
  "PasswordsDontMatch"
);

const VALIDATION_SCHEMAS = {
  signIn: yup.object({
    login: email,
    password,
  }),
  resetPassword: yup.object({
    newPassword: password,
    confirmNewPassword,
  }),
  changePassword: yup.object({
    oldPassword: password,
    newPassword: password.notOneOf(
      [yup.ref("oldPassword"), null],
      "NewPasswordDontChange"
    ),
    confirmNewPassword,
  }),
};

export default VALIDATION_SCHEMAS;
