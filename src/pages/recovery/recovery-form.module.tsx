import { useState, useEffect } from 'react';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Icon,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { At } from 'phosphor-react';
import { VALIDATION_SCHEMAS } from '../../consts';
import { useSendResetPassword } from '../../domains/user';

function RecoveryFormModule() {
  const { t } = useTranslation();
  const [emailError, setEmailError] = useState<string>('');
  const { resetPassword, error, loading } = useSendResetPassword();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: VALIDATION_SCHEMAS.recoveryPassword,
    onSubmit: (values) => {
      resetPassword(values.email);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  const onEmailChange = (e: React.ChangeEvent<any>): void => {
    formik.handleChange(e);
    setEmailError('');
  };

  useEffect(() => {
    if (error?.message === 'InvalidEmail') {
      setEmailError(error?.message);
    }
  }, [error]);

  return (
    <form onSubmit={formik.handleSubmit} id="submit-recovery-form">
      <FormControl
        isInvalid={
          (formik.touched.email && !!formik.errors.email) || !!emailError
        }
      >
        <FormLabel htmlFor="email">{t('common:Email')}</FormLabel>
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none">
            <Icon as={At} opacity={0.48} w="6" h="6" />
          </InputLeftElement>
          <Input
            id="email"
            maxLength={150}
            value={formik.values.email}
            onChange={onEmailChange}
            onBlur={formik.handleBlur}
          />
        </InputGroup>
        <FormErrorMessage>
          {t(`components:errors.${formik.errors.email ?? emailError}`)}
        </FormErrorMessage>
      </FormControl>
      <Box pt={4}>
        <Button
          isLoading={loading}
          size="lg"
          loadingText={t('common:Continue')}
          colorScheme="blue"
          disabled={loading}
          type="submit"
          w="full"
        >
          {t('common:Continue')}
        </Button>
      </Box>
    </form>
  );
}

export default RecoveryFormModule;
