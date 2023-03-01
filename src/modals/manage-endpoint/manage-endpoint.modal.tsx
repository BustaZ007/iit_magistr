import { tryParseJSON } from '@3divi/shared-components';
import { useTranslation } from 'react-i18next';
import { DrawerBlock } from '../../blocks';
import {
  TEndpointMeta,
  useDeleteEndpoints,
  useGetEndpointById,
} from '../../domains/endpoints';
import ManageEndpointForm from './manage-endpoint-form.component';

type TManageEndpointModal = {
  isOpen: boolean;
  onClose: () => void;
  endpointId: string;
  creationDate: string;
  lastModified: string;
};

function ManageEndpointModal({
  isOpen,
  onClose,
  endpointId,
  creationDate,
  lastModified,
}: TManageEndpointModal) {
  const { t } = useTranslation('components');
  const { deleteEndpoints, loading: deleteLoading } = useDeleteEndpoints(
    t('Modal.ManageEndpoint.Delete.Loading'),
    t('Modal.ManageEndpoint.Delete.Success'),
    t('Modal.ManageEndpoint.Delete.Error')
  );
  const { endpoint } = useGetEndpointById(endpointId);

  const handleDeleteEndpoints = () => {
    deleteEndpoints([endpointId]);
  };

  if (!Object.keys(endpoint).length) return null;

  return (
    <DrawerBlock
      isOpen={isOpen}
      onClose={onClose}
      id={endpointId}
      creationDate={creationDate}
      lastModify={lastModified}
      deleteEntity={
        endpoint.type === 'WebInterface'
          ? undefined
          : {
              deleteAction: handleDeleteEndpoints,
              deleteBodyText: t('Modal.ManageEndpoint.Delete.Message'),
              deleteHeaderText: t('Modal.ManageEndpoint.Delete.Title'),
              deleteLoading,
              buttonId: 'delete-endpoint-button',
            }
      }
      leftSideComponent={
        <ManageEndpointForm
          endpointId={endpointId}
          meta={tryParseJSON<TEndpointMeta>(endpoint.meta)!}
          type={endpoint.type}
        />
      }
      rightSideComponent={undefined}
    />
  );
}

export default ManageEndpointModal;
