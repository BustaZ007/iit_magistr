import { gql } from '@apollo/client';

const DELETE_AGENT = gql`
  mutation DeleteAgent($agentIds: [ID!]) {
    deleteAgent(agentIds: $agentIds) {
      ok
    }
  }
`;

export { DELETE_AGENT };
