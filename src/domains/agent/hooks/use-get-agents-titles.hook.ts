import { useCustomQuery } from '@3divi/shared-components';
import { WithArchived } from '../../../consts';
import { TAgentTitles, GET_AGENT_TITLES } from '../requests';

type TUseGetAgentsTitles = {
  cameraIds: Set<string>;
};

function useGetAgentsTitles({ cameraIds }: TUseGetAgentsTitles) {
  const { data, error, loading } = useCustomQuery<TAgentTitles>(
    GET_AGENT_TITLES,
    {
      variables: {
        filter: JSON.stringify({ cameras__in: Array.from(cameraIds) }),
        withArchived: WithArchived.ALL,
      },
      fetchPolicy: 'cache-and-network',
      isPolling: true,
    }
  );

  return { data, error, loading };
}

export { useGetAgentsTitles };
