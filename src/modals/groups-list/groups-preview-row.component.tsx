import { Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { Trash } from 'phosphor-react';
import { SetStateAction } from 'react';
import { TGroup } from '../../domains/group';
import { ColorRound } from '../../elements';

type TGroupsPreviewRow = {
  group: TGroup;
  setSelectedGroups: (value: SetStateAction<TGroup[]>) => void;
  setAddedGroups: (value: SetStateAction<TGroup[]>) => void;
};

function GroupsPreviewRow({
  group,
  setAddedGroups,
  setSelectedGroups,
}: TGroupsPreviewRow) {
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const redColor = useColorModeValue('red.500', 'red.400');

  const handleRemoveGroup = () => {
    setAddedGroups((prevState) => [
      ...prevState.filter((item) => item.id !== group.id),
    ]);
    setSelectedGroups((prevState) => [
      ...prevState.filter((item) => item.id !== group.id),
    ]);
  };

  return (
    <Flex
      py={3}
      borderBottom="1px"
      pl="4"
      borderColor={borderColor}
      alignItems="center"
      gap={3}
    >
      <IconButton
        size="sm"
        icon={<Trash size={20} />}
        aria-label="remove-group"
        variant="ghost"
        colorScheme="red"
        color={redColor}
        onClick={handleRemoveGroup}
      />
      <ColorRound color={group.info.color} size={4} />
      <Text noOfLines={1} wordBreak="break-all">
        {group.title}
      </Text>
    </Flex>
  );
}

export default GroupsPreviewRow;
