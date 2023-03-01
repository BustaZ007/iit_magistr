import { debounce } from 'lodash';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

type TRemoveFilterParam = {
  title: string;
};

type TSetFilterParams = {
  value: string;
} & TRemoveFilterParam;

function useSearchParamsForFilter(debounceTime = 500) {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateUrl = useCallback(
    debounce(() => {
      setSearchParams(searchParams, { replace: true });
    }, debounceTime),
    [searchParams]
  );

  const removeFilterParam = ({ title }: TRemoveFilterParam) => {
    updateUrl.cancel();
    searchParams.delete(title);
    setSearchParams(searchParams, { replace: true });
  };

  const setFilterParam = ({ title, value }: TSetFilterParams) => {
    searchParams.set(title, value);
    if (value === '') {
      removeFilterParam({ title });
      return;
    }

    updateUrl();
  };

  return { setFilterParam, removeFilterParam };
}

export default useSearchParamsForFilter;
