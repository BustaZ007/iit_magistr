import {
  Box,
  Divider,
  Text,
  Flex,
  useColorModeValue,
  Spacer,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Trash } from 'phosphor-react';
import { TTrigger, useDeleteTrigger } from '../../domains/triggers';

type TManageGroupTriggerItem = {
  trigger: TTrigger;
};
function ManageGroupTriggerItem({ trigger }: TManageGroupTriggerItem) {
  const redColor = useColorModeValue('red.500', 'red.400');
  const [hovered, setHovered] = useState(false);
  const { deleteTrigger, loading } = useDeleteTrigger(trigger.id);
  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
      <Divider />
      <Box key={trigger.id} pr={5}>
        <Flex
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          alignItems="center"
          justifyContent="flex-start"
          pl={2}
        >
          <Flex w="full" py={1} alignItems="center">
            <Text noOfLines={1} wordBreak="break-all" maxW="180px">
              {trigger.title}
            </Text>
            <Spacer />
            <IconButton
              size="sm"
              icon={<Icon as={Trash} w={5} h={5} />}
              aria-label="remove-group"
              variant="ghost"
              colorScheme="red"
              color={redColor}
              onClick={deleteTrigger}
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
    </>
  );
}
export default ManageGroupTriggerItem;
