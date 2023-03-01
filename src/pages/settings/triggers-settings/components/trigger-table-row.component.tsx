import { formatNumber } from '@3divi/shared-components';
import { Text } from '@chakra-ui/react';
import moment from 'moment';
import { TTrigger } from '../../../../domains/triggers';
import { TableRow } from '../../../../elements/table';
import { ManageTriggerModal } from '../../../../modals';

type TTriggerTableRow = {
  trigger: TTrigger;
};

function TriggerTableRow({ trigger }: TTriggerTableRow) {
  const getModals = (isOpen: boolean, onClose: () => void) =>
    isOpen ? (
      <ManageTriggerModal
        isOpen={isOpen}
        onClose={onClose}
        triggerId={trigger.id}
      />
    ) : undefined;
  return (
    <TableRow getModals={getModals}>
      <Text noOfLines={1} wordBreak="break-all">
        {trigger.title || '-'}
      </Text>
      <Text>{formatNumber(trigger.endpoints.length)}</Text>
      <Text>{moment(trigger.creationDate).format('HH:mm · D MMMM')}</Text>
    </TableRow>
  );
}

export default TriggerTableRow;
