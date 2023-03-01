import {
  Box,
  Flex,
  Stack,
  CheckboxGroup,
  Checkbox,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchParamsForFilter } from '../../hooks';
import { CustomFormLabel } from '../custom-form-lable.component';
import ClearFilterButton from './clear-filter-button.component';

type TRadioOrCheckboxOption = {
  label: string;
  value: string;
};

type TRadioOrCheckboxFilters = {
  id: string;
  label: string;
  options: Array<TRadioOrCheckboxOption>;
  type?: 'radio' | 'checkbox';
};

function RadioOrCheckboxFilters({
  id,
  label,
  options,
  type = 'radio',
}: TRadioOrCheckboxFilters): JSX.Element {
  const [searchParams] = useSearchParams();
  const isRadio = type === 'radio';
  const [value, setValue] = useState<string | string[]>(
    isRadio
      ? searchParams.get(id) ?? options[0].value ?? ''
      : searchParams.get(id)?.split(',') ?? []
  );
  const { setFilterParam, removeFilterParam } = useSearchParamsForFilter(300);

  const resetFilter = () => {
    removeFilterParam({ title: id });
    setValue(isRadio ? 'all' : []);
  };

  const onChangeHandler = (nextValue: string | string[]) => {
    if (nextValue === 'all' || nextValue.length === 0) {
      resetFilter();
      return;
    }
    setValue(nextValue);
    setFilterParam({
      title: id,
      value: isRadio ? nextValue.toString() : (nextValue as string[]).join(','),
    });
  };

  useEffect(() => {
    if (!searchParams.has(id)) setValue(isRadio ? 'all' : []);
  }, [id, setValue, searchParams]);

  const filterItems = (
    <Stack>
      {options.map((option) =>
        isRadio ? (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ) : (
          <Checkbox key={option.value} value={option.value}>
            {option.label}
          </Checkbox>
        )
      )}
    </Stack>
  );

  return (
    <Box w="full">
      <Flex pb={1.5} align="center" justifyContent="space-between">
        <CustomFormLabel label={label} htmlFor={id} />
        {!isRadio && !!value.length && (
          <ClearFilterButton onClick={resetFilter} />
        )}
      </Flex>
      {isRadio ? (
        <RadioGroup
          onChange={onChangeHandler}
          value={value as string}
          name={id}
          borderRadius="md"
          size="md"
          id={id}
        >
          {filterItems}
        </RadioGroup>
      ) : (
        <CheckboxGroup
          onChange={(evt) => onChangeHandler(evt as string[])}
          value={value as string[]}
          size="md"
        >
          {filterItems}
        </CheckboxGroup>
      )}
    </Box>
  );
}

export { RadioOrCheckboxFilters, type TRadioOrCheckboxOption };
