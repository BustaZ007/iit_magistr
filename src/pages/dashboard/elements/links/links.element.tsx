import { BracketsCurly, Files, ImageSquare, Link } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import {
  useCustomQuery,
  isOnPremise,
  workspaceVar,
  workspaceVar as currentWorkspace,
} from '@3divi/shared-components';
import { SectionButtonBlock, DashboardSectionBlock } from '../../blocks';

import { LinksOnExternalSources } from '../../../../consts';
import {
  GET_WORKSPACES,
  TWorkspacesCollection,
} from '../../../../domains/workspaces';
import { CopyToken } from './copy-token.element';

export function LinksElement() {
  const { t } = useTranslation('pages');
  const { data } = useCustomQuery<TWorkspacesCollection>(GET_WORKSPACES, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only',
  });

  const authorizeToken =
    data?.workspaces.find((workspace) => workspace.id === workspaceVar())
      ?.accesses[0].token ?? '';

  return (
    <DashboardSectionBlock icon={Link} title={t('Dashboard.Resources')}>
      {!isOnPremise() && (
        <SectionButtonBlock
          id="docs-link-dashboard"
          icon={Files}
          title={t('Dashboard.TopWidgets.Docs')}
          subtitle={t('Dashboard.CompleteGuide')}
          url={LinksOnExternalSources.DOCUMENTATION}
        />
      )}

      {authorizeToken && <CopyToken authorizeToken={authorizeToken} />}

      <SectionButtonBlock
        id="api-link-dashboard"
        icon={BracketsCurly}
        title={t('Dashboard.TopWidgets.PlatformApi')}
        subtitle={t('Dashboard.Widgets.PlatformAPI.Description')}
        url={`${LinksOnExternalSources.PLATFORM_API}${currentWorkspace()}`}
      />

      <SectionButtonBlock
        id="image-api-link-dashboard"
        icon={ImageSquare}
        title={t('Dashboard.TopWidgets.ImageApi')}
        subtitle={t('Dashboard.Widgets.ImageAPI.Description')}
        url={LinksOnExternalSources.IMAGE_API}
      />
    </DashboardSectionBlock>
  );
}
