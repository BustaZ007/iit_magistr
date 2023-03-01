import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { VALIDATION_SCHEMAS } from '../../../consts';
import { useAddCameraField } from '../../../domains/agent';
import {
  CAMERA_EXTRA_FIELD,
  IntegrationSystems,
  useCreateSecurOsIntegration,
} from '../../../domains/sequr-os-integration';
import { CreateEntityDrawer } from '../../../elements/create-entity-drawer';
import CreateIntegrationForm from './create-integration-form.comopents';

type TCreateIntegrationDrawer = {
  isOpen: boolean;
  onClose: () => void;
};

function CreateIntegrationDrawer({
  isOpen,
  onClose,
}: TCreateIntegrationDrawer): JSX.Element {
  const { t } = useTranslation('components');
  const { addCameraField } = useAddCameraField();
  const { createIntegration } = useCreateSecurOsIntegration({
    callback: () => {
      addCameraField(CAMERA_EXTRA_FIELD);
    },
  });

  const formik = useFormik({
    initialValues: {
      system: IntegrationSystems[0].title,
      login: '',
      password: '',
      url: '',
    },
    validationSchema: VALIDATION_SCHEMAS.createIntegration,
    validateOnChange: false,
    onSubmit: (values) => {
      createIntegration({
        login: values.login,
        password: values.password,
        url: values.url,
      });
      onClose();
    },
  });

  return (
    <CreateEntityDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={t('Modal.CreateIntegration.Title')}
      formElements={
        <CreateIntegrationForm
          values={formik.values}
          errors={formik.errors}
          handleChange={formik.handleChange}
        />
      }
      handleSubmit={formik.handleSubmit}
    />
  );
}

export { CreateIntegrationDrawer };
