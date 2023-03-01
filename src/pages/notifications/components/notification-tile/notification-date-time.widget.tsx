import { Flex, HStack, Icon, Text } from '@chakra-ui/react';
import moment from 'moment';
import { Timer } from 'phosphor-react';
import { useCheckElapsedTime } from '../../../../hooks';

type TNotificationDateTime = {
  creationDate: string;
};

function NotificationDateTime({
  creationDate,
}: TNotificationDateTime): JSX.Element | null {
  const date = moment(creationDate).locale(window.navigator.language);
  const { elapsedTime } = useCheckElapsedTime(date);

  if (!date.isValid()) {
    return null;
  }

  return (
    <Flex gap={1} justify="space-between" flexWrap="wrap" px={4}>
      <Text fontSize="xs">{date.format('kk:mm:ss · DD MMMM')}</Text>
      <HStack spacing={1} flexShrink={0}>
        <Icon as={Timer} w={4} h={4} color="gray.400" />
        <Text fontSize="xs" color="gray.400">
          {elapsedTime}
        </Text>
      </HStack>
    </Flex>
  );
}

export default NotificationDateTime;
