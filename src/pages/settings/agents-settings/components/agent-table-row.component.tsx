import { useTranslation } from 'react-i18next';
import { Tag, Text } from '@chakra-ui/react';
import { TableRow } from '../../../../elements/table';
import { ManageAgentModal } from '../../../../modals';
import { TAgent } from '../../../../domains/agent';

type Color = {
  [key: string]: string;
};

const AgentColor: Color = {
  active: 'green',
  inactive: 'red',
};

type TAgentTableRow = {
  agent: TAgent;
};

function AgentTableRow({ agent }: TAgentTableRow) {
  const { t } = useTranslation('pages');
  const getModals = (isOpen: boolean, onClose: () => void) =>
    isOpen ? (
      <ManageAgentModal isOpen={isOpen} onClose={onClose} agentId={agent.id} />
    ) : undefined;

  const agentStatusTitle = agent.agentLastActiveTime
    ? agent.agentStatus
    : 'not_activated';

  return (
    <TableRow getModals={getModals}>
      <Tag flexShrink={0} colorScheme={AgentColor[agentStatusTitle] ?? 'gray'}>
        {t(`Agents.AgentItemStatus.${agentStatusTitle}`)}
      </Tag>
      <Text noOfLines={1} wordBreak="break-all">
        {agent.title}
      </Text>
    </TableRow>
  );
}

export default AgentTableRow;
