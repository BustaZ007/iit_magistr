import { gql } from '@apollo/client';

export type TDashboardInfo = {
  activitiesCount: {
    totalCount: number;
  };
  lastActivity: {
    collectionItems: {
      creationDate: string;
    }[];
  };
  agentsCount: {
    totalCount: number;
  };
  inactiveAgentsCount: {
    totalCount: number;
  };
  profilesCount: {
    totalCount: number;
  };
  activeAgentsCount: {
    totalCount: number;
  };
};

const GET_DASHBOARD_INFO = gql`
  query GetDashboardInfo(
    $endDate: DateTime
    $isnull: Boolean = false
    $filter: JSONString
  ) {
    activitiesCount: activities(filters: { creationDate: { lt: $endDate } }) {
      totalCount
    }
    agentsCount: agents(filter: $filter) {
      totalCount
    }
    inactiveAgentsCount: agents(
      filter: {
        info__status: "inactive"
        info__last_active_time__isnull: $isnull
      }
    ) {
      totalCount
    }
    activeAgentsCount: agents(filter: { info__status: "active" }) {
      totalCount
    }
    profilesCount: profiles {
      totalCount
    }
  }
`;

export default GET_DASHBOARD_INFO;
