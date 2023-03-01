import { useEffect, useState } from 'react';
import { Button, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EnvelopeSimple } from 'phosphor-react';
import { FormPageLayout } from '../../layouts';
import { FiltersSearchParamsNames, PATHNAMES } from '../../consts';
import { useAuthentification } from '../../hooks';
import { useSendResetPassword } from '../../domains/user';

function RecoverySuccessPage() {
  const { t } = useTranslation('pages');
  const navigate = useNavigate();
  const { isAuthentificated } = useAuthentification();
  const { resetPassword } = useSendResetPassword();
  const [searchParams] = useSearchParams();
  const [timer, setTimer] = useState<number>(60);

  const handleResendClick = () => {
    resetPassword(searchParams.get(FiltersSearchParamsNames.EMAIL) ?? '');
    let time = 59;
    setTimer(time);
    const interval = setInterval(() => {
      if (time !== 0) {
        time -= 1;
        setTimer(time);
      } else {
        setTimer(60);
        clearInterval(interval);
      }
    }, 1000);
  };
  useEffect(() => {
    const mail = searchParams.get(FiltersSearchParamsNames.EMAIL);
    if (!mail || isAuthentificated) {
      navigate(PATHNAMES.sign_in, { replace: true });
    }
  }, []);

  return (
    <FormPageLayout
      buttons={
        <>
          <Button
            as={Link}
            to={PATHNAMES.sign_in}
            variant="ghost"
            size="lg"
            fontWeight="normal"
            id="sign-in-button-password-recovery-success"
          >
            {t('RecoveryPassword.SignInButton')}
          </Button>
          <Button
            as={Link}
            to={PATHNAMES.sign_up}
            variant="outline"
            size="lg"
            fontWeight="normal"
            id="sign-up-button-password-recovery-success"
          >
            {t('RecoveryPassword.RegisterButton')}
          </Button>
        </>
      }
    >
      <VStack spacing={8}>
        <Icon as={EnvelopeSimple} w="12" h="12" />
        <VStack spacing={4} textAlign="center">
          <Heading fontSize="4xl" fontWeight="normal">
            {t('RecoveryPassword.SuccesNotice')}
          </Heading>
          <Text>
            {t('RecoveryPassword.SuccesMessage', {
              mail: searchParams.get(FiltersSearchParamsNames.EMAIL),
            })}
          </Text>
        </VStack>
        <Button
          as={Link}
          to={PATHNAMES.sign_in}
          isLoading={false}
          size="lg"
          colorScheme="blue"
          id="sign-in-main-button-password-recovery-success"
        >
          {t('SendConfirmEmail.SignInButton')}
        </Button>
        <Button
          isDisabled={timer !== 60}
          variant="link"
          fontWeight="normal"
          onClick={handleResendClick}
          id="resend-button-recovery-success"
        >
          {timer !== 60
            ? t('SendConfirmEmail.Timer', {
                timer,
              })
            : t('SendConfirmEmail.ResendButton')}
        </Button>
      </VStack>
    </FormPageLayout>
  );
}

export default RecoverySuccessPage;
