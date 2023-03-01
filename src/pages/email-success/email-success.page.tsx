import { Button, Heading, Icon, VStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, LinkBreak } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { FormPageLayout } from '../../layouts';
import { FiltersSearchParamsNames, PATHNAMES } from '../../consts';
import { useAuthentification } from '../../hooks';
import { useConfirmEmail } from '../../domains/user';

export function EmailSuccessPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuthentificated } = useAuthentification();
  const [searchParams] = useSearchParams();
  const { confirmEmail, loading, error } = useConfirmEmail();
  const [invalidLink, setLinkStatus] = useState<boolean>(false);

  useEffect(() => {
    const userId = searchParams.get(FiltersSearchParamsNames.USER_ID);
    const confirmationToken = searchParams.get(
      FiltersSearchParamsNames.CONFIRMATION_TOKEN
    );
    if (userId && confirmationToken && !isAuthentificated) {
      confirmEmail({
        userId,
        confirmationToken,
      });
    } else {
      navigate(PATHNAMES.sign_in, { replace: true });
    }
  }, []);

  useEffect(() => {
    setLinkStatus(error?.message === 'BrokenLink');
  }, [error]);

  return (
    <FormPageLayout
      buttons={
        <Button
          as={Link}
          to={PATHNAMES.sign_in}
          variant="outline"
          size="lg"
          fontWeight="normal"
          id="sign-in-button-email-confirm-success"
        >
          {t('pages:ConfirmEmail.SignInButton')}
        </Button>
      }
    >
      <VStack spacing={8} textAlign="center">
        <Icon as={invalidLink ? LinkBreak : CheckCircle} w="12" h="12" />
        <Heading fontSize="4xl" fontWeight="normal">
          {t(`pages:ConfirmEmail.${invalidLink ? 'Error' : ''}Notice`)}
        </Heading>
        {invalidLink && <Text>{t('pages:ConfirmEmail.ErrorMessage')}</Text>}
        <Button
          as={Link}
          to={PATHNAMES.sign_in}
          isLoading={loading}
          size="lg"
          colorScheme="blue"
          id="back-sign-in-button-email-confirm-success"
        >
          {t('pages:ConfirmEmail.BackSignInButton')}
        </Button>
      </VStack>
    </FormPageLayout>
  );
}
