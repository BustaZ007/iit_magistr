import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { CreateEntityDrawer } from '../../elements/create-entity-drawer';
import { VALIDATION_SCHEMAS } from '../../consts';
import {
  TEndpoint,
  useCreateEmailEndpoint,
  useCreateEWebhookEndpoint,
} from '../../domains/endpoints';
import CreateEndpointForm from './create-endpoint-form.component';

type TCreateTriggerModal = {
  isOpen: boolean;
  onClose: () => void;
  callback?: (endpoint: TEndpoint) => void;
};

function CreateTriggerModal({
  isOpen,
  onClose,
  callback,
}: TCreateTriggerModal) {
  const { t } = useTranslation('components');
  const { createEmailEndpoint } = useCreateEmailEndpoint();
  const { createWebhookEndpoint } = useCreateEWebhookEndpoint();

  const formik = useFormik({
    initialValues: {
      type: 'Email',
      url: '',
      target_email: '',
      method: 'GET',
    },
    validateOnChange: false,
    validationSchema: VALIDATION_SCHEMAS.updateEndpoint,
    onSubmit: (values) => {
      if (values.type === 'Email') {
        createEmailEndpoint(values.target_email, onClose).then((endpoint) => {
          if (endpoint && callback) callback(endpoint);
        });
      } else {
        createWebhookEndpoint(values.url, values.method, onClose).then(
          (endpoint) => {
            if (endpoint && callback) callback(endpoint);
          }
        );
      }
    },
  });
  return (
    <CreateEntityDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={t('Modal.CreateEndpoint.Title')}
      formElements={
        <CreateEndpointForm
          values={formik.values}
          errors={formik.errors}
          handleChange={formik.handleChange}
        />
      }
      handleSubmit={formik.handleSubmit}
    />
  );
}

export default CreateTriggerModal;
