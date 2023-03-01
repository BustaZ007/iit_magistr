import { Text } from '@chakra-ui/react';
import moment from 'moment';
import { TGroup } from '../../../../domains/group';
import { ColorRound } from '../../../../elements';
import { TableRow } from '../../../../elements/table';
import { ManageGroupModal } from '../../../../modals';

type TGroupsTableRow = {
  group: TGroup;
};

function GroupsTableRow({ group }: TGroupsTableRow) {
  const getModals = (isOpen: boolean, onClose: () => void) =>
    isOpen ? (
      <ManageGroupModal onClose={onClose} isOpen={isOpen} groupId={group.id} />
    ) : undefined;
  return (
    <TableRow getModals={getModals}>
      <ColorRound color={group.info.color} size={4} />
      <Text noOfLines={1} wordBreak="break-all">
        {group.title || '-'}
      </Text>
      <Text>{moment(group.creationDate).format('HH:mm · D MMMM')}</Text>
    </TableRow>
  );
}

export default GroupsTableRow;
