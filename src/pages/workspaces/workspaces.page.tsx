import { Box, Progress } from '@chakra-ui/react';
import { useCustomQuery } from '@3divi/shared-components';
import { WorkspacesFilters, WorkspacesContent } from './widgets';
import {
  GET_WORKSPACES,
  TWorkspacesCollection,
} from '../../domains/workspaces';

function WorkspacesPage() {
  const { data, loading, error } = useCustomQuery<TWorkspacesCollection>(
    GET_WORKSPACES,
    {
      fetchPolicy: 'cache-and-network',
    }
  );

  if (error && !data) return null;

  const workspaces = data?.workspaces ?? [];

  return (
    <Box h="100%" w="100%" overflowY="auto">
      <WorkspacesFilters workspaces={workspaces} />
      {loading && <Progress size="xs" isIndeterminate />}
      <Box py="6">
        <WorkspacesContent workspaces={workspaces} />
      </Box>
    </Box>
  );
}

export default WorkspacesPage;
