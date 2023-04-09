import * as yup from "yup";

const email = yup
  .string()
  .email("Введите корректный Email")
  .max(150, "Введите менее 150 симоволов")
  .required("Это поле обязательно");

const password = yup
  .string()
  .min(8, "Введите более 8 симоволов")
  .max(150, "Введите менее 150 симоволов")
  .required("Это поле обязательно");

const confirmNewPassword = password.oneOf(
  [yup.ref("newPassword")],
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
