import { Box } from '@chakra-ui/react';
import { TActivitiesItem } from '../../../domains/activity';
import { TAgentTitles } from '../../../domains/agent';
import ActivitiesTableRow from './activities-table-row.component';

type TActivitiesTableRowsCollection = {
  activities: TActivitiesItem[] | undefined;
  agentsInformation: TAgentTitles | undefined;
};

function ActivitiesTableRowsCollection({
  activities,
  agentsInformation,
}: TActivitiesTableRowsCollection) {
  return (
    <Box display="contents">
      {activities?.map((activity) => (
        <ActivitiesTableRow
          key={activity.id}
          activity={activity}
          agentTitle={
            agentsInformation?.agents.collectionItems.find((agent) =>
              agent.camerasIds.includes(activity.cameraId)
            )?.title
          }
        />
      ))}
    </Box>
  );
}

export default ActivitiesTableRowsCollection;
