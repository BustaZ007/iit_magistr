import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { TGroup, useCreateGroup } from '../../domains/group';
import { CreateEntityDrawer } from '../../elements/create-entity-drawer';
import { VALIDATION_SCHEMAS } from '../../consts';
import CreateGroupForm from './create-group-form.component';

type TCreateGroupModal = {
  isOpen: boolean;
  onClose: () => void;
  callback?: (group: TGroup) => void;
};

function CreateGroupModal({ isOpen, onClose, callback }: TCreateGroupModal) {
  const { t } = useTranslation('components');
  const { createGroup } = useCreateGroup();

  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      groupColor: 'white',
    },
    validateOnChange: false,
    validationSchema: VALIDATION_SCHEMAS.updateCreateGroup,
    onSubmit: (values) => {
      createGroup(values, callback);
      onClose();
    },
  });
  return (
    <CreateEntityDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={t('Modal.CreateGroup.Title')}
      formElements={
        <CreateGroupForm
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

export default CreateGroupModal;
