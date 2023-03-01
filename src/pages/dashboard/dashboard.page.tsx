import {
  Box,
  Container,
  SimpleGrid,
  useColorModeValue,
  HStack,
  Divider,
  VStack,
} from '@chakra-ui/react';
import {
  formatNumber,
  isOnPremise,
  useCustomQuery,
} from '@3divi/shared-components';
import { Activity, BellRinging, Cpu, Users } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import {
  AnalyticsModule,
  GettingStartedModule,
  SplitModule,
  StatusModule,
  TimeModule,
} from './modules';
import { LinksElement } from './elements';
import { GET_DASHBOARD_INFO, TDashboardInfo } from './requests';
import EntityCountBanner from '../../elements/entity-count-banner.element';
import { PATHNAMES } from '../../consts';
import { useGetUnreadNotificationsCount } from '../../domains/endpoints';

export function DashboardPage() {
  const { t } = useTranslation('pages');
  const bg = useColorModeValue('gray.100', 'transparent');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const { notificationsCount } = useGetUnreadNotificationsCount('cache-only');
  const { data, loading, error } = useCustomQuery<TDashboardInfo>(
    GET_DASHBOARD_INFO,
    {
      isPolling: true,
    }
  );
  const activitiesCount = data?.activitiesCount?.totalCount ?? 0;
  const agentsCount = data?.agentsCount?.totalCount ?? 0;
  const inactiveAgentsCount = data?.inactiveAgentsCount?.totalCount ?? 0;
  const activeAgentsCount = data?.activeAgentsCount?.totalCount ?? 0;
  const profilesCount = data?.profilesCount?.totalCount ?? 0;

  return (
    <Box h="100%" w="100%" overflowY="auto" bg={bg}>
      <Box as="section" py={{ base: '4', md: '8' }}>
        <Container maxW="container.xl">
          <VStack spacing="8" align="stretch">
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 2, xl: 4 }}
              gap={{ base: '4', md: '6' }}
              alignItems="flex-start"
            >
              <EntityCountBanner
                link={PATHNAMES.settings_agents}
                count={agentsCount}
                icon={Cpu}
                label={t('Dashboard.NuitrackAgents')}
                tag={
                  inactiveAgentsCount
                    ? `${formatNumber(inactiveAgentsCount)} ${t(
                        'Dashboard.TopWidgets.Agents.Stopped'
                      )}`
                    : undefined
                }
              />
              <EntityCountBanner
                link={PATHNAMES.activities}
                count={activitiesCount}
                icon={Activity}
                label={t('Dashboard.Activities')}
              />
              <EntityCountBanner
                link={PATHNAMES.notifications}
                count={notificationsCount}
                icon={BellRinging}
                label={t('Dashboard.Notifications')}
              />
              <EntityCountBanner
                link={PATHNAMES.persons}
                count={profilesCount}
                icon={Users}
                label={t('Dashboard.Profiles')}
              />
            </SimpleGrid>
            <HStack spacing="0">
              <Divider />
              <Box
                borderRadius="full"
                flexShrink={0}
                border="1px"
                borderColor={borderColor}
              >
                <TimeModule />
              </Box>
              <Divider />
            </HStack>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gap={{ base: '5', md: '6' }}
              alignItems="flex-start"
            >
              {(loading || !!error) && !data && (
                <SplitModule isLoading={loading} isError={!!error} />
              )}
              {!!data &&
                (activitiesCount ? (
                  <StatusModule
                    agentsCount={agentsCount}
                    activeAgentsCount={activeAgentsCount}
                  />
                ) : (
                  <GettingStartedModule />
                ))}
              {!isOnPremise() && <AnalyticsModule />}
              <LinksElement />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
