/* eslint-disable camelcase */
import { gql } from '@apollo/client';

export type TWorkspaceConfig = {
  activity_score_threshold: number;
  notification_score_threshold: number;
};

type TAccesses = {
  token: string;
};

export type TWorkspace = {
  id: string;
  title: string;
  active: boolean;
  config: TWorkspaceConfig;
  accesses: TAccesses[];
};

export type TWorkspacesCollection = {
  workspaces: TWorkspace[];
};
const GET_WORKSPACES = gql`
  query GetWorkspaces {
    workspaces {
      id
      active
      title
      agentsCount
      config
      accesses {
        token
      }
    }
  }
`;

export { GET_WORKSPACES };
