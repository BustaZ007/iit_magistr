import { Center, Checkbox, Radio, Text } from '@chakra-ui/react';
import { SetStateAction } from 'react';
import { TGroup } from '../../domains/group';
import { ColorRound } from '../../elements';
import { TableRow } from '../../elements/table';

type TGroupsRow = {
  group: TGroup;
  setSelectedItems: (value: SetStateAction<TGroup[]>) => void;
  isChecked: boolean;
  shouldSelectSingleItem?: boolean;
};

function GroupsRow({
  group,
  setSelectedItems,
  isChecked,
  shouldSelectSingleItem,
}: TGroupsRow) {
  const handleRemoveGroup = () => {
    setSelectedItems((prevState) =>
      prevState.filter((item) => item.id !== group.id)
    );
  };

  const handleControlChange = () => {
    if (!isChecked) {
      if (shouldSelectSingleItem) setSelectedItems([group]);
      else setSelectedItems((prevState) => [...prevState, group]);
    } else handleRemoveGroup();
  };

  return (
    <TableRow onClick={handleControlChange} pt={2} pb={2}>
      <Center pointerEvents="none">
        {shouldSelectSingleItem ? (
          <Radio isChecked={isChecked} value={group.id} />
        ) : (
          <Checkbox isChecked={isChecked} />
        )}
      </Center>
      <Text noOfLines={1} wordBreak="break-all">
        {group.title}
      </Text>
      <ColorRound color={group.info.color} size={4} />
    </TableRow>
  );
}

export default GroupsRow;
