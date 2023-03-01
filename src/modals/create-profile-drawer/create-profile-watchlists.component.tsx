import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, FormControl, Text, useDisclosure } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { TGroup } from '../../domains/group';
import GroupsList from '../groups-list';
import { TInitialValue } from '../../helpers';
import CreateGroupModal from '../create-group-drawer';
import GroupsPreviewRow from '../groups-list/groups-preview-row.component';
import { CreateOrAttachButtons, CustomFormLabel } from '../../elements';

type TCreateProfileWatchlist = {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<TInitialValue>>;
};

function CreateProfileWatchlist({ setFieldValue }: TCreateProfileWatchlist) {
  const { t } = useTranslation('pages');
  const {
    onOpen: onGroupListOpen,
    onClose: onGroupListClose,
    isOpen: isGroupListOpen,
  } = useDisclosure();
  const {
    isOpen: isCreateGroupOpen,
    onOpen: onCreateGroupOpen,
    onClose: onCreateGroupClose,
  } = useDisclosure();
  const [selectedGroups, setSelectedGroups] = useState<TGroup[]>([]);
  const [addedGroups, setAddedGroups] = useState<TGroup[]>([]);

  useEffect(() => {
    setFieldValue(
      'profileGroupsIds',
      addedGroups.map((group) => group.id)
    );
    setSelectedGroups(addedGroups);
  }, [addedGroups]);

  const handleCreateGroup = (group: TGroup) => {
    setAddedGroups((prevState) => [...prevState, group]);
  };

  return (
    <>
      <FormControl display="flex" alignContent="flex-start">
        <Box py={2}>
          <CustomFormLabel label={t('Settings.Groups.SingleWatchlist')} />
        </Box>
        <Box maxW="400px">
          <CreateOrAttachButtons
            onOpen={onGroupListOpen}
            onCreateOpen={onCreateGroupOpen}
            createTitle={t('components:Header.CreateButton.Group')}
          />
          <Box w={400}>
            {addedGroups.slice(0, 5).map((group) => (
              <GroupsPreviewRow
                key={group.id}
                group={group}
                setSelectedGroups={setSelectedGroups}
                setAddedGroups={setAddedGroups}
              />
            ))}
          </Box>
          {addedGroups.length > 5 && (
            <Text pl="2" pt="2" opacity={0.88}>
              {addedGroups.length - 5 === 1
                ? t('Profiles.ProfileCard.Groups.MoreGroupsOne', {
                    count: addedGroups.length - 5,
                  })
                : t('Profiles.ProfileCard.Groups.MoreGroups', {
                    count: addedGroups.length - 5,
                  })}
            </Text>
          )}
        </Box>
      </FormControl>
      {isGroupListOpen && (
        <GroupsList
          isOpen={isGroupListOpen}
          onClose={onGroupListClose}
          selectedGroups={selectedGroups}
          setSelectedGroups={setSelectedGroups}
          title={t('Settings.Groups.AttachMoreTitle')}
          addedGroups={addedGroups}
          setAddedGroups={setAddedGroups}
        />
      )}
      {isCreateGroupOpen && (
        <CreateGroupModal
          isOpen={isCreateGroupOpen}
          onClose={onCreateGroupClose}
          callback={handleCreateGroup}
        />
      )}
    </>
  );
}
export default CreateProfileWatchlist;
