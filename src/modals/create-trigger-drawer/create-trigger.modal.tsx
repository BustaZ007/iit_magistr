import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { TGroup } from '../../domains/group';
import { CreateEntityDrawer } from '../../elements/create-entity-drawer';
import { useCreateTrigger } from '../../domains/triggers';
import { VALIDATION_SCHEMAS } from '../../consts';
import CreateTriggerForm from './create-trigger-form.conponent';

type TCreateTriggerModal = {
  isOpen: boolean;
  onClose: () => void;
  profileGroup?: TGroup;
};

function CreateTriggerModal({
  isOpen,
  onClose,
  profileGroup,
}: TCreateTriggerModal) {
  const { t } = useTranslation('components');
  const { createTrigger } = useCreateTrigger();

  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      profileGroupId: profileGroup?.id ?? '',
      endpointsIds: [],
    },
    validateOnChange: false,
    validationSchema: VALIDATION_SCHEMAS.createTrigger,
    onSubmit: (values) => {
      createTrigger(values.profileGroupId, values.title, values.endpointsIds);
      onClose();
    },
  });

  return (
    <CreateEntityDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={t('Modal.CreateTrigger.Title')}
      formElements={
        <CreateTriggerForm
          needGroup={!profileGroup}
          values={formik.values}
          setFieldValue={formik.setFieldValue}
          errors={formik.errors}
          handleChange={formik.handleChange}
        />
      }
      handleSubmit={formik.handleSubmit}
    />
  );
}

export default CreateTriggerModal;
