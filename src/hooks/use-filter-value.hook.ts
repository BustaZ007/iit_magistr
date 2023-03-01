import { useState, ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSearchParamsForFilter from './use-search-params-for-filter.hook';

function useFilterByValue(id: string, debounceTime = 500) {
  const { setFilterParam, removeFilterParam } =
    useSearchParamsForFilter(debounceTime);
  const [searchParams] = useSearchParams();

  const [value, setValue] = useState(searchParams.get(id) ?? '');

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
    setFilterParam({ title: id, value: e.target.value });
  };

  const onClickClearButtonHandler = () => {
    setValue('');
    removeFilterParam({ title: id });
  };

  useEffect(() => {
    if (!searchParams.has(id)) setValue('');
  }, [searchParams]);

  return { value, onChangeHandler, onClickClearButtonHandler };
}

export default useFilterByValue;
