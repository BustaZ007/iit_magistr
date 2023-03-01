import {
  Editable,
  EditablePreview,
  EditableTextarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUpdateProfileData } from '../../../../domains/profiles';
import NotificationButtons from './notification-buttons.widget';

type TNotificationComment = {
  notificationId: string;
  description: string;
  profileId: string;
  isViewed: boolean;
};

function NotificationComment({
  notificationId,
  description,
  profileId,
  isViewed,
}: TNotificationComment): JSX.Element {
  const { t } = useTranslation('pages');
  const { updateProfileData } = useUpdateProfileData();
  const [textareaValue, setTextareaValue] = useState<string>(description ?? '');
  const color = useColorModeValue('black', 'white');

  const handleUpdateProfileData = (value: string) => {
    updateProfileData(value, profileId);
  };

  useEffect(() => {
    if (description) setTextareaValue(description);
  }, [description, setTextareaValue]);

  return (
    <Editable
      w="full"
      onSubmit={handleUpdateProfileData}
      defaultValue={description}
      value={textareaValue}
      onChange={setTextareaValue}
      placeholder={
        profileId ? t('Notifications.CommentPlaceholder') : undefined
      }
      isDisabled={!profileId}
    >
      {profileId && (
        <>
          <EditablePreview
            noOfLines={5}
            fontSize="sm"
            _hover={{
              cursor: 'pointer',
            }}
            color={!description ? 'gray.600' : color}
          />
          <EditableTextarea
            px={2}
            minH={16}
            fontSize="sm"
            maxLength={255}
            _focusVisible={{}}
          />
        </>
      )}
      <NotificationButtons
        notificationId={notificationId}
        isViewed={isViewed}
      />
    </Editable>
  );
}

export default NotificationComment;
