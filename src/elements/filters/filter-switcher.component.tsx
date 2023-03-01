import { Flex, Switch } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchParamsForFilter } from '../../hooks';
import { CustomFormLabel } from '../custom-form-lable.component';

export type TFilterCheckbox = {
  id: string;
  label: string;
};

function FilterSwitcher({ id, label }: TFilterCheckbox): JSX.Element {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(!!searchParams.get(id) ?? false);
  const { setFilterParam, removeFilterParam } = useSearchParamsForFilter(0);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isActive = e.target.checked;
    if (isActive) {
      setValue(true);
      setFilterParam({ title: id, value: isActive.toString() });
    } else {
      setValue(false);
      removeFilterParam({ title: id });
    }
  };

  useEffect(() => {
    if (!searchParams.has(id)) setValue(false);
  }, [searchParams]);

  return (
    <Flex align="center">
      <Switch
        id={id}
        name={id}
        onChange={onChangeHandler}
        isChecked={value}
        pr={2}
      />

      <CustomFormLabel label={label} htmlFor={id} />
    </Flex>
  );
}

export default FilterSwitcher;
