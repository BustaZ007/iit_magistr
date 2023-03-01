import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { useFilterByValue } from '../../hooks';
import { AutoResizeTextarea } from '../auto-resize-textarea.element';
import { CustomFormLabel } from '../custom-form-lable.component';
import ClearFilterButton from './clear-filter-button.component';

type TFilterByIds = {
  id: string;
  label: string;
};

function FilterByIds({ id, label = 'Filter name' }: TFilterByIds) {
  const bg = useColorModeValue('white', 'gray.900');
  const border = useColorModeValue(
    '1px solid #CBD5E0',
    '1px solid rgba(255, 255, 255, 0.24)'
  );
  const { value, onChangeHandler, onClickClearButtonHandler } =
    useFilterByValue(id, 700);

  return (
    <Box w="full">
      <Flex align="center" justifyContent="space-between" pb={1.5}>
        <CustomFormLabel label={label} />

        {value && <ClearFilterButton onClick={onClickClearButtonHandler} />}
      </Flex>
      <AutoResizeTextarea
        fontSize="sm"
        name={id}
        id={id}
        value={value}
        border={border}
        onChange={onChangeHandler}
        minHeight="32px"
        maxHeight="100px"
        bg={bg}
        px={3}
        py={1}
        m={0}
      />
    </Box>
  );
}

export default FilterByIds;
