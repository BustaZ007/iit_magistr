import { useCustomQuery } from '@3divi/shared-components';
import { filterProfilesRequiredFields } from '../helpers';
import { GET_PROFILES_FIELDS, TGetProfilesFields } from '../requests';

const useGetProfilesFields = () => {
  const { data, loading } = useCustomQuery<TGetProfilesFields>(
    GET_PROFILES_FIELDS,
    { isPolling: false }
  );

  const fields = data?.profileSettings.extraFields ?? [];

  const customFields = filterProfilesRequiredFields(fields);

  return { fields, loading, customFields };
};

export { useGetProfilesFields };
