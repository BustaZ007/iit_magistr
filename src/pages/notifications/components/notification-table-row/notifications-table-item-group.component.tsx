import { Box } from '@chakra-ui/react';
import { TGroup } from '../../../../domains/group';
import { TagItem } from '../../../../elements';

type TNotificationsTableItemGroup = {
  color: string;
  title: string;
};

function NotificationsTableItemGroup({
  color,
  title,
}: TNotificationsTableItemGroup) {
  const historyItemGroup: TGroup = {
    lastModified: '',
    id: '',
    title,
    info: {
      color,
    },
    creationDate: '',
  };

  return (
    <Box>
      <TagItem group={historyItemGroup} />
    </Box>
  );
}

export default NotificationsTableItemGroup;
