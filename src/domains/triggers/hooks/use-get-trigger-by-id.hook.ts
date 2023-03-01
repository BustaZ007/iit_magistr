import { useCustomQuery } from '@3divi/shared-components';
import { GET_TRIGGER_BY_ID, TGetTriggerById, TTrigger } from '../requests';

const useGetTriggerById = (id: string) => {
  const { data, loading } = useCustomQuery<TGetTriggerById>(GET_TRIGGER_BY_ID, {
    variables: { id },
  });

  const trigger = data?.triggers.collectionItems[0] ?? ({} as TTrigger);

  return { trigger, loading };
};

export { useGetTriggerById };
