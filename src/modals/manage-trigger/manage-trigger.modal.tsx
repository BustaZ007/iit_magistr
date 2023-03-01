import { useTranslation } from 'react-i18next';
import { DrawerBlock } from '../../blocks';
import { useDeleteTrigger, useGetTriggerById } from '../../domains/triggers';
import ManageTriggerForm from './manage-trigger-form.component';
import ManageTriggerEndpointSection from './manage-trigger-endpoint-section/manage-trigger-endpoint-section.component';

type TManageTriggerModal = {
  isOpen: boolean;
  onClose: () => void;
  triggerId: string;
};

function ManageTriggerModal({
  isOpen,
  onClose,
  triggerId,
}: TManageTriggerModal) {
  const { trigger, loading } = useGetTriggerById(triggerId);
  const { t } = useTranslation('components');
  const { deleteTrigger, loading: deleteLoading } = useDeleteTrigger(triggerId);

  if (!Object.keys(trigger).length) return null;

  return (
    <DrawerBlock
      isOpen={isOpen}
      onClose={onClose}
      id={triggerId}
      creationDate={trigger.creationDate}
      lastModify={trigger.lastModified}
      deleteEntity={{
        deleteAction: deleteTrigger,
        deleteBodyText: t('Modal.DeleteTrigger.Message'),
        deleteHeaderText: t('Modal.DeleteTrigger.Title'),
        deleteLoading,
        buttonId: 'delete-trigger-button',
      }}
      leftSideComponent={
        <ManageTriggerForm trigger={trigger} loading={loading} />
      }
      rightSideComponent={<ManageTriggerEndpointSection trigger={trigger} />}
    />
  );
}

export default ManageTriggerModal;
