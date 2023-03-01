import { useTranslation } from 'react-i18next';
import { VStack, Flex, Text, Stack, Box, Editable } from '@chakra-ui/react';
import { useFormik } from 'formik';
import {
  CustomFormLabel,
  EditableControlButtons,
  EditableTextInput,
} from '../../../elements';
import {
  TIntegrationData,
  useUpdateSecurOsIntegration,
} from '../../../domains/sequr-os-integration';

type TIntegrationInfo = {
  integration: TIntegrationData;
};

export function IntegrationInfo({
  integration,
}: TIntegrationInfo): JSX.Element {
  const { t } = useTranslation('pages');
  const { updateSecurOsIntegration } = useUpdateSecurOsIntegration();

  const formik = useFormik({
    initialValues: {
      login: integration.login,
      password: '',
      url: integration.url,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateSecurOsIntegration({
        login: values.login,
        password: values.password,
        url: values.url,
      });
    },
  });

  return (
    <VStack spacing={6} alignItems="flex-start">
      <Box flexGrow={1} w="full" display="flex" flexDir="column">
        <form onSubmit={formik.handleSubmit}>
          <Editable>
            <Stack spacing={2} align="flex-start" boxSizing="content-box">
              <Flex flexGrow={1} w="full" align="center">
                <CustomFormLabel label={t('Settings.Integration.System')} />
                <Text
                  minH={8}
                  id="system"
                  pl={3}
                  fontSize="sm"
                  opacity={!integration.url ? 0.48 : undefined}
                  maxW={integration.url ? 60 : undefined}
                  noOfLines={1}
                  wordBreak="break-all"
                  lineHeight="base"
                  pt={0.5}
                >
                  {t('Settings.Integration.Systems.SecurOS')}
                </Text>
              </Flex>

              <EditableTextInput
                value={formik.values.login}
                name="login"
                heading={t('Settings.Integration.Login')}
                handleChange={formik.handleChange}
                error={formik.errors.login}
              />

              <EditableTextInput
                value={formik.values.password}
                name="password"
                heading={t('Settings.Integration.Password')}
                handleChange={formik.handleChange}
                error={formik.errors.password}
              />

              <EditableTextInput
                value={formik.values.url}
                name="url"
                heading={t('Settings.Integration.Url')}
                handleChange={formik.handleChange}
                error={formik.errors.url}
              />
            </Stack>
            <EditableControlButtons
              handleResetForm={formik.resetForm}
              isEditing={formik.dirty}
            />
          </Editable>
        </form>
      </Box>
    </VStack>
  );
}
