import {
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import DrawerBlockBody from './drawer-body.component';
import DrawerBlockHeader from './drawer-header.component';

type TDeleteEntity = {
  deleteAction: () => void;
  deleteHeaderText: string;
  deleteBodyText: string;
  deleteLoading: boolean;
  buttonId: string;
};

type TDrawerBlock = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  deleteEntity: TDeleteEntity | undefined;
  leftSideComponent: ReactNode;
  rightSideComponent: ReactNode;
  activitiesCount?: number;
  activitiesComponent?: ReactNode;
  creationDate: string | undefined;
  lastModify: string | undefined;
  hideDates?: boolean;
};

function DrawerBlock({
  onClose,
  isOpen,
  id,
  deleteEntity,
  activitiesCount,
  leftSideComponent,
  activitiesComponent,
  rightSideComponent,
  creationDate,
  lastModify,
  hideDates,
}: TDrawerBlock) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="xl">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBlockHeader
          id={id}
          onClose={onClose}
          deleteEntity={deleteEntity}
        />
        <Divider />
        <DrawerBlockBody
          activitiesCount={activitiesCount}
          activitiesComponent={activitiesComponent}
          rightSideComponent={rightSideComponent}
          leftSideComponent={leftSideComponent}
          creationDate={creationDate}
          lastModify={lastModify}
          hideDates={hideDates}
        />
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerBlock;
