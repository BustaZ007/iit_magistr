import { Editable, Stack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { VALIDATION_SCHEMAS } from '../../consts';
import { TEndpointMeta, useUpdateEndpointInfo } from '../../domains/endpoints';
import {
  EditableControlButtons,
  EditableSelect,
  EditableTextInput,
} from '../../elements';

type TManageEndpointForm = {
  endpointId: string;
  type: string;
  meta: TEndpointMeta;
};

function ManageEndpointForm({ endpointId, type, meta }: TManageEndpointForm) {
  const { t } = useTranslation('components');
  const { updateEndpointInfo } = useUpdateEndpointInfo();
  const formik = useFormik({
    initialValues: {
      url: meta.url,
      target_email: meta.target_email,
      method: meta.method,
    },
    enableReinitialize: true,
    validationSchema: VALIDATION_SCHEMAS.updateEndpoint,
    onSubmit: (values) => {
      updateEndpointInfo(endpointId, { ...values, type });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Editable>
        <Stack spacing={4}>
          <EditableSelect
            name="type"
            elements={['WebInterface', 'Webhook', 'Email']}
            error={type}
            handleChange={formik.handleChange}
            heading={t('Modal.ManageEndpoint.Type.Title')}
            value={type}
            isDisabled
          />
          {type === 'Webhook' && (
            <>
              <EditableSelect
                name="method"
                elements={['GET', 'POST']}
                error={formik.errors.method}
                handleChange={formik.handleChange}
                heading={t('Modal.ManageEndpoint.Method')}
                value={formik.values.method ?? 'GET'}
              />
              <EditableTextInput
                name="url"
                error={formik.errors.url}
                handleChange={formik.handleChange}
                heading={t('Modal.ManageEndpoint.Url')}
                value={formik.values.url ?? ''}
              />
            </>
          )}
          {type === 'Email' && (
            <EditableTextInput
              name="target_email"
              error={formik.errors.target_email}
              handleChange={formik.handleChange}
              heading={t('Modal.ManageEndpoint.Email')}
              value={formik.values.target_email ?? ''}
              type="email"
            />
          )}
          <EditableControlButtons
            handleResetForm={formik.resetForm}
            isEditing={formik.dirty}
          />
        </Stack>
      </Editable>
    </form>
  );
}

export default ManageEndpointForm;
