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
  Checkbox,
  FormErrorMessage,
  Box,
  FormHelperText,
  Link,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useTranslation, Trans } from 'react-i18next';
import { At, Eye, EyeClosed, LockKey, Repeat } from 'phosphor-react';
import { useState, useEffect } from 'react';
import { isOnPremise } from '@3divi/shared-components';
import { VALIDATION_SCHEMAS } from '../../consts';
import { useSignUp } from '../../domains/user';

export function SignUpFormModule() {
  const { t } = useTranslation();
  const [showPassword, setShowPasswordStatus] = useState<boolean>(false);
  const [newPasswordError, setNewPasswordError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const { signUp, loading, error } = useSignUp();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      policy: isOnPremise(),
    },
    validationSchema: VALIDATION_SCHEMAS.registration,
    onSubmit: (values) => {
      const { password, confirmPassword, email } = values;
      signUp({ password, confirmPassword, email });
    },
    validateOnBlur: true,
  });
  const onRegistrationDataChange = (e: React.ChangeEvent<any>): void => {
    formik.handleChange(e);
    setNewPasswordError('');
    setEmailError('');
  };

  const handleChangeShowPasswordStatus = () => {
    setShowPasswordStatus(!showPassword);
  };

  useEffect(() => {
    if (error) {
      if (error.message === 'InvalidEmail' || error.message === 'UserExists') {
        setEmailError(error.message);
      } else {
        setNewPasswordError(error.message);
      }
    }
  }, [error]);

  const link = (href: string) => (
    <Button
      id="terms-and-privacy-policy-links"
      as={Link}
      isExternal
      variant="link"
      colorScheme="blue"
      fontWeight="normal"
      href={href}
    />
  );

  return (
    <form id="sign-up-form" onSubmit={formik.handleSubmit}>
      <Stack spacing={4}>
        <FormControl
          isInvalid={
            (formik.touched.email && Boolean(formik.errors.email)) ||
            Boolean(emailError)
          }
        >
          <FormLabel htmlFor="email">{t('common:Email')}</FormLabel>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={At} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              id="email"
              name="email"
              value={formik.values.email}
              onChange={onRegistrationDataChange}
              onBlur={formik.handleBlur}
            />
          </InputGroup>
          <FormErrorMessage>
            {t(`components:errors.${formik.errors.email ?? emailError}`)}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={
            (formik.touched.password && Boolean(formik.errors.password)) ||
            Boolean(newPasswordError)
          }
        >
          <FormLabel htmlFor="password">{t('common:Password')}</FormLabel>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={LockKey} opacity={0.48} w="6" h="6" />
            </InputLeftElement>
            <Input
              size="lg"
              id="password"
              onChange={onRegistrationDataChange}
              value={formik.values.password}
              name="password"
              type={showPassword ? 'text' : 'password'}
            />
            <InputRightElement>
              <IconButton
                onClick={handleChangeShowPasswordStatus}
                size="sm"
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
          {(formik.touched.password && !!formik.errors.password) ||
          !!newPasswordError ? (
            <FormErrorMessage>
              {t(
                `components:errors.${
                  formik.errors.password ?? newPasswordError
                }`
              )}
            </FormErrorMessage>
          ) : (
            <FormHelperText>{t('components:errors.Minimum')}</FormHelperText>
          )}
        </FormControl>
        <FormControl
          isInvalid={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
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
              id="repassword"
              name="confirmPassword"
              onChange={onRegistrationDataChange}
              value={formik.values.confirmPassword}
              type={showPassword ? 'text' : 'password'}
            />
          </InputGroup>
          {!!formik.errors.confirmPassword && (
            <FormErrorMessage>
              {t(`components:errors.${formik.errors.confirmPassword}`)}
            </FormErrorMessage>
          )}
        </FormControl>
        {!isOnPremise() && (
          <FormControl
            isInvalid={formik.touched.policy && Boolean(formik.errors.policy)}
          >
            <Checkbox
              size="md"
              onChange={onRegistrationDataChange}
              value={String(formik.values.policy)}
              name="policy"
            >
              <Trans
                i18nKey="pages:Register.PrivacyPolicy"
                components={{
                  policyLink: link('https://3divi.ai/resources/privacy_policy'),
                  termsLink: link(
                    'https://3divi.ai/resources/terms_of_service'
                  ),
                }}
              />
            </Checkbox>
            {!!formik.errors.policy && (
              <FormErrorMessage>
                {t(`components:errors.${formik.errors.policy}`)}
              </FormErrorMessage>
            )}
          </FormControl>
        )}
      </Stack>
      <Box pt="8">
        <Button
          type="submit"
          isLoading={loading}
          size="lg"
          loadingText={t('pages:Register.RegisterButton')}
          colorScheme="blue"
          w="full"
        >
          {t('pages:Register.RegisterButton')}
        </Button>
      </Box>
    </form>
  );
}
