import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Divider,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import DrawerBlockBody from '../../../blocks/drawer-block/drawer-body.component';
import DrawerBlockHeader from '../../../blocks/drawer-block/drawer-header.component';
import { useRemoveCameraField } from '../../../domains/agent';
import {
  CAMERA_EXTRA_FIELD,
  TIntegrationData,
  useDeleteSecurOsIntegration,
} from '../../../domains/sequr-os-integration';
import { IntegrationInfo } from './integration-info.component';

type TIntegrationCard = {
  isOpen: boolean;
  onClose: () => void;
  integration: TIntegrationData;
};

export function ManageIntegrationDrawer({
  integration,
  isOpen,
  onClose,
}: TIntegrationCard): JSX.Element {
  const { t } = useTranslation('pages');
  const { removeCameraField } = useRemoveCameraField();
  const { deleteIntegration, loading } = useDeleteSecurOsIntegration({
    callback: () => removeCameraField(CAMERA_EXTRA_FIELD),
  });

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="xl">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBlockHeader
          id={integration.id}
          onClose={onClose}
          deleteEntity={{
            deleteAction: deleteIntegration,
            deleteHeaderText: t('Settings.Integration.Deletion.Title'),
            deleteBodyText: t('Settings.Integration.Deletion.Message'),
            deleteLoading: loading,
            buttonId: 'integration',
          }}
        />
        <Divider />
        <DrawerBlockBody
          leftSideComponent={<IntegrationInfo integration={integration} />}
          creationDate={integration.creationDate}
          lastModify={integration.lastModified}
        />
      </DrawerContent>
    </Drawer>
  );
}
