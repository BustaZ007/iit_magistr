/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, HStack, useEditableControls } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useViewNotification } from '../../../../domains/notification';

type TNotificationButtons = {
  notificationId: string;
  isViewed: boolean;
};

function NotificationButtons({
  notificationId,
  isViewed,
}: TNotificationButtons): JSX.Element {
  const { t } = useTranslation('common');
  const { viewNotification } = useViewNotification();
  const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
    useEditableControls();

  return (
    <Box pt={2}>
      {isEditing ? (
        <HStack spacing={2}>
          <Button
            w="full"
            size="sm"
            colorScheme="blue"
            {...getSubmitButtonProps()}
          >
            {t('Save')}
          </Button>
          <Button
            w="full"
            size="sm"
            variant="ghost"
            {...getCancelButtonProps()}
          >
            {t('Cancel')}
          </Button>
        </HStack>
      ) : (
        <Button
          w="full"
          size="sm"
          onClick={() => {
            viewNotification(notificationId);
          }}
          isDisabled={isViewed}
        >
          {t('pages:Notifications.MarkAsRead')}
        </Button>
      )}
    </Box>
  );
}

export default NotificationButtons;
