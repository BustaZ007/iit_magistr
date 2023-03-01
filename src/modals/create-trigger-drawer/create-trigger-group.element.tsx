import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, FormControl, useDisclosure } from '@chakra-ui/react';
import { TGroup } from '../../domains/group';
import GroupsList from '../groups-list';
import GroupsPreviewRow from '../groups-list/groups-preview-row.component';
import CreateGroupModal from '../create-group-drawer';
import { CreateOrAttachButtons, CustomFormLabel } from '../../elements';

type TCreateTriggerGroupSelect = {
  handleChange: (id: string) => void;
};

function CreateTriggerGroup({ handleChange }: TCreateTriggerGroupSelect) {
  const { t } = useTranslation('pages');
  const { onOpen, onClose, isOpen } = useDisclosure();
  const {
    onOpen: onGroupOpen,
    onClose: onGroupClose,
    isOpen: isGroupOpen,
  } = useDisclosure();
  // Стэйт для групп которые выбрали в списке
  const [selectedGroups, setSelectedGroups] = useState<TGroup[]>([]);
  // Стэйт для групп, которые окончательно было выбраны после нажатия кнопки Add
  const [addedGroups, setAddedGroups] = useState<TGroup[]>([]);

  useEffect(() => {
    if (addedGroups[0]) {
      handleChange(addedGroups[0].id);
      setSelectedGroups(addedGroups);
    }
  }, [addedGroups]);

  const handleCreateGroup = (group: TGroup) => {
    setAddedGroups([group]);
  };

  return (
    <Box w="full">
      <FormControl display="flex" alignContent="flex-start">
        <Box py={2}>
          <CustomFormLabel label={t('Settings.Groups.SingleWatchlist')} />
        </Box>

        <Box w={400}>
          <CreateOrAttachButtons
            onOpen={onOpen}
            onCreateOpen={onGroupOpen}
            createTitle={t('components:Header.CreateButton.Group')}
          />
          {addedGroups[0] && (
            <GroupsPreviewRow
              group={addedGroups[0]}
              setSelectedGroups={setSelectedGroups}
              setAddedGroups={setAddedGroups}
            />
          )}
        </Box>
      </FormControl>
      <GroupsList
        isOpen={isOpen}
        onClose={onClose}
        selectedGroups={selectedGroups}
        setSelectedGroups={setSelectedGroups}
        addedGroups={addedGroups}
        setAddedGroups={setAddedGroups}
        shouldSelectSingleItem
        title={t('Settings.Groups.AttachOneTitle')}
      />
      {isGroupOpen && (
        <CreateGroupModal
          isOpen={isGroupOpen}
          onClose={onGroupClose}
          callback={handleCreateGroup}
        />
      )}
    </Box>
  );
}
export default CreateTriggerGroup;
