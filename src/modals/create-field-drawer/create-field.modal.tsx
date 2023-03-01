import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { VALIDATION_SCHEMAS } from '../../consts';
import { useCreateProfilesField } from '../../domains/profiles';
import { CreateEntityDrawer } from '../../elements/create-entity-drawer';
import CreateFieldForm from './create-field-form.component';
import { useAddCameraField } from '../../domains/agent';

type TCreateFieldModal = {
  isOpen: boolean;
  onClose: () => void;
};

function CreateFieldModal({ isOpen, onClose }: TCreateFieldModal) {
  const { t } = useTranslation('components');
  const { createProfilesField } = useCreateProfilesField();
  const { addCameraField } = useAddCameraField(true);
  const formik = useFormik({
    initialValues: { name: '', type: 'profile' },
    validationSchema: VALIDATION_SCHEMAS.profilesField,
    onSubmit: (values) => {
      if (values.type === 'profile') {
        createProfilesField(values.name, onClose);
        return;
      }
      addCameraField(values.name, onClose);
    },
  });

  return (
    <CreateEntityDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={t('Modal.CreateField.Title')}
      formElements={
        <CreateFieldForm
          errors={formik.errors}
          values={formik.values}
          handleChange={formik.handleChange}
        />
      }
      handleSubmit={formik.handleSubmit}
    />
  );
}

export default CreateFieldModal;
