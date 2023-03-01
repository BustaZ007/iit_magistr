import { gql } from '@apollo/client';

type TAgent = {
  id: string;
  title: string;
  lastModified: string;
  creationDate: string;
  agentStatus: string;
  agentLastActiveTime: string;
};

type TGetAgentByIdResult = {
  agents: {
    collectionItems: TAgent[];
  };
};

const GET_AGENT_BY_ID = gql`
  query GetAgentById($id: ID!) {
    agents(ids: [$id]) {
      collectionItems {
        id
        title
        lastModified
        creationDate
        agentStatus
        agentLastActiveTime
      }
    }
  }
`;

export { GET_AGENT_BY_ID, type TGetAgentByIdResult, type TAgent };
