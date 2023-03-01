import { gql } from '@apollo/client';
import { TWorkspace } from './get-workspaces.gql';

export type TUpdateWorkspaceConfigOutput = {
  updateWorkspaceConfig: {
    ok: boolean;
    workspace: TWorkspace;
  };
};

const UPDATE_WORKSPACE_CONFIG = gql`
  mutation UpdateWorkspaceConfig(
    $activityThreshold: Float
    $notificationThreshold: Float
  ) {
    updateWorkspaceConfig(
      workspaceConfig: {
        activityScoreThreshold: $activityThreshold
        notificationScoreThreshold: $notificationThreshold
      }
    ) {
      ok
      workspace {
        id
        config
      }
    }
  }
`;

export { UPDATE_WORKSPACE_CONFIG };
