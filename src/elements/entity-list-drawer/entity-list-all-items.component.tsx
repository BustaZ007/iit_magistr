/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { TPaginationResults } from '@3divi/shared-components';
import { Box, Checkbox, Flex, Grid, Progress } from '@chakra-ui/react';
import { ChangeEvent, ReactNode } from 'react';
import { Pagination } from '../../modules';
import { TableCell, TableHeader } from '../table';

type TEntityListAllItems = {
  allItemsSide: ReactNode;
  loading: boolean;
  totalCount: number;
  emptyListElement: ReactNode;
  items: any[];
  selectedItems: any[];
  pagination: TPaginationResults;
  templateColumns: string;
  headerTitles: string[];
  shouldSelectSingleItem: boolean;
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function EntityListAllItems({
  allItemsSide,
  loading,
  totalCount,
  emptyListElement,
  pagination,
  items,
  shouldSelectSingleItem,
  templateColumns,
  selectedItems,
  headerTitles,
  handleCheckboxChange,
}: TEntityListAllItems) {
  const selectedItemForCurrentPage = selectedItems.filter((selectedItem) =>
    items.some((item) => item.id === selectedItem.id)
  );

  return (
    <Flex flexDir="column" justifyContent="space-between" flex={2}>
      <Box overflowY="auto">
        {loading && <Progress size="xs" isIndeterminate />}
        {!loading && totalCount === 0 ? (
          emptyListElement
        ) : (
          <Grid templateColumns={templateColumns}>
            <TableCell isHeaderCell>
              {!shouldSelectSingleItem && (
                <Checkbox
                  isChecked={items.every((item) =>
                    selectedItems.some(
                      (selectedItem) => selectedItem.id === item.id
                    )
                  )}
                  isIndeterminate={
                    selectedItemForCurrentPage.length > 0 &&
                    selectedItemForCurrentPage.length < items.length
                  }
                  onChange={handleCheckboxChange}
                />
              )}
            </TableCell>
            <TableHeader titles={headerTitles} />
            {!loading && totalCount > 0 && allItemsSide}
          </Grid>
        )}
        <Box>
          {!loading && totalCount > 0 && (
            <Pagination
              page={pagination.page}
              setPage={pagination.setPage}
              totalCount={totalCount}
              limit={pagination.limit}
              maxPaginationButton={5}
              shouldBeInTwoLines
            />
          )}
        </Box>
      </Box>
    </Flex>
  );
}

export default EntityListAllItems;
