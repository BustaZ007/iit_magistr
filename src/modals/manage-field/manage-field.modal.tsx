import { useTranslation } from 'react-i18next';
import { DrawerBlock } from '../../blocks';
import { useRemoveProfilesField } from '../../domains/profiles';
import ManageFieldForm from './manage-field-form.component';
import { useRemoveCameraField } from '../../domains/agent';

type TManageFieldModal = {
  isOpen: boolean;
  onClose: () => void;
  fieldName: string;
  type: string;
};

function ManageFieldModal({
  isOpen,
  onClose,
  fieldName,
  type,
}: TManageFieldModal) {
  const { t } = useTranslation('components');
  const { removeProfilesField, loading: profilesLoading } =
    useRemoveProfilesField();
  const { removeCameraField, loading: camerasLoading } = useRemoveCameraField();

  const handleRemoveProfilesField = () => {
    if (type === 'profile') {
      removeProfilesField(fieldName);
      return;
    }
    removeCameraField(fieldName);
  };

  return (
    <DrawerBlock
      isOpen={isOpen}
      onClose={onClose}
      id={fieldName}
      creationDate={undefined}
      lastModify={undefined}
      deleteEntity={{
        deleteAction: handleRemoveProfilesField,
        deleteBodyText: t('Modal.ManageField.Delete.Message'),
        deleteHeaderText: t('Modal.ManageField.Delete.Title'),
        deleteLoading: profilesLoading || camerasLoading,
        buttonId: 'delete-custom-field-button',
      }}
      leftSideComponent={<ManageFieldForm name={fieldName} type={type} />}
      rightSideComponent={null}
      hideDates
    />
  );
}

export default ManageFieldModal;
