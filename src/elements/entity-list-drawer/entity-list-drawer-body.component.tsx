/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { TPaginationResults } from '@3divi/shared-components';
import {
  Button,
  Divider,
  DrawerBody,
  DrawerFooter,
  Flex,
} from '@chakra-ui/react';
import { ChangeEventHandler, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import EntityListAllItems from './entity-list-all-items.component';
import EntityListSelectedItems from './entity-list-selected-items.component';

type TEntityListDrawerBody = {
  allItemsSide: ReactNode;
  selectedItemsSide: ReactNode;
  loading: boolean;
  totalCount: number;
  emptyListElement: ReactNode;
  hasSelectedItems: boolean;
  items: any[];
  selectedItems: any[];
  pagination: TPaginationResults;
  onClose: () => void;
  setSelectedItems: (value: SetStateAction<any[]>) => void;
  templateColumns: string;
  headerTitles: string[];
  addCallback?: () => void;
  shouldSelectSingleItem?: boolean;
  setAddedItems: (value: SetStateAction<any[]>) => void;
};

function EntityListDrawerBody({
  allItemsSide,
  loading,
  totalCount,
  emptyListElement,
  pagination,
  addCallback,
  setSelectedItems,
  onClose,
  hasSelectedItems,
  items,
  selectedItemsSide,
  shouldSelectSingleItem,
  templateColumns,
  selectedItems,
  headerTitles,
  setAddedItems,
}: TEntityListDrawerBody) {
  const { t } = useTranslation('common');

  const handleSelectAll = () => {
    setSelectedItems((prevState) => {
      if (!items.length) {
        return [];
      }
      const endpointsSet = new Set<any>([...prevState, ...items]);
      return [...endpointsSet];
    });
  };
  const handleUnselectedCurrent = () => {
    const itemsIds = items.map((item) => item.id);
    setSelectedItems((prevState) =>
      prevState.filter((prevItem) => !itemsIds.includes(prevItem.id))
    );
  };
  const handleUnselectAll = () => {
    setSelectedItems([]);
  };

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) handleSelectAll();
    else handleUnselectedCurrent();
  };

  const handleAddClick = () => {
    setAddedItems(selectedItems);
    if (addCallback) {
      addCallback();
    }
    onClose();
  };
  return (
    <>
      <DrawerBody
        p={0}
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Flex direction="row" h="-webkit-fill-available">
          <EntityListAllItems
            allItemsSide={allItemsSide}
            emptyListElement={emptyListElement}
            handleCheckboxChange={handleCheckboxChange}
            headerTitles={headerTitles}
            items={items}
            loading={loading}
            pagination={pagination}
            selectedItems={selectedItems}
            templateColumns={templateColumns}
            totalCount={totalCount}
            shouldSelectSingleItem={!!shouldSelectSingleItem}
          />
          {!shouldSelectSingleItem && (
            <Flex overflowY="auto" flex={1}>
              <Divider orientation="vertical" />
              <EntityListSelectedItems
                handleUnselectAll={handleUnselectAll}
                hasSelectedItems={hasSelectedItems}
                headerTitles={headerTitles}
                selectedItems={selectedItems}
                selectedItemsSide={selectedItemsSide}
                templateColumns={templateColumns}
              />
            </Flex>
          )}
        </Flex>
      </DrawerBody>
      <Divider />
      <DrawerFooter justifyContent="flex-start" py={3} pl="6" gap={3}>
        <Button onClick={handleAddClick} colorScheme="blue">
          {t('Add')}
        </Button>
        <Button onClick={onClose} variant="outline" fontWeight="normal">
          {t('Cancel')}
        </Button>
      </DrawerFooter>
    </>
  );
}

export default EntityListDrawerBody;
