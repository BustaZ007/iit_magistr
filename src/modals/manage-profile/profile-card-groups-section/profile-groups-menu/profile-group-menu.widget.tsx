import { SearchInput } from '@3divi/shared-components';
import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { debounce } from 'lodash';
import { Plus } from 'phosphor-react';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TGroup } from '../../../../domains/group';
import { ColorRound } from '../../../../elements';
import CreateGroupModal from '../../../create-group-drawer';

type TPersonsGroupMenu = {
  handleAddGroup: (group: TGroup) => void;
  menuGroups: TGroup[];
  loading: boolean;
};

function ProfileGroupsMenu({
  handleAddGroup,
  menuGroups,
  loading,
}: TPersonsGroupMenu) {
  const { t } = useTranslation('pages');
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [searchText, setSearchText] = useState('');
  const [filteredGroups, setFilteredGroups] = useState<TGroup[]>(menuGroups);

  const debouncedSetFilteredGroups = useMemo(
    () =>
      debounce(
        () =>
          setFilteredGroups(
            menuGroups.filter((group) => group.title.includes(searchText))
          ),
        500
      ),
    [searchText, menuGroups]
  );

  useEffect(() => {
    debouncedSetFilteredGroups();
    if (!searchText) debouncedSetFilteredGroups.flush();
    return () => debouncedSetFilteredGroups.cancel();
  }, [searchText, menuGroups, debouncedSetFilteredGroups]);

  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton
          as={IconButton}
          size="sm"
          icon={<Plus weight="bold" />}
          aria-label="add-group"
          fontSize="lg"
          variant="solid"
          colorScheme="blue"
          borderRadius="md"
        />
        <MenuList maxH={80} overflowY="auto" w={64}>
          <SearchInput
            setSearchText={setSearchText}
            searchText={searchText}
            placeholder={t('Profiles.ProfileCard.Groups.GroupName')}
          />
          {menuGroups.length === 0 && (
            <Text opacity={0.48} pl={4} pr={4} py={2} fontSize="md" w="full">
              {t('Profiles.ProfileCard.Groups.EmptyAdd')}
            </Text>
          )}
          {menuGroups.length !== 0 && filteredGroups.length === 0 && (
            <Text opacity={0.48} pl={4} pr={4} py={2} fontSize="md" w="full">
              {t('Profiles.ProfileCard.Groups.NotFound')}
            </Text>
          )}
          {filteredGroups.map((group) => (
            <MenuItem
              isDisabled={loading}
              key={group.id}
              value={group.id}
              onClick={() => handleAddGroup(group)}
              p={0}
              pl={4}
            >
              <HStack spacing={3} w="full" py={2}>
                <ColorRound color={group.info.color} />
                <Text maxW={40}>{group.title}</Text>
              </HStack>
            </MenuItem>
          ))}
          <MenuItem
            isDisabled={loading}
            icon={<Plus size={16} weight="bold" />}
            pl={3.5}
            onClick={onOpen}
            iconSpacing={2.5}
          >
            {t('Profiles.ProfileCard.Groups.NewGroup')}
          </MenuItem>
        </MenuList>
      </Menu>
      {isOpen && (
        <CreateGroupModal
          isOpen={isOpen}
          onClose={onClose}
          callback={handleAddGroup}
        />
      )}
    </>
  );
}

export default ProfileGroupsMenu;
