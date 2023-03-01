import { gql } from '@apollo/client';

const GET_AGENTS = gql`
  query GetAgents(
    $offset: Int
    $limit: Int
    $filter: JSONString
    $withArchived: WithArchived
    $order: [String]
    $withItems: Boolean!
  ) {
    items: agents(
      offset: $offset
      limit: $limit
      filter: $filter
      order: $order
      withArchived: $withArchived
    ) {
      totalCount
      collectionItems @include(if: $withItems) {
        id
        title
        agentStatus
        agentLastActiveTime
        lastModified
        creationDate
      }
    }
  }
`;

export { GET_AGENTS };
