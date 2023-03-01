import { useCustomQuery } from '@3divi/shared-components';
import {
  Checkbox,
  Flex,
  FormControl,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ChangeEvent, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomFormLabel } from '..';
import { GET_GROUPS, TGroup, TGroupsList } from '../../domains/group';
import { useFilterByArray } from '../../hooks';
import ColorRound from '../color-round.element';
import SearchGroupInput from '../search-group-input.element';
import ClearFilterButton from './clear-filter-button.component';

function GroupsFilter() {
  const {
    value: selectedGroupsIds,
    handleChangeCheckbox,
    onClickClearButtonHandler,
  } = useFilterByArray({ title: 'groupsIds' });
  const { t } = useTranslation('pages');
  const [filteredGroups, setFilteredGroups] = useState<TGroup[]>([]);
  const { data } = useCustomQuery<TGroupsList>(GET_GROUPS, {
    fetchPolicy: 'cache-and-network',
    onCompleted: (downloadedData: TGroupsList) => {
      if (downloadedData.items.collectionItems)
        setFilteredGroups(downloadedData.items.collectionItems);
    },
    variables: { withItems: true },
  });

  const groups = useMemo(
    () => data?.items.collectionItems ?? [],
    [data?.items.collectionItems]
  );

  return (
    <FormControl>
      <Flex align="center" justifyContent="space-between" pb={1.5}>
        <CustomFormLabel label={t('Profiles.Filters.WatchLists.Title')} />
        {selectedGroupsIds.length > 0 && (
          <ClearFilterButton onClick={onClickClearButtonHandler} />
        )}
      </Flex>
      {groups.length ? (
        <>
          <SearchGroupInput
            groups={groups}
            setFilteredGroups={setFilteredGroups}
          />
          {filteredGroups.length > 0 && (
            <Stack maxH={48} overflowY="auto">
              {filteredGroups.map((group) => (
                <Checkbox
                  key={group.id}
                  w="fit-content"
                  isChecked={selectedGroupsIds.includes(group.id)}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangeCheckbox(e, group.id)
                  }
                >
                  <HStack spacing={3} w="full">
                    <ColorRound color={group.info.color} />
                    <Text maxW={48} noOfLines={1} wordBreak="break-all">
                      {group.title}
                    </Text>
                  </HStack>
                </Checkbox>
              ))}
            </Stack>
          )}
        </>
      ) : (
        <Text fontSize="sm">{t('Profiles.Filters.WatchLists.Empty')}</Text>
      )}
    </FormControl>
  );
}

export default GroupsFilter;
