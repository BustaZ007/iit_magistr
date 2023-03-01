import { useCustomQuery } from '@3divi/shared-components';
import { GET_PLATFORM_INFORMATION, TGetPlatformInformation } from '../requests';

const useGetPlatformInformation = () => {
  const { data } = useCustomQuery<TGetPlatformInformation>(
    GET_PLATFORM_INFORMATION
  );

  return { version: data?.platformInformation.platformVersion ?? '' };
};

export default useGetPlatformInformation;
