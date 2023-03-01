import {
  FormControl,
  Input,
  FormErrorMessage,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { TFormikError, TFormikOnChange } from '../../consts';
import { CustomFormLabel } from '../custom-form-lable.component';

type TDrawerInput = {
  value: string;
  label: string;
  id: string;
  error: TFormikError;
  name: string;
  onChange?: TFormikOnChange;
  type?: 'text' | 'email' | 'date';
  maxLength?: number;
  autoFocus?: boolean;
  isReadOnly?: boolean;
};

function DrawerInput({
  value,
  label,
  name,
  id,
  error,
  onChange,
  type = 'text',
  maxLength = 70,
  autoFocus = false,
  isReadOnly = false,
}: TDrawerInput): JSX.Element {
  const { t } = useTranslation('components');
  const inputColor = useColorModeValue('white', 'gray.800');
  const datePickerColor = useColorModeValue('invert(0%)', 'invert(100%)');

  const isInvalid = !!error;
  const isDate = type === 'date';
  return (
    <FormControl isInvalid={isInvalid} display="flex" alignItems="flex-start">
      <CustomFormLabel label={label} htmlFor={id} py={2} />
      <Box>
        <Input
          readOnly={isReadOnly}
          min={isDate ? '1900-01-01' : undefined}
          max={isDate ? moment().format('YYYY-MM-DD') : undefined}
          w={isDate ? 'max-content' : 400}
          maxW="400px"
          size="sm"
          id={id}
          type={type}
          maxLength={maxLength}
          name={name}
          borderRadius="md"
          bg={inputColor}
          value={value}
          onChange={onChange}
          autoComplete="off"
          autoFocus={autoFocus}
          css={{
            '&::-webkit-calendar-picker-indicator': {
              filter: datePickerColor,
            },
          }}
        />
        <FormErrorMessage>
          {isInvalid && t(`errors.${error.toString()}`)}
        </FormErrorMessage>
      </Box>
    </FormControl>
  );
}

export default DrawerInput;
