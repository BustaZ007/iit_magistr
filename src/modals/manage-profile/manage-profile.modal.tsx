import { useTranslation } from 'react-i18next';
import { DrawerBlock } from '../../blocks';
import { useDeleteProfiles, useGetOnePerson } from '../../domains/profiles';
import ProfileActivitiesTab from './profile-activities-tab';
import { ProfileCardGroupsSection } from './profile-card-groups-section';
import ProfileInfoSection from './profile-card-info-section';

type TProfileCard = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

function ManageProfileModal({
  isOpen,
  onClose,
  id,
}: TProfileCard): JSX.Element {
  const { t } = useTranslation('components');
  const { profileFullInfo, profileGroups, loading } = useGetOnePerson(id);
  const { deleteProfiles, loading: deleteLoading } = useDeleteProfiles(
    t('Modal.DeleteProfile.ErrorDelete'),
    t('Modal.DeleteProfile.SuccessDelete')
  );

  const handleDeletePerson = () => {
    deleteProfiles([id]);
  };

  return (
    <DrawerBlock
      isOpen={isOpen}
      onClose={onClose}
      id={id}
      activitiesCount={profileFullInfo?.activitiesCount}
      creationDate={profileFullInfo?.creationDate}
      lastModify={profileFullInfo?.lastModified}
      deleteEntity={{
        deleteAction: handleDeletePerson,
        deleteBodyText: t('Modal.DeleteProfile.Message'),
        deleteHeaderText: t('Modal.DeleteProfile.Title'),
        deleteLoading,
        buttonId: 'delete-profile-button',
      }}
      activitiesComponent={<ProfileActivitiesTab profileId={id} />}
      rightSideComponent={
        <ProfileCardGroupsSection
          profileGroups={profileGroups}
          loading={loading}
          id={id}
        />
      }
      leftSideComponent={
        profileFullInfo?.info && (
          <ProfileInfoSection
            avatar={profileFullInfo.avatar}
            info={profileFullInfo.info}
            profileId={id}
          />
        )
      }
    />
  );
}

export default ManageProfileModal;
