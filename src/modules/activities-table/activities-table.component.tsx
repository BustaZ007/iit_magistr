import { Grid, useColorModeValue } from '@chakra-ui/react';
import { TActivitiesItem } from '../../domains/activity';
import { useGetAgentsTitles } from '../../domains/agent';
import { useGetProfileAvatarAndInfo } from '../../domains/profiles';
import { TableHeader } from '../../elements/table';
import ActivitiesTableItem from './activities-table-item.component';

type TActivitiesTable = {
  activities: TActivitiesItem[];
};

function ActivitiesTable({ activities }: TActivitiesTable) {
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const profileIds = new Set<string>();
  const cameraIds = new Set<string>();

  activities.forEach((activity) => {
    if (activity.profileId) profileIds.add(activity.profileId);
    if (activity.cameraId) cameraIds.add(activity.cameraId);
  });

  const { data: agentsInformation, error: agentsError } = useGetAgentsTitles({
    cameraIds,
  });

  const { data: profilesInformation, error: profilesError } =
    useGetProfileAvatarAndInfo({ profileIds });

  if (agentsError || profilesError) {
    return null;
  }

  return (
    <Grid
      templateColumns="max-content minmax(170px, 1fr) max-content max-content auto"
      pb={6}
    >
      <TableHeader
        titles={[
          'Activities.Table.Photos',
          'common:Agent',
          '',
          '',
          'Activities.Table.Date',
        ]}
      />
      {activities.map((activity) => (
        <ActivitiesTableItem
          key={activity.id}
          borderColor={borderColor}
          activity={activity}
          agentTitle={
            agentsInformation?.agents.collectionItems.find((agent) =>
              agent.camerasIds.includes(activity.cameraId)
            )?.title
          }
          profile={profilesInformation?.profiles.collectionItems.find(
            (profile) => profile.id === activity.profileId
          )}
        />
      ))}
    </Grid>
  );
}

export default ActivitiesTable;
