import { useLazyQuery } from '@apollo/client';
import {
  SEARCH_PERSONS_BY_IMAGE,
  TSearchPersonsByImageResult,
} from '../requests';

const useSearchPersonsByImage = () => {
  const [searchPersonsRequest, { loading, error }] =
    useLazyQuery<TSearchPersonsByImageResult>(SEARCH_PERSONS_BY_IMAGE);

  const searchPersons = async (sourceImage: string) => {
    const searchPersonsResult = await searchPersonsRequest({
      // Нужно брать из из конфига activity_threshold
      variables: { sourceImage, confidenceThreshold: 0.85 },
      fetchPolicy: 'network-only',
    });

    return searchPersonsResult.data?.search[0].searchResult;
  };

  return { loading, error, searchPersons };
};

export { useSearchPersonsByImage };
