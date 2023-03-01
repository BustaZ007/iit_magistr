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
} from '@chakra-ui/react';
import { Eye, EyeClosed, LockKey, Repeat } from 'phosphor-react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { VALIDATION_SCHEMAS } from '../../consts';
import { useChangePassword } from '../../domains/user';

type TChangePasswordFormModule = {
  onClose: () => void;
};

function ChangePasswordFormModule({ onClose }: TChangePasswordFormModule) {
  const { t } = useTranslation('components');
  const [showPassword, setShowPasswordStatus] = useState<boolean>(false);
  const { changePassword, loading, error } = useChangePassword(onClose);
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: VALIDATION_SCHEMAS.changePassword,
    onSubmit: (values) => {
      changePassword(values);
    },
  });

  const handleChangeShowPasswordStatus = () => {
    setShowPasswordStatus(!showPassword);
  };

  return (
    <form onSubmit={formik.handleSubmit} id="change-password-submit-form">
      <Stack spacing={4}>
        <FormControl
          isInvalid={
            (formik.touched.oldPassword && !!formik.errors.oldPassword) ||
            !!error
          }
        >
          <FormLabel htmlFor="current-password" fontSize="sm">
            {t('Modal.ChangePassword.CurrentPasswordLabel')}
          </FormLabel>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <Icon as={LockKey} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              size="md"
              id="current-password"
              type={showPassword ? 'text' : 'password'}
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
                aria-label={showPassword ? 'Mask password' : 'Reveal password'}
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
          {(formik.errors.oldPassword || !!error) && (
            <FormErrorMessage>
              {t(`errors.${formik.errors.oldPassword ?? error?.message ?? ''}`)}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          isInvalid={formik.touched.newPassword && !!formik.errors.newPassword}
        >
          <FormLabel htmlFor="new-password" fontSize="sm">
            {t('Modal.ChangePassword.NewPasswordLabel')}
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
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
            />
          </InputGroup>
          {formik.touched.newPassword && !!formik.errors.newPassword ? (
            <FormErrorMessage>
              {t(`components:errors.${formik.errors.newPassword}`)}
            </FormErrorMessage>
          ) : (
            <FormHelperText>{t('components:errors.Minimum')}</FormHelperText>
          )}
        </FormControl>
        <FormControl
          isInvalid={
            formik.touched.confirmNewPassword &&
            !!formik.errors.confirmNewPassword
          }
        >
          <FormLabel htmlFor="repassword" fontSize="sm">
            {t('Modal.ChangePassword.RepeatPasswordLabel')}
          </FormLabel>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <Icon as={Repeat} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              size="md"
              type={showPassword ? 'text' : 'password'}
              name="confirmNewPassword"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
              id="repassword"
            />
          </InputGroup>
          {!!formik.errors.confirmNewPassword && (
            <FormErrorMessage>
              {t(`errors.${formik.errors.confirmNewPassword}`)}
            </FormErrorMessage>
          )}
        </FormControl>
        <Box py="2">
          <Button
            isLoading={loading}
            type="submit"
            size="md"
            loadingText={t('Modal.ChangePassword.Button')}
            colorScheme="blue"
          >
            {t('Modal.ChangePassword.Button')}
          </Button>
        </Box>
      </Stack>
    </form>
  );
}

export default ChangePasswordFormModule;
