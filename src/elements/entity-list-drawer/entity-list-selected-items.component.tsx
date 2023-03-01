import { Checkbox, Flex, Grid, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { TableCell, TableHeader } from '../table';

type TEntityListSelectedItems = {
  selectedItemsSide: ReactNode;
  hasSelectedItems: boolean;
  selectedItems: any[];
  templateColumns: string;
  headerTitles: string[];
  handleUnselectAll: () => void;
};

function EntityListSelectedItems({
  hasSelectedItems,
  selectedItemsSide,
  templateColumns,
  selectedItems,
  headerTitles,
  handleUnselectAll,
}: TEntityListSelectedItems) {
  const { t } = useTranslation('common');

  return (
    <Flex flexDir="column" flex={1} overflowY="auto" overflowX="hidden">
      <Grid templateColumns={templateColumns}>
        <TableCell isHeaderCell>
          <Checkbox
            isChecked={selectedItems.length > 0}
            isDisabled={!selectedItems.length}
            onChange={handleUnselectAll}
          />
        </TableCell>
        <TableHeader titles={headerTitles} />
        {hasSelectedItems && selectedItemsSide}
      </Grid>
      {!hasSelectedItems && (
        <Text
          opacity={0.48}
          pl={4}
          pr={4}
          py={2}
          fontSize="md"
          w="full"
          textAlign="center"
        >
          {t('EmptySelectedList')}
        </Text>
      )}
    </Flex>
  );
}

export default EntityListSelectedItems;
