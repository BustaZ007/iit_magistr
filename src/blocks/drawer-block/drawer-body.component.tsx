import { Divider, DrawerBody, Flex, HStack, Stack } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DrawerHeaderTab } from '../../elements';
import DrawerBlockDates from './drawer-dates.component';

type TDrawerBlockBody = {
  activitiesCount?: number;
  leftSideComponent: ReactNode;
  rightSideComponent?: ReactNode;
  activitiesComponent?: ReactNode;
  creationDate: string | undefined;
  lastModify: string | undefined;
  hideDates?: boolean;
};

function DrawerBlockBody({
  activitiesCount,
  leftSideComponent,
  rightSideComponent,
  activitiesComponent,
  creationDate,
  lastModify,
  hideDates,
}: TDrawerBlockBody) {
  const { t } = useTranslation('components');
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <DrawerBody p={0} display="flex" flexDir="column">
      <HStack spacing={6}>
        {activitiesComponent && (
          <DrawerHeaderTab
            index={0}
            title={t('Modal.DrawerBlock.Info')}
            setTabIndex={setTabIndex}
            isActive={tabIndex === 0}
          />
        )}
        {activitiesCount !== undefined && (
          <DrawerHeaderTab
            index={1}
            title={t('Modal.DrawerBlock.ActivitiesList')}
            count={activitiesCount}
            setTabIndex={setTabIndex}
            isActive={tabIndex === 1}
          />
        )}
      </HStack>
      {activitiesComponent && <Divider />}
      {tabIndex === 0 ? (
        <Flex overflowY="auto" h="full" flexGrow={1}>
          <Stack
            p={6}
            flexGrow={1}
            pos="relative"
            overflowY="auto"
            overflowX="hidden"
          >
            {leftSideComponent}
          </Stack>
          <Divider orientation="vertical" />
          {!hideDates || rightSideComponent ? (
            <Flex flexDirection="column" w={280} h="full">
              {rightSideComponent}
              {!hideDates && (
                <DrawerBlockDates
                  creationDate={creationDate}
                  lastModify={lastModify}
                />
              )}
              <Divider />
            </Flex>
          ) : null}
        </Flex>
      ) : (
        activitiesComponent
      )}
    </DrawerBody>
  );
}

export default DrawerBlockBody;
