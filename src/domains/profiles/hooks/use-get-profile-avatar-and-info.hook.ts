import { useCustomQuery } from '@3divi/shared-components';
import {
  TProfileAvatarsAndInfo,
  GET_PROFILE_AVATARS_AND_INFO,
} from '../requests';

type TUseGetProfileAvatarAndInfo = {
  profileIds: Set<string>;
};

function useGetProfileAvatarAndInfo({
  profileIds,
}: TUseGetProfileAvatarAndInfo) {
  const { data, error, loading } = useCustomQuery<TProfileAvatarsAndInfo>(
    GET_PROFILE_AVATARS_AND_INFO,
    {
      variables: {
        ids: Array.from(profileIds),
      },
      fetchPolicy: 'cache-and-network',
    }
  );

  return { data, error, loading };
}

export { useGetProfileAvatarAndInfo };
