/* eslint-disable camelcase */
import { Stack } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { useTranslation } from 'react-i18next';
import { TFormikOnChange } from '../../consts';
import { DrawerInput } from '../../elements/drawer';
import CreateEndpointSelect from './create-endpoint-select.component';

type TCreateEndpointValues = {
  type: string;
  url: string;
  target_email: string;
  method: string;
};

type TCreateEndpointForm = {
  values: TCreateEndpointValues;
  errors: FormikErrors<TCreateEndpointValues>;
  handleChange: TFormikOnChange;
};

function CreateEndpointForm({
  errors,
  handleChange,
  values,
}: TCreateEndpointForm) {
  const { t } = useTranslation('components');

  return (
    <Stack w={550} boxSizing="content-box" spacing={4} p={6}>
      <CreateEndpointSelect
        name="type"
        elements={['Email', 'Webhook']}
        handleChange={handleChange}
        heading={t('Modal.ManageEndpoint.Type.Title')}
        value={values.type}
      />

      {values.type === 'Webhook' && (
        <>
          <CreateEndpointSelect
            name="method"
            elements={['GET', 'POST']}
            handleChange={handleChange}
            heading={t('Modal.ManageEndpoint.Method')}
            value={values.method ?? 'GET'}
          />
          <DrawerInput
            name="url"
            error={errors.url}
            onChange={handleChange}
            label={t('Modal.ManageEndpoint.Url')}
            value={values.url ?? ''}
            id="endpoint-url"
          />
        </>
      )}

      {values.type === 'Email' && (
        <DrawerInput
          name="target_email"
          error={errors.target_email}
          onChange={handleChange}
          label={t('Modal.ManageEndpoint.Email')}
          value={values.target_email ?? ''}
          id="endpoint-email"
          autoFocus
        />
      )}
    </Stack>
  );
}

export default CreateEndpointForm;
