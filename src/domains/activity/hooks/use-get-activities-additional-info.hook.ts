import { useGetAgentsTitles } from '../../agent';
import { TActivitiesItem } from '../request';

const useGetActivitiesAdditionalInfo = (
  activities: TActivitiesItem[] | undefined
) => {
  const cameraIds = new Set<string>();

  activities?.forEach((activity) => {
    if (activity.cameraId) cameraIds.add(activity.cameraId);
  });
  const { data: agentsInformation, loading: agentsLoading } =
    useGetAgentsTitles({
      cameraIds,
    });

  return {
    agentsInformation,
    loading: agentsLoading,
  };
};

export default useGetActivitiesAdditionalInfo;
