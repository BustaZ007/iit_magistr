import { dev, workspaceVar } from '@3divi/shared-components';
import { useReactiveVar, useApolloClient } from '@apollo/client';
import Cookies from 'js-cookie';

type TUseWorkspace = {
  isWorkspace: boolean;
  setWorkspace: (id: string) => void;
  resetWorkspace: () => void;
};

function useWorkspace(): TUseWorkspace {
  const workspace = useReactiveVar(workspaceVar);
  const client = useApolloClient();

  const isWorkspace = !!workspace;

  const setWorkspace = (id: string): void => {
    Cookies.set('workspace', id);
    client
      .clearStore()
      .catch((setWorkspaceError) => dev.log(setWorkspaceError));
    workspaceVar(id);
  };

  const resetWorkspace = (): void => {
    Cookies.remove('workspace');
    client
      .clearStore()
      .catch((resetWorkspaceError) => dev.log(resetWorkspaceError));
    workspaceVar('');
  };

  return {
    isWorkspace,
    setWorkspace,
    resetWorkspace,
  };
}

export { useWorkspace };
