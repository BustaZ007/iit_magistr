import { Button, Flex, Hide, Icon, Text } from '@chakra-ui/react';
import moment from 'moment';
import { Plus } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { TActivitiesItem } from '../../domains/activity';
import {
  TProfileAvatarsAndInfoItem,
  useCreateProfileByActivityId,
} from '../../domains/profiles';
import {
  ActivityStatus,
  AnonymousActivityIndicator,
  ProfileImage,
} from '../../elements';
import { getActivityImage } from '../../helpers';
import anonymousImageLight from '../../static/anonymous-light.svg';
import anonymousImageDark from '../../static/anonymous-dark.svg';

type TActivitiesTableItem = {
  activity: TActivitiesItem;
  agentTitle?: string;
  profile?: TProfileAvatarsAndInfoItem;
  borderColor: string;
};

function ActivitiesTableItem({
  activity,
  borderColor,
  agentTitle,
  profile,
}: TActivitiesTableItem) {
  const { t } = useTranslation('pages');
  const { createProfileByActivity, loading } = useCreateProfileByActivityId(
    activity.id
  );

  const activityImage = getActivityImage(activity);

  return (
    <>
      <Flex
        alignItems="center"
        pl="6"
        py="3"
        borderBottom="1px"
        borderColor={borderColor}
      >
        <ProfileImage
          objectFit={activity.bestShotId ? 'cover' : 'contain'}
          size="64px"
          sampleId={activityImage ?? ''}
          fallbackDarkSrc={anonymousImageDark}
          fallbackLightSrc={anonymousImageLight}
        />
      </Flex>

      <Flex
        alignItems="center"
        pl="6"
        py="3"
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Text>{agentTitle}</Text>
      </Flex>

      <Flex
        alignItems="center"
        pl="6"
        py="3"
        borderBottom="1px"
        borderColor={borderColor}
        justify="end"
      >
        {activity.bestShotId && !profile && (
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
      <Flex
        alignItems="center"
        px="6"
        py="3"
        borderBottom="1px"
        borderColor={borderColor}
      >
        <ActivityStatus status={activity.status} />
      </Flex>

      <Flex
        alignItems="center"
        px="6"
        py="3"
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Text noOfLines={1} wordBreak="break-all">
          {moment(activity.creationDate).format('HH:mm · D MMMM')}
        </Text>
      </Flex>
    </>
  );
}

export default ActivitiesTableItem;
