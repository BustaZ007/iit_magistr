import { Heading, HStack, Icon, Spacer } from '@chakra-ui/react';
import { UserList } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { TGroup } from '../../../domains/group';
import { useUpdateProfile } from '../../../domains/profiles';

import ProfileGroupsMenu from './profile-groups-menu';

type TProfileCardGroupsHeader = {
  profileGroups: string[];
  id: string;
  menuGroups: TGroup[];
};

function ProfileCardGroupsHeader({
  id,
  profileGroups,
  menuGroups,
}: TProfileCardGroupsHeader) {
  const { t } = useTranslation('pages');
  const { updateProfile, loading } = useUpdateProfile(
    t('Profiles.ProfileCard.Groups.SuccessAdd'),
    t('Profiles.ProfileCard.Groups.ErrorAdd'),
    t('common:Adding')
  );

  const handleAddGroup = (group: TGroup) => {
    updateProfile(id, { profileGroupIds: [...profileGroups, group.id] });
  };

  return (
    <HStack spacing={3} w="full" py={2} px={6}>
      <Icon as={UserList} w="6" h="6" />
      <Heading
        fontSize="md"
        fontWeight="medium"
        noOfLines={1}
        wordBreak="break-all"
        py={1}
      >
        {t('Profiles.ProfileCard.Groups.Title')}
      </Heading>
      <Spacer />
      <ProfileGroupsMenu
        handleAddGroup={handleAddGroup}
        menuGroups={menuGroups}
        loading={loading}
      />
    </HStack>
  );
}

export default ProfileCardGroupsHeader;
