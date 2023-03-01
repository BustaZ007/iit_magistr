import { Grid } from '@chakra-ui/react';
import { TNotificationInfo } from '../../../../domains/notification';
import NotificationTile from './notification-tile.widget';

type TNotificationTilesList = {
  notifications: TNotificationInfo[];
};

function NotificationTilesList({ notifications }: TNotificationTilesList) {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(224px, 1fr))"
      gap={8}
      px={6}
      pt={6}
    >
      {notifications?.map((notification) => (
        <NotificationTile key={notification.id} notification={notification} />
      ))}
    </Grid>
  );
}

export default NotificationTilesList;
