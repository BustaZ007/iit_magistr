import { useLocation } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

enum pageName {
  'workspaces' = 'Workspaces.Title',
  'agents' = 'Agents.Title',
  'notifications' = 'Notifications.Title',
  'activities' = 'Activities.Title',
  'persons' = 'Profiles.Title',
  'billing' = 'Billing.Title',
  'settings' = 'Settings.Title',
  'settingsgroups' = 'Settings.Groups.Title',
  'settingsagents' = 'Agents.Title',
  'settingsgeneral' = 'Settings.General.Title',
  'settingstriggers' = 'Settings.Triggers.Title',
  'settingsendpoints' = 'Settings.Endpoints.Title',
  'settingsfields' = 'Settings.Fields.Title',
  'settingsintegration' = 'Settings.Integration.Title',
}

function TitleElement() {
  const { pathname } = useLocation();
  const { t } = useTranslation('pages');

  const path = pathname.replace(/\//g, '');

  return (
    <Heading fontSize="lg" fontWeight="semibold">
      {path === ''
        ? t('Dashboard.Title')
        : t(pageName[path as keyof typeof pageName]) ?? ''}
    </Heading>
  );
}

export default TitleElement;
