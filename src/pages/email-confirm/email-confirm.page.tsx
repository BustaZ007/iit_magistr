import { Button, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { EnvelopeSimple } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { FormPageLayout } from '../../layouts';
import { FiltersSearchParamsNames, PATHNAMES } from '../../consts';
import { useAuthentification } from '../../hooks';
import { useSendConfirmationEmail } from '../../domains/user';

export function EmailConfirmPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuthentificated } = useAuthentification();
  const [searchParams] = useSearchParams();
  const { sendConfirmationEmail } = useSendConfirmationEmail();
  const [timer, setTimer] = useState<number>(60);

  useEffect(() => {
    const mail = searchParams.get(FiltersSearchParamsNames.MAIL);
    if (!mail || isAuthentificated) {
      navigate(PATHNAMES.sign_in, { replace: true });
    }
  }, []);

  const handleResendClick = () => {
    sendConfirmationEmail(
      searchParams.get(FiltersSearchParamsNames.MAIL) ?? ''
    );
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

  return (
    <FormPageLayout
      buttons={
        <Button
          as={Link}
          to={PATHNAMES.sign_in}
          variant="outline"
          size="lg"
          fontWeight="normal"
          id="sign-in-button-email-confirm"
        >
          {t('pages:SendConfirmEmail.SignInButton')}
        </Button>
      }
    >
      <VStack spacing={8}>
        <Icon as={EnvelopeSimple} w="12" h="12" />
        <VStack spacing={4} textAlign="center">
          <Heading fontSize="4xl" fontWeight="normal">
            {t(`pages:SendConfirmEmail.Notice`)}
          </Heading>
          <Text>
            {t('pages:SendConfirmEmail.Message', {
              mail: searchParams.get(FiltersSearchParamsNames.MAIL),
            })}
          </Text>
        </VStack>
        <Button
          as={Link}
          to={PATHNAMES.sign_in}
          isLoading={false}
          size="lg"
          colorScheme="blue"
          id="back-sign-in-button-email-confirm"
        >
          {t('pages:SendConfirmEmail.BackSignInButton')}
        </Button>
        <Button
          onClick={handleResendClick}
          disabled={timer !== 60}
          variant="link"
          fontWeight="normal"
          id="resend-instructions-button-email-confirm"
        >
          {timer !== 60
            ? t('pages:SendConfirmEmail.Timer', {
                timer,
              })
            : t('pages:SendConfirmEmail.ResendButton')}
        </Button>
      </VStack>
    </FormPageLayout>
  );
}
