import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { At, Eye, EyeClosed, LockKey } from "phosphor-react";
import { useState } from "react";
import { PATHNAMES, VALIDATION_SCHEMAS } from "../../consts";

export function SignInFormModule() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: VALIDATION_SCHEMAS.signIn,
    onSubmit: (values) => {
      console.log(values);
      navigate(PATHNAMES.dashboard);
    },
    validateOnBlur: true,
  });
  const [showPassword, setShowPasswordStatus] = useState<boolean>(false);

  const handleChangeShowPasswordStatus = (): void => {
    setShowPasswordStatus(!showPassword);
  };

  return (
    <form id="sign-in-form" onSubmit={formik.handleSubmit}>
      <Stack spacing={4} align="flex-start">
        <FormControl isInvalid={formik.touched.login && !!formik.errors.login}>
          <FormLabel htmlFor="email">Почта</FormLabel>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={At} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              id="email"
              value={formik.values.login}
              onBlur={formik.handleBlur}
              name="login"
              onChange={formik.handleChange}
            />
          </InputGroup>
          {!!formik.errors.login && (
            <FormErrorMessage>{formik.errors.login}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          isInvalid={formik.touched.password && Boolean(formik.errors.password)}
        >
          <FormLabel htmlFor="password">Пароль</FormLabel>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={LockKey} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              size="lg"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type={showPassword ? "text" : "password"}
              name="password"
            />
            <InputRightElement>
              <IconButton
                onClick={handleChangeShowPasswordStatus}
                size="sm"
                variant="ghost"
                aria-label={showPassword ? "Mask password" : "Reveal password"}
                icon={
                  showPassword ? (
                    <Icon as={Eye} w="5" h="5" />
                  ) : (
                    <Icon as={EyeClosed} w="5" h="5" />
                  )
                }
              />
            </InputRightElement>
          </InputGroup>
          {formik.errors.password && (
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          )}
        </FormControl>
      </Stack>
      <Box pt="8">
        <Button
          type="submit"
          isLoading={false} // TODO: Fix when login will be created
          size="lg"
          loadingText="pages:SignIn.SignInButton"
          colorScheme="blue"
          w="full"
        >
          Войти
        </Button>
      </Box>
    </form>
  );
}
