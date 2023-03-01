import { TPaginationResults } from '@3divi/shared-components';
import {
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { ReactNode, SetStateAction } from 'react';
import { SimpleDrawerHeader } from '../drawer';
import EntityListDrawerBody from './entity-list-drawer-body.component';

type TEntityListDrawer = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  emptyListElement: ReactNode;
  hasSelectedItems: boolean;
  items: any[];
  selectedItems: any[];
  allItemsSide: ReactNode;
  selectedItemsSide: ReactNode;
  loading: boolean;
  totalCount: number;
  pagination: TPaginationResults;
  handleSelectItems: (value: SetStateAction<any[]>) => void;
  templateColumns: string;
  headerTitles: string[];
  addCallback?: () => void;
  shouldSelectSingleItem?: boolean;
  addedItems: any[];
  setAddedItems: (value: SetStateAction<any[]>) => void;
};
function EntityListDrawer({
  onClose,
  isOpen,
  title,
  allItemsSide,
  loading,
  totalCount,
  emptyListElement,
  pagination,
  addCallback,
  handleSelectItems,
  hasSelectedItems,
  items,
  selectedItems,
  selectedItemsSide,
  shouldSelectSingleItem,
  templateColumns,
  headerTitles,
  addedItems,
  setAddedItems,
}: TEntityListDrawer) {
  const handleOnClose = () => {
    handleSelectItems(addedItems);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleOnClose} placement="right" size="xl">
      <DrawerOverlay />
      <DrawerContent>
        <SimpleDrawerHeader title={title} onClose={handleOnClose} />
        <Divider />
        <EntityListDrawerBody
          allItemsSide={allItemsSide}
          loading={loading}
          totalCount={totalCount}
          emptyListElement={emptyListElement}
          pagination={pagination}
          addCallback={addCallback}
          setSelectedItems={handleSelectItems}
          hasSelectedItems={hasSelectedItems}
          items={items}
          selectedItemsSide={selectedItemsSide}
          onClose={handleOnClose}
          shouldSelectSingleItem={shouldSelectSingleItem}
          templateColumns={templateColumns}
          selectedItems={selectedItems}
          headerTitles={headerTitles}
          setAddedItems={setAddedItems}
        />
      </DrawerContent>
    </Drawer>
  );
}

export default EntityListDrawer;
