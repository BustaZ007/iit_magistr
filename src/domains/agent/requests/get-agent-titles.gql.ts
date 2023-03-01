import { gql } from '@apollo/client';

type TAgentTitlesItem = {
  id: string;
  title: string;
  camerasIds: string[];
};

type TAgentTitles = {
  agents: {
    collectionItems: TAgentTitlesItem[];
  };
};

const GET_AGENT_TITLES = gql`
  query GetAgentTitles($filter: JSONString, $withArchived: WithArchived) {
    agents(filter: $filter, withArchived: $withArchived) {
      collectionItems {
        id
        title
        camerasIds
      }
    }
  }
`;

export { GET_AGENT_TITLES, type TAgentTitles, type TAgentTitlesItem };
