import { Button, Heading, Icon, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'phosphor-react';
import { FormPageLayout } from '../../layouts';
import { FiltersSearchParamsNames, PATHNAMES } from '../../consts';

function RecoveryNewSuccessPage() {
  const { t } = useTranslation('pages');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isPasswordChanged = searchParams.get(
    FiltersSearchParamsNames.CHANGE_SUCCESS
  );

  useEffect(() => {
    if (!isPasswordChanged) navigate(PATHNAMES.recovery_new);
  }, [isPasswordChanged]);

  return (
    <FormPageLayout
      buttons={
        <Button
          as={Link}
          to={PATHNAMES.sign_in}
          variant="outline"
          size="lg"
          fontWeight="normal"
          id="sign-in-button-recovery-new-success"
        >
          {t('SignIn.Title')}
        </Button>
      }
    >
      <VStack spacing={8} textAlign="center">
        <Icon as={CheckCircle} w="12" h="12" />
        <Heading fontSize="4xl" fontWeight="normal">
          {t('ChangePassword.SuccesNotice')}
        </Heading>
        <Button
          as={Link}
          to={PATHNAMES.sign_in}
          isLoading={false}
          size="lg"
          colorScheme="blue"
          id="sign-in-main-button-recovery-new-success"
        >
          {t('SendConfirmEmail.BackSignInButton')}
        </Button>
      </VStack>
    </FormPageLayout>
  );
}

export default RecoveryNewSuccessPage;
