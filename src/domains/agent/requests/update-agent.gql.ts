import { gql } from '@apollo/client';

type AgentUpdateInput = {
  title: string;
};

type TUpdateAgentResult = {
  updateAgent: {
    ok: boolean;
  };
};

const UPDATE_AGENT = gql`
  mutation ChangeAgent($agentData: AgentUpdateInput!, $agentId: ID!) {
    updateAgent(agentData: $agentData, agentId: $agentId) {
      ok
      agent {
        id
        token
        title
      }
    }
  }
`;

export { UPDATE_AGENT, type TUpdateAgentResult, type AgentUpdateInput };
