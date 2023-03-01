import { FilterStatuses } from '../../../../consts';
import { TWorkspace } from '../../../../domains/workspaces';
import { Filters } from '../../../../modules';

type TWorkspacesFilters = {
  workspaces: TWorkspace[];
};

function WorkspacesFilters({ workspaces }: TWorkspacesFilters) {
  const workspacesCount = workspaces?.length ?? 0;
  const activeWorkspacesCount =
    workspaces?.filter((workspace) => workspace.active).length ?? 0;

  const filtersAray = [
    {
      title: FilterStatuses.all,
      count: workspacesCount,
    },
    {
      title: FilterStatuses.active,
      count: activeWorkspacesCount,
    },
    {
      title: FilterStatuses.inactive,
      count: workspacesCount - activeWorkspacesCount,
    },
  ];

  return <Filters filters={filtersAray} />;
}

export default WorkspacesFilters;
