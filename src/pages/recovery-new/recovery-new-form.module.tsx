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
  FormHelperText,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Eye, EyeClosed, Repeat, LockKey } from 'phosphor-react';
import { VALIDATION_SCHEMAS } from '../../consts';
import { useResetPassword } from '../../domains/user';

type TRecoveryNewFormModuleProps = {
  userId: string;
  confirmationToken: string;
  setLinkError: (status: boolean) => void;
};

function RecoveryNewFormModule({
  userId,
  confirmationToken,
  setLinkError,
}: TRecoveryNewFormModuleProps) {
  const { t } = useTranslation();
  const [showPassword, setShowPasswordStatus] = useState<boolean>(false);
  const { resetPassword, loading, error } = useResetPassword();

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
      confirmationToken,
      userId,
    },
    validationSchema: VALIDATION_SCHEMAS.resetPassword,
    onSubmit: (values) => {
      resetPassword(values);
    },
    validateOnBlur: true,
  });

  const handleChangeShowPasswordStatus = () => {
    setShowPasswordStatus(!showPassword);
  };

  useEffect(() => {
    setLinkError(error?.message === 'BrokenLink');
  }, [error]);

  return (
    <form onSubmit={formik.handleSubmit} id="submit-recovery-new-form">
      <Stack spacing={4}>
        <FormControl
          isInvalid={
            (formik.touched.newPassword && !!formik.errors.newPassword) ||
            !!error
          }
        >
          <FormLabel htmlFor="password">{t('common:Password')}</FormLabel>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={LockKey} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              size="lg"
              id="newPassword"
              value={formik.values.newPassword}
              maxLength={150}
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
            />
            <InputRightElement>
              <IconButton
                size="sm"
                variant="ghost"
                aria-label={showPassword ? 'Mask password' : 'Reveal password'}
                onClick={handleChangeShowPasswordStatus}
                icon={
                  showPassword ? (
                    <Icon as={Eye} w="6" h="6" />
                  ) : (
                    <Icon as={EyeClosed} w="6" h="6" />
                  )
                }
              />
            </InputRightElement>
          </InputGroup>
          {(formik.touched.newPassword && !!formik.errors.newPassword) ||
          !!error ? (
            <FormErrorMessage>
              {t(
                `components:errors.${
                  formik.errors.newPassword ?? error?.message ?? ''
                }`
              )}
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
          <FormLabel htmlFor="repassword">
            {t('common:RepeatPassword')}
          </FormLabel>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={Repeat} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              size="lg"
              id="confirmNewPassword"
              value={formik.values.confirmNewPassword}
              maxLength={150}
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
            />
          </InputGroup>
          {!!formik.errors.confirmNewPassword && (
            <FormErrorMessage>
              {t(`components:errors.${formik.errors.confirmNewPassword}`)}
            </FormErrorMessage>
          )}
        </FormControl>
      </Stack>
      <Box pt={4}>
        <Button
          isLoading={loading}
          size="lg"
          loadingText={t('common:Continue')}
          colorScheme="blue"
          type="submit"
        >
          {t('common:Continue')}
        </Button>
      </Box>
    </form>
  );
}

export default RecoveryNewFormModule;
