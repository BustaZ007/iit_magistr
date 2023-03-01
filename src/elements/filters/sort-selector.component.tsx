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
import { FiltersSearchParamsNames } from '../../consts';
import { useSearchParamsForFilter } from '../../hooks';
import { CustomFormLabel } from '../custom-form-lable.component';
import ClearFilterButton from './clear-filter-button.component';

type TSortSelector = {
  sortFields: string[];
  defaultValue: string;
};

function SortSelector({
  sortFields,
  defaultValue,
}: TSortSelector): JSX.Element {
  const { t } = useTranslation('components');
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState<string>(
    searchParams.get(FiltersSearchParamsNames.SORT) ?? defaultValue
  );
  const { setFilterParam } = useSearchParamsForFilter(0);
  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300');

  const id = 'sort';

  const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    setFilterParam({ title: id, value: e.target.value });
  };

  const resetSort = () => {
    setValue(defaultValue);
    setFilterParam({ title: id, value: defaultValue });
  };

  useEffect(() => {
    if (!searchParams.has(id)) {
      resetSort();
      return;
    }
    setValue(searchParams.get('sort') as string);
  }, [searchParams]);

  return (
    <FormControl>
      <Flex mb={0.5} align="center" justifyContent="space-between">
        <CustomFormLabel label={t('Filters.Sort')} htmlFor={id} />

        {value !== '-creationDate' && value !== '-creation_date' && (
          <ClearFilterButton onClick={resetSort} />
        )}
      </Flex>
      <HStack>
        <Select
          id={id}
          borderRadius="md"
          size="sm"
          bg={bg}
          borderColor={borderColor}
          name="sort"
          onChange={onSelectHandler}
          value={value}
        >
          {sortFields.map((field) => (
            <option value={field} key={field}>
              {t(`Filters.${field}`)}
            </option>
          ))}
        </Select>
      </HStack>
    </FormControl>
  );
}

export default SortSelector;
