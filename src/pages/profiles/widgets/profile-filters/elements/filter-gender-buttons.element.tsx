/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  ButtonGroup,
  useRadioGroup,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { FiltersSearchParamsNames } from '../../../../../consts';
import { ClearFilterButton, CustomFormLabel } from '../../../../../elements';
import { useSearchParamsForFilter } from '../../../../../hooks';
import GenderButton from './gender-button.element';

function FilterGenderButtons() {
  const { t } = useTranslation('pages');
  const [searchParams] = useSearchParams();
  const id = FiltersSearchParamsNames.GENDER;
  const buttonsGroupColor = useColorModeValue('white', 'gray.800');

  const buttonValues = {
    ALL: 'all',
    MALE: 'MALE',
    FEMALE: 'FEMALE',
  };
  const {
    getRootProps,
    getRadioProps,
    setValue,
    value: genderValue,
  } = useRadioGroup({
    name: id,
    defaultValue: searchParams.get(id) ?? 'all',
  });

  const buttonGroup = getRootProps();

  const { setFilterParam, removeFilterParam } = useSearchParamsForFilter();

  useEffect(() => {
    if (!searchParams.has(id)) setValue('all');
  }, [searchParams]);

  useEffect(() => {
    if (genderValue === 'all') removeFilterParam({ title: id });
    else setFilterParam({ title: id, value: genderValue.toString() });
  }, [genderValue]);

  const handleReset = () => {
    removeFilterParam({ title: id });
    setValue('all');
  };

  return (
    <FormControl>
      <Flex align="center" justifyContent="space-between" pb={1.5}>
        <CustomFormLabel label={t('Profiles.Filters.Gender.Title')} />
        {genderValue !== 'all' && <ClearFilterButton onClick={handleReset} />}
      </Flex>
      <ButtonGroup
        bg={buttonsGroupColor}
        borderRadius="md"
        {...buttonGroup}
        size="sm"
        isAttached
        variant="outline"
      >
        {(Object.keys(buttonValues) as Array<keyof typeof buttonValues>).map(
          (value) => {
            const buttonProps = getRadioProps({
              value: buttonValues[value],
            });
            return (
              <GenderButton
                isChecked={genderValue === buttonValues[value]}
                key={value}
                mx={value === buttonValues.MALE ? '-1px' : undefined}
                buttonProps={buttonProps}
                text={t(`Profiles.Filters.Gender.${value}`)}
              />
            );
          }
        )}
      </ButtonGroup>
    </FormControl>
  );
}

export default FilterGenderButtons;
