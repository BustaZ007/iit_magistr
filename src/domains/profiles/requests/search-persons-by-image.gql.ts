import { gql } from '@apollo/client';

type TSearchProfile = {
  id: string;
  mainSample: { id: string };
};

type TSearchResult = {
  profile: TSearchProfile;
};

type TSearch = {
  searchResult: TSearchResult[];
};

type TSearchPersonsByImageResult = {
  search: TSearch[];
};

const SEARCH_PERSONS_BY_IMAGE = gql`
  query SearchPersonsByImage(
    $sourceImage: CustomBinaryType!
    $confidenceThreshold: Float
  ) {
    search(
      sourceImage: $sourceImage
      confidenceThreshold: $confidenceThreshold
    ) {
      searchResult {
        profile {
          id
          mainSample {
            id
          }
        }
      }
    }
  }
`;

export {
  SEARCH_PERSONS_BY_IMAGE,
  type TSearchPersonsByImageResult,
  type TSearch,
  type TSearchResult,
  type TSearchProfile,
};
