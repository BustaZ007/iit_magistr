import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSearchParamsForFilter from './use-search-params-for-filter.hook';

type TUseFilterByArray = {
  title: string;
  delay?: number;
};

const useFilterByArray = ({ title, delay = 300 }: TUseFilterByArray) => {
  const { setFilterParam, removeFilterParam } = useSearchParamsForFilter(delay);
  const [searchParams] = useSearchParams();

  const [value, setValue] = useState<string[]>(
    searchParams.get(title)?.split(',') ?? []
  );

  const handleChangeCheckbox = (
    e: ChangeEvent<HTMLInputElement>,
    idToArray: string
  ) => {
    if (e.target.checked) value.push(idToArray);
    else value.splice(value.indexOf(idToArray), 1);
    if (value.length > 0) setFilterParam({ title, value: value.join(',') });
    else removeFilterParam({ title });
  };

  const handleSetValue = (newValue: string[]) => {
    if (newValue.length === 0) {
      removeFilterParam({ title });
      return;
    }
    setValue(newValue);
    setFilterParam({ title, value: newValue.join(',') });
  };

  const onClickClearButtonHandler = () => {
    setValue([]);
    removeFilterParam({ title });
  };

  useEffect(() => {
    if (!searchParams.has(title)) setValue([]);
  }, [searchParams]);

  return {
    value,
    handleChangeCheckbox,
    onClickClearButtonHandler,
    handleSetValue,
  };
};

export default useFilterByArray;
