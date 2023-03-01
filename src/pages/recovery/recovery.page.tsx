import { HStack, Button, Heading, Stack, Icon, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LockKey } from 'phosphor-react';
import { FormPageLayout } from '../../layouts';
import { PATHNAMES } from '../../consts';
import RecoveryFormModule from './recovery-form.module';

function RecoveryPage() {
  const { t } = useTranslation('pages');

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
            id="sign-in-button-recovery"
          >
            {t('RecoveryPassword.SignInButton')}
          </Button>
          <Button
            as={Link}
            to={PATHNAMES.sign_up}
            variant="outline"
            size="lg"
            fontWeight="normal"
            id="sign-up-button-recovery"
          >
            {t('RecoveryPassword.RegisterButton')}
          </Button>
        </>
      }
    >
      <Stack spacing={8}>
        <Stack spacing={4}>
          <HStack spacing={2}>
            <Icon as={LockKey} w="12" h="12" />
            <Heading fontSize="4xl" fontWeight="normal">
              {t('RecoveryPassword.Title')}
            </Heading>
          </HStack>
          <Text>{t('RecoveryPassword.EmailNotSendNotice')}</Text>
        </Stack>
        <RecoveryFormModule />
      </Stack>
    </FormPageLayout>
  );
}

export default RecoveryPage;
