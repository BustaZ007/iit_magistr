import { Text, Box, Stack, ListItem, OrderedList } from "@chakra-ui/react";
import { ArrowBendLeftDown } from "phosphor-react";
import { DashboardSectionBlock } from "../../blocks";
import { DownloadButtonsElement } from "../../../../elements";

export function GettingStartedModule() {
  return (
    <DashboardSectionBlock
      icon={ArrowBendLeftDown}
      title="Dashboard.GettingStarted"
    >
      <OrderedList spacing={1}>
        <ListItem>
          <Stack spacing={1} w="100%">
            <Text>Dashboard.DownloadNuitrackAgent</Text>
            <Box py="2">
              <DownloadButtonsElement />
            </Box>
          </Stack>
        </ListItem>
        <ListItem>Dashboard.StartAgentAndAcivation</ListItem>
        <ListItem>Dashboard.CheckAgentSendData</ListItem>
      </OrderedList>

      <Text>Dashboard.AgentInfo</Text>
    </DashboardSectionBlock>
  );
}
