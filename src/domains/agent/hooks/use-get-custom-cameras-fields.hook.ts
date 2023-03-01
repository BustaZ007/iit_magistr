import { useCustomQuery } from '@3divi/shared-components';
import { GET_CAMERAS_FIELDS, TGetCamerasFields } from '../requests';
import { REQUIRED_CAMERAS_FIELDS } from '../../../consts';

const useGetCustomCamerasFields = () => {
  const { data, loading } = useCustomQuery<TGetCamerasFields>(
    GET_CAMERAS_FIELDS,
    { isPolling: false }
  );

  const fields = data?.collectorSettings.cameraFields ?? [];

  const customFields = fields.filter(
    (field) => !REQUIRED_CAMERAS_FIELDS.includes(field)
  );

  return { fields, loading, customFields };
};

export { useGetCustomCamerasFields };
