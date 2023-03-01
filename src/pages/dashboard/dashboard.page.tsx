import {
  Box,
  Container,
  SimpleGrid,
  useColorModeValue,
  HStack,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { Activity, BellRinging, Cpu, Users } from "phosphor-react";
import {
  AnalyticsModule,
  GettingStartedModule,
  SplitModule,
  StatusModule,
  TimeModule,
} from "./modules";
import { LinksElement } from "./elements";
import EntityCountBanner from "../../elements/entity-count-banner.element";
import { PATHNAMES } from "../../consts";

export function DashboardPage() {
  const bg = useColorModeValue("gray.100", "transparent");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");
  const activitiesCount = 0;
  const agentsCount = 0;
  const activeAgentsCount = 0;
  const profilesCount = 0;
  const notificationsCount = 0;

  return (
    <Box h="100%" w="100%" overflowY="auto" bg={bg}>
      <Box as="section" py={{ base: "4", md: "8" }}>
        <Container maxW="container.xl">
          <VStack spacing="8" align="stretch">
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 2, xl: 4 }}
              gap={{ base: "4", md: "6" }}
              alignItems="flex-start"
            >
              <EntityCountBanner
                link={PATHNAMES.dashboard}
                count={agentsCount}
                icon={Cpu}
                label="Dashboard.NuitrackAgents"
                tag="Dashboard.TopWidgets.Agents.Stopped"
              />
              <EntityCountBanner
                link={PATHNAMES.dashboard}
                count={activitiesCount}
                icon={Activity}
                label="Dashboard.Activities"
              />
              <EntityCountBanner
                link={PATHNAMES.dashboard}
                count={notificationsCount}
                icon={BellRinging}
                label="Dashboard.Notifications"
              />
              <EntityCountBanner
                link={PATHNAMES.dashboard}
                count={profilesCount}
                icon={Users}
                label="Dashboard.Profiles"
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
              gap={{ base: "5", md: "6" }}
              alignItems="flex-start"
            >
              <SplitModule isLoading={false} isError={false} />
              <StatusModule activeAgentsCount={activeAgentsCount} />
              <GettingStartedModule />
              <AnalyticsModule />
              <LinksElement />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
