import { useTranslation } from 'react-i18next';
import { DrawerBlock } from '../../blocks';
import { useDeleteGroup, useGetInitialGroupValues } from '../../domains/group';
import ManageGroupForm from './manage-group-form.component';
import ManageGroupTriggerSection from './manage-group-trigger-section.component';

type TModifyGroupModal = {
  isOpen: boolean;
  onClose: () => void;
  groupId: string;
};

function ManageGroupModal({ isOpen, onClose, groupId }: TModifyGroupModal) {
  const { t } = useTranslation('components');
  const { deleteGroup, loading: deleteLoading } = useDeleteGroup();
  const { initialValues, loading, shouldUpdate, group } =
    useGetInitialGroupValues(groupId);

  const handleDeleteGroup = () => {
    deleteGroup(groupId);
  };

  return (
    <DrawerBlock
      isOpen={isOpen}
      onClose={onClose}
      id={groupId}
      creationDate={group?.creationDate}
      lastModify={group?.lastModified}
      deleteEntity={{
        deleteAction: handleDeleteGroup,
        deleteBodyText: t('Modal.DeleteGroup.Message'),
        deleteHeaderText: t('Modal.DeleteGroup.Title'),
        deleteLoading,
        buttonId: 'delete-group-button',
      }}
      leftSideComponent={
        <ManageGroupForm
          initialValues={initialValues}
          loading={loading}
          shouldUpdate={shouldUpdate}
        />
      }
      rightSideComponent={<ManageGroupTriggerSection group={group} />}
    />
  );
}

export default ManageGroupModal;
