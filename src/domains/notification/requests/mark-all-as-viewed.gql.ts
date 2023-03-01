import { gql } from '@apollo/client';

export type TMarkAllAsViewedOutput = {
  markAllNotificationsAsViewed: {
    ok: boolean;
  };
};

const MARK_ALL_AS_VIEWED = gql`
  mutation MarkAllAsViewed {
    markAllNotificationsAsViewed {
      ok
    }
  }
`;

export default MARK_ALL_AS_VIEWED;
