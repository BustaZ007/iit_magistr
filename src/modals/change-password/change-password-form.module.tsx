import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { Eye, EyeClosed, LockKey, Repeat } from "phosphor-react";
import { useFormik } from "formik";
import { useState } from "react";
import { VALIDATION_SCHEMAS } from "../../consts";

type TChangePasswordFormModule = {
  onClose: () => void;
};

function ChangePasswordFormModule({ onClose }: TChangePasswordFormModule) {
  const [showPassword, setShowPasswordStatus] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: VALIDATION_SCHEMAS.changePassword,
    onSubmit: (values) => {
      console.log("changePassword", values);
      onClose();
    },
  });

  const handleChangeShowPasswordStatus = () => {
    setShowPasswordStatus(!showPassword);
  };

  return (
    <form onSubmit={formik.handleSubmit} id="change-password-submit-form">
      <Stack spacing={4}>
        <FormControl
          isInvalid={formik.touched.oldPassword && !!formik.errors.oldPassword}
        >
          <FormLabel htmlFor="current-password" fontSize="sm">
            Modal.ChangePassword.CurrentPasswordLabel
          </FormLabel>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <Icon as={LockKey} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              size="md"
              id="current-password"
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              name="oldPassword"
              value={formik.values.oldPassword}
              autoFocus
            />
            <InputRightElement>
              <IconButton
                size="sm"
                onClick={handleChangeShowPasswordStatus}
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
          {formik.errors.oldPassword && (
            <FormErrorMessage>{formik.errors.oldPassword}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          isInvalid={formik.touched.newPassword && !!formik.errors.newPassword}
        >
          <FormLabel htmlFor="new-password" fontSize="sm">
            Modal.ChangePassword.NewPasswordLabel
          </FormLabel>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <Icon as={LockKey} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              size="md"
              id="new-password"
              name="newPassword"
              value={formik.values.newPassword}
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
            />
          </InputGroup>
          {formik.touched.newPassword && !!formik.errors.newPassword ? (
            <FormErrorMessage>{formik.errors.newPassword}</FormErrorMessage>
          ) : (
            <FormHelperText>components:errors.Minimum</FormHelperText>
          )}
        </FormControl>
        <FormControl
          isInvalid={
            formik.touched.confirmNewPassword &&
            !!formik.errors.confirmNewPassword
          }
        >
          <FormLabel htmlFor="repassword" fontSize="sm">
            Modal.ChangePassword.RepeatPasswordLabel
          </FormLabel>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <Icon as={Repeat} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              size="md"
              type={showPassword ? "text" : "password"}
              name="confirmNewPassword"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
              id="repassword"
            />
          </InputGroup>
          {!!formik.errors.confirmNewPassword && (
            <FormErrorMessage>
              {formik.errors.confirmNewPassword}
            </FormErrorMessage>
          )}
        </FormControl>
        <Box py="2">
          <Button
            isLoading={false}
            type="submit"
            size="md"
            loadingText="Modal.ChangePassword.Button"
            colorScheme="blue"
          >
            Button
          </Button>
        </Box>
      </Stack>
    </form>
  );
}

export default ChangePasswordFormModule;
