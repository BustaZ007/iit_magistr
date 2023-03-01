import { useCustomQuery } from '@3divi/shared-components';
import { GET_AGENT_BY_ID, TAgent, TGetAgentByIdResult } from '../requests';

const useGetAgentById = (id: string) => {
  const { data, loading } = useCustomQuery<TGetAgentByIdResult>(
    GET_AGENT_BY_ID,
    {
      variables: { id },
    }
  );

  const agent = data?.agents.collectionItems[0] ?? ({} as TAgent);

  return { agent, loading };
};

export { useGetAgentById };
