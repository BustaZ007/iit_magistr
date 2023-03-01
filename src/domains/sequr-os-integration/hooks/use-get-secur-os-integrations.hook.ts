import { useCustomQuery } from '@3divi/shared-components';
import {
  GET_SECUR_OS_INTEGRATIONS,
  TGetSecurOsIntegrations,
  TIntegrationData,
} from '../requests';

/**
 * Хук, который запрашивает данные по созданным интеграциям с SecurOS
 * @returns Массив, который содержит данные об интеграции
 */
export const useGetSecurOsIntegration = () => {
  const { data, error, loading } = useCustomQuery<TGetSecurOsIntegrations>(
    GET_SECUR_OS_INTEGRATIONS
  );

  return {
    data: data ? data.securosIntegrations : ([] as TIntegrationData[]),
    error,
    loading,
  };
};
