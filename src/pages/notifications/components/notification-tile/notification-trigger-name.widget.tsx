import { Box, Text } from '@chakra-ui/react';
import { TNotificationData } from '../../../../domains/notification';
import { getContrastColor } from '../../../../helpers';

type TNotificationTriggerName = {
  notification: TNotificationData;
};

function NotificationTriggerName({ notification }: TNotificationTriggerName) {
  return (
    <Box
      px={4}
      py={2}
      fontWeight="semibold"
      bg={notification.profileGroupColor}
    >
      <Text
        color={getContrastColor(notification.profileGroupColor)}
        fontSize="sm"
        noOfLines={1}
        wordBreak="break-all"
      >
        {notification.profileGroupTitle}
      </Text>
    </Box>
  );
}

export default NotificationTriggerName;
