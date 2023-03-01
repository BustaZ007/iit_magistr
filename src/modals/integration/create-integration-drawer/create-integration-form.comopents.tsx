import { VStack } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { useTranslation } from 'react-i18next';
import { TFormikOnChange } from '../../../consts';
import {
  IntegrationSystems,
  TSecurOsIntegrationMainInfo,
} from '../../../domains/sequr-os-integration';
import { DrawerInput, DrawerSelect } from '../../../elements/drawer';

type TCreateIntegrationForm = {
  values: TSecurOsIntegrationMainInfo;
  errors: FormikErrors<TSecurOsIntegrationMainInfo>;
  handleChange: TFormikOnChange;
};

function CreateIntegrationForm({
  values,
  errors,
  handleChange,
}: TCreateIntegrationForm) {
  const { t } = useTranslation('pages');

  return (
    <VStack spacing={4} p={6} align="flex-start" boxSizing="content-box">
      {IntegrationSystems.length < 2 ? (
        <DrawerInput
          name="system"
          label={t('Settings.Integration.System')}
          id="integration-systems"
          value={values.system}
          error={errors.system}
          isReadOnly
        />
      ) : (
        <DrawerSelect
          htmlFor="integration-systems"
          label={t('Settings.Integration.System')}
          name="system"
          value={values.system}
          handleChange={handleChange}
          elements={IntegrationSystems}
        />
      )}
      <DrawerInput
        name="login"
        value={values.login}
        onChange={handleChange}
        error={errors.login}
        label={t('Settings.Integration.Login')}
        id="integration-login"
        autoFocus
      />
      <DrawerInput
        type="text"
        value={values.password}
        error={errors.password}
        onChange={handleChange}
        name="password"
        label={t('Settings.Integration.Password')}
        id="integration-password"
      />
      <DrawerInput
        name="url"
        value={values.url}
        onChange={handleChange}
        error={errors.url}
        label={t('Settings.Integration.Url')}
        id="integration-url"
      />
    </VStack>
  );
}

export default CreateIntegrationForm;
