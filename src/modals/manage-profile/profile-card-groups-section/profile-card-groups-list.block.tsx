import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TGroup } from '../../../domains/group';
import { useUpdateProfile } from '../../../domains/profiles';
import ProfileCardGroupsItem from './profile-card-groups-item.widget';

type TProfileCardGroupsList = {
  profileGroups: TGroup[];
  id: string;
};

function ProfileCardGroupsList({ profileGroups, id }: TProfileCardGroupsList) {
  const { t } = useTranslation('pages');
  const { updateProfile, loading } = useUpdateProfile(
    t('Profiles.ProfileCard.Groups.SuccessRemove'),
    t('Profiles.ProfileCard.Groups.ErrorRemove'),
    t('common:Removing')
  );

  const handleRemoveGroup = (groupId: string) => {
    updateProfile(id, {
      profileGroupIds: profileGroups
        .map((group) => group.id)
        .filter((group) => group !== groupId),
    });
  };
  return (
    <Box pb={1} px={6} overflowY="auto">
      {profileGroups.map((group) => (
        <ProfileCardGroupsItem
          key={group.id}
          groupId={group.id}
          groupTitle={group.title}
          groupColor={group.info.color}
          handleRemoveGroup={handleRemoveGroup}
          loading={loading}
        />
      ))}
    </Box>
  );
}

export default ProfileCardGroupsList;
