import { useTranslation } from 'react-i18next';
import { DrawerBlock } from '../../blocks';
import { useDeleteAgent, useGetAgentById } from '../../domains/agent';
import ManageAgentFormModule from './manage-agent-form.module';

type TManageAgentModal = {
  isOpen: boolean;
  onClose: () => void;
  agentId: string;
};

function ManageAgentModal({ isOpen, onClose, agentId }: TManageAgentModal) {
  const { t } = useTranslation('components');
  const { agent } = useGetAgentById(agentId);
  const { deleteAgent, loading: deleteLoading } = useDeleteAgent(agent.id);

  return (
    <DrawerBlock
      isOpen={isOpen}
      onClose={onClose}
      id={agentId}
      creationDate={agent.creationDate}
      lastModify={agent.lastModified}
      deleteEntity={{
        deleteAction: deleteAgent,
        deleteBodyText: t('Modal.DeleteAgent.Message'),
        deleteHeaderText: t('Modal.DeleteAgent.Title'),
        deleteLoading,
        buttonId: 'delete-agent-modal-button',
      }}
      leftSideComponent={
        <ManageAgentFormModule onClose={onClose} agent={agent} />
      }
      rightSideComponent={undefined}
    />
  );
}

export default ManageAgentModal;
