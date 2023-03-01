import moment from 'moment';
import { Button, Flex, Hide, Icon, Text } from '@chakra-ui/react';
import { Plus } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { TActivitiesItem } from '../../../domains/activity';
import { useCreateProfileByActivityId } from '../../../domains/profiles';
import { ActivityStatus, AnonymousActivityIndicator } from '../../../elements';
import ProfileImage from '../../../elements/profile-image.element';
import { getActivityImage } from '../../../helpers';
import anonymousImageLight from '../../../static/anonymous-light.svg';
import anonymousImageDark from '../../../static/anonymous-dark.svg';
import { TableRow } from '../../../elements/table';

type TActivitiesTableRow = {
  activity: TActivitiesItem;
  agentTitle?: string;
};

function ActivitiesTableRow({ activity, agentTitle }: TActivitiesTableRow) {
  const { t } = useTranslation('pages');
  const { createProfileByActivity, loading } = useCreateProfileByActivityId(
    activity.id
  );
  const activityImage = getActivityImage(activity);

  return (
    <TableRow>
      <ProfileImage
        objectFit={activity.bestShotId ? 'cover' : 'contain'}
        size="64px"
        sampleId={activityImage ?? ''}
        fallbackDarkSrc={anonymousImageDark}
        fallbackLightSrc={anonymousImageLight}
      />
      <Text noOfLines={1} wordBreak="break-all">
        {agentTitle}
      </Text>
      <Flex alignItems="center" justifyContent="flex-end" w="full">
        {activity.bestShotId && !activity.profileId && (
          <Button
            size="sm"
            disabled={loading}
            onClick={createProfileByActivity}
            pl="2"
            leftIcon={<Icon as={Plus} w="5" h="5" />}
            fontWeight="normal"
            colorScheme="blue"
          >
            <Hide below="lg">{t('Activities.Buttons.CreateProfile')}</Hide>
          </Button>
        )}
        {!activityImage && <AnonymousActivityIndicator />}
      </Flex>
      <ActivityStatus status={activity.status} />
      <Text noOfLines={1} wordBreak="break-all">
        {moment(activity.creationDate).format('HH:mm · D MMMM')}
      </Text>
    </TableRow>
  );
}

export default ActivitiesTableRow;
