import { useSearchParams } from 'react-router-dom';
import { FiltersSearchParamsNames, FilterStatuses } from '../../../consts';
import { TWorkspace } from '../requests';

function useFiltredWorkspaces(workspaces: TWorkspace[]) {
  const [searchParams] = useSearchParams();
  const title = searchParams.get(FiltersSearchParamsNames.AGENT_STATUS);

  if (!title)
    return { title: FilterStatuses.all, filteredWorkspaces: workspaces };

  const filteredWorkspaces = workspaces.filter(
    (workspace) => workspace.active === (title === FilterStatuses.active)
  );

  return { title, filteredWorkspaces };
}

export { useFiltredWorkspaces };
