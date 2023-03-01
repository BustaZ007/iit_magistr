import { Box, FormControl, Input, useColorModeValue } from '@chakra-ui/react';
import moment from 'moment';
import { LegacyRef, ChangeEvent } from 'react';
import { useIMask } from 'use-imask';
import IMask from 'imask';
import { CustomFormLabel } from './custom-form-lable.component';

type TTimeInput = {
  id: string;
  label: string;
  timeValue: string;
  setTimeValue: (value: string) => void;
};

const TIME_INPUT_OPTIONS_MASK = {
  mask: Date,
  pattern: 'HH:mm',
  blocks: {
    HH: {
      mask: IMask.MaskedRange,
      from: 0,
      to: 23,
      maxLength: 2,
      autofix: true,
    },
    mm: {
      mask: IMask.MaskedRange,
      from: 0,
      to: 59,
      maxLength: 2,
      autofix: true,
    },
  },
  format(inputDate: Date) {
    return moment(inputDate).format('HH:mm');
  },
  parse(str: string) {
    return moment(str, 'HH:mm');
  },
  autofix: true,
};

function TimeInput({ id, label, timeValue, setTimeValue }: TTimeInput) {
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300');
  const [ref] = useIMask(TIME_INPUT_OPTIONS_MASK, {
    onAccept: (e: ChangeEvent<HTMLInputElement>) => {
      setTimeValue(e.target.value);
    },
  });
  const inputColor = useColorModeValue('white', 'gray.800');

  return (
    <FormControl>
      <Box mb={1}>
        <CustomFormLabel label={label} htmlFor={id} />
      </Box>
      <Input
        size="sm"
        id={id}
        type="text"
        maxLength={150}
        name={id}
        borderRadius="md"
        bg={inputColor}
        borderColor={borderColor}
        value={timeValue}
        ref={ref as LegacyRef<HTMLInputElement>}
        autoFocus
      />
    </FormControl>
  );
}

export default TimeInput;
