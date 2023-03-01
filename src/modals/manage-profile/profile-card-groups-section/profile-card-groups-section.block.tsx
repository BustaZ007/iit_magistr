import { useCustomQuery } from '@3divi/shared-components';
import { Box, Divider, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { GET_GROUPS, TGroup, TGroupsList } from '../../../domains/group';
import ProfileCardGroupsHeader from './profile-card-groups-header.widget';
import ProfileCardGroupsList from './profile-card-groups-list.block';

type TProfileCardGroupsSection = {
  profileGroups: TGroup[];
  loading: boolean;
  id: string;
};

function ProfileCardGroupsSection({
  profileGroups,
  loading,
  id,
}: TProfileCardGroupsSection) {
  const { t } = useTranslation('pages');
  const { data } = useCustomQuery<TGroupsList>(GET_GROUPS, {
    fetchPolicy: 'cache-and-network',
    variables: { withItems: true },
  });

  const groups = data?.items.collectionItems ?? [];

  const menuGroups = groups.filter(
    (group) =>
      !profileGroups.some((profileGroup) => group.id === profileGroup.id)
  );

  return (
    <>
      <ProfileCardGroupsHeader
        id={id}
        profileGroups={profileGroups.map((group) => group.id)}
        menuGroups={menuGroups}
      />
      {profileGroups.length !== 0 || loading ? (
        <ProfileCardGroupsList profileGroups={profileGroups} id={id} />
      ) : (
        <Box textAlign="center" p={4}>
          <Text wordBreak="break-word" opacity={0.48} fontSize="sm">
            {t('Profiles.ProfileCard.Groups.NoGroups')}
          </Text>
        </Box>
      )}
      <Divider />
    </>
  );
}

export default ProfileCardGroupsSection;
