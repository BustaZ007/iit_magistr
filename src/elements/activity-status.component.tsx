import { As, Icon, Tooltip } from '@chakra-ui/react';
import { CheckCircle, Hourglass, XCircle } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type TActivityStatus = {
  status: string;
};

const ActivitiesStatusValues: {
  [key: string]: { color: string; icon: As<any> };
} = {
  FINALIZED: { color: 'green.400', icon: CheckCircle },
  PROGRESS: { color: 'yellow.400', icon: Hourglass },
  FAILED: { color: 'red.400', icon: XCircle },
};

function ActivityStatus({ status }: TActivityStatus) {
  const { t } = useTranslation('pages');

  return (
    <Tooltip label={t(`Activities.Status.${status}`)}>
      <Icon
        as={ActivitiesStatusValues[status].icon}
        w="6"
        h="6"
        color={ActivitiesStatusValues[status].color}
      />
    </Tooltip>
  );
}

export default ActivityStatus;
