import { TActivitiesItem } from '../domains/activity';

const getActivityImage = (activity: TActivitiesItem) => {
  if (activity.bestShotId) return activity.bestShotId;
  const processWithBestShot = activity.data?.processes.find(
    (process) => !!process.$best_shot
  );
  return processWithBestShot?.$best_shot?.id;
};

export default getActivityImage;
