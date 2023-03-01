import { Box, Flex, Input, useColorModeValue } from '@chakra-ui/react';
import { useFilterByValue } from '../../hooks';
import { CustomFormLabel } from '../custom-form-lable.component';
import ClearFilterButton from './clear-filter-button.component';

type TFilterInput = {
  id: string;
  label: string;
  type?: 'text' | 'number';
  maxLength?: number;
};

function FilterInput({
  id,
  label,
  type = 'text',
  maxLength = 255,
}: TFilterInput): JSX.Element {
  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300');
  const { value, onChangeHandler, onClickClearButtonHandler } =
    useFilterByValue(id);

  return (
    <Box w="full">
      <Flex align="center" justifyContent="space-between" pb={1.5}>
        <CustomFormLabel label={label} htmlFor={id} />

        {value && <ClearFilterButton onClick={onClickClearButtonHandler} />}
      </Flex>

      <Input
        size="sm"
        id={id}
        type={type}
        maxLength={maxLength}
        name={id}
        borderRadius="md"
        bg={bg}
        borderColor={borderColor}
        value={value}
        onChange={onChangeHandler}
      />
    </Box>
  );
}

export default FilterInput;
