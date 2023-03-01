import { Button, FormControl, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

type TFiltersBlock = {
  children: ReactNode;
};

function FiltersBlock({ children }: TFiltersBlock) {
  const { t } = useTranslation('components');
  const [searchParams, seSearchParams] = useSearchParams();
  const handleResetFilter = () => {
    [...searchParams.keys()]
      .filter((key) => key !== 'page')
      .forEach((key) => searchParams.delete(key));
    seSearchParams(searchParams);
  };
  const paramsKeys = [...searchParams.keys()];
  return (
    <VStack spacing="6" alignItems="center">
      <FormControl>
        <VStack spacing="3">{children}</VStack>
      </FormControl>
      {((paramsKeys.length > 1 && searchParams.has('page')) ||
        (!!paramsKeys.length && !searchParams.has('page'))) && (
        <Button onClick={handleResetFilter} w="full" variant="outline">
          {t('Filters.Reset')}
        </Button>
      )}
    </VStack>
  );
}

export default FiltersBlock;
