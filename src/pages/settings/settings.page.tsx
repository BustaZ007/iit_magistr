import { Box, Flex } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { AgentsSettingsAside } from './agents-settings';
import { EndpointsSettingsAside } from './endpoints-settings';
import { GeneralSettingsAside } from './general-settings';
import GroupsSettingsAside from './groups-settings/groups-settings-aside.component';
import { IntegrationSettingsAside } from './integration-settings/integration-settings-aside.component';
import { FieldsSettingsAside } from './fields-settings';
import SettingsMenu from './settings-menu.component';
import { TriggersSettingsAside } from './triggers-settings';

type TAsideElements = {
  [x: string]: JSX.Element;
};

const AsideElements: TAsideElements = {
  '/settings/general': <GeneralSettingsAside />,
  '/settings/groups': <GroupsSettingsAside />,
  '/settings/agents': <AgentsSettingsAside />,
  '/settings/triggers': <TriggersSettingsAside />,
  '/settings/endpoints': <EndpointsSettingsAside />,
  '/settings/fields': <FieldsSettingsAside />,
  '/settings/integration': <IntegrationSettingsAside />,
};

function SettingsPage() {
  const { pathname } = useLocation();

  return (
    <>
      <SettingsMenu />
      <Box h="100%" w="100%" overflowY="auto">
        <Flex flexDirection="column" alignItems="stretch" minW="2xl">
          <Outlet />
        </Flex>
      </Box>
      {AsideElements[pathname]}
    </>
  );
}

export default SettingsPage;
