import { RadioGroup, Text, VStack } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { PaginationLimits } from '../../consts';
import { GET_GROUPS, TGroup } from '../../domains/group';
import { CreateEntityButton, EntityListDrawer } from '../../elements';
import { useGetPaginatedItems } from '../../hooks';
import GroupsRow from './groups-row.component';

type TGroupsList = {
  isOpen: boolean;
  onClose: () => void;
  selectedGroups: TGroup[];
  setSelectedGroups: Dispatch<SetStateAction<TGroup[]>>;
  addedGroups: TGroup[];
  setAddedGroups: Dispatch<SetStateAction<TGroup[]>>;
  title: string;
  shouldSelectSingleItem?: boolean;
};

function GroupsList({
  isOpen,
  onClose,
  selectedGroups,
  setSelectedGroups,
  shouldSelectSingleItem,
  title,
  addedGroups,
  setAddedGroups,
}: TGroupsList) {
  const { t } = useTranslation('pages');
  const {
    items: groups,
    pagination,
    totalCount,
    loading,
  } = useGetPaginatedItems<TGroup>(GET_GROUPS, {
    limit: PaginationLimits.GROUPS,
    filter: '{}',
    order: null,
    useUrl: false,
  });

  return (
    <EntityListDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      emptyListElement={
        <VStack>
          <Text
            opacity={0.48}
            pl={4}
            pr={4}
            py={2}
            fontSize="md"
            w="full"
            textAlign="center"
          >
            {t('Settings.Groups.NoItems')}
          </Text>
          <CreateEntityButton
            text={t('components:Header.CreateButton.Group')}
            entityTitle="group"
          />
        </VStack>
      }
      templateColumns="max-content minmax(150px, 300px) minmax(85px, 1fr)"
      allItemsSide={
        shouldSelectSingleItem ? (
          <RadioGroup value={selectedGroups[0]?.id} display="contents">
            {groups?.map((group) => (
              <GroupsRow
                key={group.id}
                group={group}
                isChecked={selectedGroups.some((item) => item.id === group.id)}
                shouldSelectSingleItem={shouldSelectSingleItem}
                setSelectedItems={setSelectedGroups}
              />
            ))}
          </RadioGroup>
        ) : (
          groups?.map((group) => (
            <GroupsRow
              key={group.id}
              group={group}
              isChecked={selectedGroups.some((item) => item.id === group.id)}
              shouldSelectSingleItem={shouldSelectSingleItem}
              setSelectedItems={setSelectedGroups}
            />
          ))
        )
      }
      selectedItemsSide={
        shouldSelectSingleItem
          ? null
          : selectedGroups?.map((group) => (
              <GroupsRow
                key={group.id}
                group={group}
                isChecked={selectedGroups.some((item) => item.id === group.id)}
                shouldSelectSingleItem={shouldSelectSingleItem}
                setSelectedItems={setSelectedGroups}
              />
            ))
      }
      loading={loading}
      totalCount={totalCount}
      pagination={pagination}
      handleSelectItems={setSelectedGroups}
      hasSelectedItems={!!selectedGroups.length}
      items={groups ?? []}
      selectedItems={selectedGroups ?? []}
      shouldSelectSingleItem={shouldSelectSingleItem}
      headerTitles={['Settings.Groups.TableTitle', 'Settings.Groups.Color']}
      addedItems={addedGroups}
      setAddedItems={setAddedGroups}
    />
  );
}

export default GroupsList;
