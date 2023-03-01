import { HStack, Button, Heading, Stack, Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { UserCirclePlus } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { FormPageLayout } from '../../layouts';
import { PATHNAMES } from '../../consts';
import { SignUpFormModule } from './sign-up-form.module';

export function SignUpPage() {
  const { t } = useTranslation();
  return (
    <FormPageLayout
      buttons={
        <Button
          id="sign-in-button-sign-up-page"
          as={Link}
          to={PATHNAMES.sign_in}
          variant="outline"
          size="lg"
          fontWeight="normal"
        >
          {t('pages:Register.SignInButton')}
        </Button>
      }
    >
      <Stack spacing={8}>
        <HStack spacing={2}>
          <Icon as={UserCirclePlus} w="12" h="12" />
          <Heading fontSize="4xl" fontWeight="normal">
            {t('pages:Register.Title')}
          </Heading>
        </HStack>
        <SignUpFormModule />
      </Stack>
    </FormPageLayout>
  );
}
