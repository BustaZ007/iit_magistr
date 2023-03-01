import {
  Flex,
  FormControl,
  HStack,
  Select,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useSearchParamsForFilter } from '../../hooks';
import { CustomFormLabel } from '../custom-form-lable.component';
import ClearFilterButton from './clear-filter-button.component';

type TFilterSelect = {
  title: string;
  defaultValue: string;
  fields: string[];
  label: string;
};

function FilterSelect({ title, defaultValue, fields, label }: TFilterSelect) {
  const { t } = useTranslation('components');
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState<string>(
    searchParams.get(title) ?? defaultValue
  );
  const { setFilterParam, removeFilterParam } = useSearchParamsForFilter(0);
  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300');

  const resetSelect = () => {
    setValue(defaultValue);
    removeFilterParam({ title });
  };

  const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === defaultValue) {
      resetSelect();
      return;
    }
    setValue(e.target.value);
    setFilterParam({
      title,
      value: e.target.value,
    });
  };

  useEffect(() => {
    if (!searchParams.has(title)) setValue(defaultValue);
  }, [searchParams]);

  return (
    <FormControl>
      <Flex pb={1.5} align="center" justifyContent="space-between">
        <CustomFormLabel label={label} htmlFor={title} />

        {value !== defaultValue && <ClearFilterButton onClick={resetSelect} />}
      </Flex>
      <HStack>
        <Select
          id={title}
          borderRadius="md"
          size="sm"
          bg={bg}
          borderColor={borderColor}
          name="sort"
          onChange={onSelectHandler}
          value={value}
        >
          <option value="all">—</option>
          {fields.map((field) => (
            <option value={field} key={field}>
              {t(`Filters.${field}`)}
            </option>
          ))}
        </Select>
      </HStack>
    </FormControl>
  );
}

export default FilterSelect;
