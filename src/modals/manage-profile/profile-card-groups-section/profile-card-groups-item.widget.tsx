import {
  Box,
  Divider,
  Flex,
  IconButton,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { ColorRound } from '../../../elements';

type TProfileCardGroupsItem = {
  groupId: string;
  groupTitle: string;
  groupColor: string;
  handleRemoveGroup: (groupId: string) => void;
  loading: boolean;
};

function ProfileCardGroupsItem({
  groupId,
  groupTitle,
  groupColor,
  handleRemoveGroup,
  loading,
}: TProfileCardGroupsItem) {
  const redColor = useColorModeValue('red.500', 'red.400');
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box>
      <Divider />
      <Flex
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        alignItems="center"
        justifyContent="flex-start"
        pl={2}
      >
        <ColorRound color={groupColor} />
        <Flex w="full" py={1} alignItems="center" ml={4}>
          <Text maxW={40} noOfLines={1} wordBreak="break-all">
            {groupTitle}
          </Text>
          <Spacer />
          <IconButton
            size="sm"
            icon={<Trash size={20} />}
            aria-label="remove-group"
            variant="ghost"
            colorScheme="red"
            color={redColor}
            onClick={() => handleRemoveGroup(groupId)}
            transition="0.2s all"
            opacity={Number(hovered)}
            _disabled={{
              opacity: Number(hovered),
              cursor: 'not-allowed',
              color: 'gray.400',
            }}
            isDisabled={loading}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default ProfileCardGroupsItem;
