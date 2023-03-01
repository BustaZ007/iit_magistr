import { useState, useEffect } from 'react';
import {
  HStack,
  Button,
  Heading,
  Stack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LinkBreak, LockKey } from 'phosphor-react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FormPageLayout } from '../../layouts';
import { useAuthentification } from '../../hooks';
import { FiltersSearchParamsNames, PATHNAMES } from '../../consts';
import RecoveryNewFormModule from './recovery-new-form.module';

function RecoveryNewPage() {
  const { t } = useTranslation('pages');
  const navigate = useNavigate();
  const { isAuthentificated } = useAuthentification();
  const [searchParams] = useSearchParams();
  const [linkError, setLinkError] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>(
    searchParams.get(FiltersSearchParamsNames.USER_ID) ?? ''
  );
  const [confirmationToken, setConfirmationToken] = useState<string>(
    searchParams.get(FiltersSearchParamsNames.CONFIRMATION_TOKEN) ?? ''
  );

  useEffect(() => {
    if (isAuthentificated) {
      navigate(PATHNAMES.workspaces, { replace: true });
    }
    const userIdParam = searchParams.get(FiltersSearchParamsNames.USER_ID);
    const confirmationTokenParam = searchParams.get(
      FiltersSearchParamsNames.CONFIRMATION_TOKEN
    );
    if (userIdParam && confirmationTokenParam) {
      setUserId(userIdParam);
      setConfirmationToken(confirmationTokenParam);
    } else {
      navigate(PATHNAMES.sign_in, { replace: true });
    }
  }, [isAuthentificated, searchParams, navigate]);

  return (
    <FormPageLayout
      buttons={
        <Button
          as={Link}
          to={PATHNAMES.sign_in}
          variant="outline"
          size="lg"
          fontWeight="normal"
          id="sign-in-button-recovery-new"
        >
          {t('SignIn.Title')}
        </Button>
      }
    >
      {linkError ? (
        <VStack spacing={8} textAlign="center">
          <Icon as={LinkBreak} w="12" h="12" />
          <Heading fontSize="4xl" fontWeight="normal">
            {t('pages:ChangePassword.ErrorNotice')}
          </Heading>
          <Text>{t('pages:ChangePassword.ErrorMessage')}</Text>
          <Button
            as={Link}
            to={PATHNAMES.sign_in}
            size="lg"
            colorScheme="blue"
            id="back-sign-in-button-recovery-new"
          >
            {t('pages:ConfirmEmail.BackSignInButton')}
          </Button>
        </VStack>
      ) : (
        <Stack spacing={8}>
          <HStack spacing={2}>
            <Icon as={LockKey} w="12" h="12" />
            <Heading fontSize="4xl" fontWeight="normal">
              {t('ChangePassword.Title')}
            </Heading>
          </HStack>
          <RecoveryNewFormModule
            userId={userId ?? ''}
            confirmationToken={confirmationToken ?? ''}
            setLinkError={setLinkError}
          />
        </Stack>
      )}
    </FormPageLayout>
  );
}

export default RecoveryNewPage;
