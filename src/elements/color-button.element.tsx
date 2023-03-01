/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Center,
  Icon,
  useCheckbox,
  useRadio,
  UseRadioProps,
} from '@chakra-ui/react';
import { Check } from 'phosphor-react';
import getContrastColor from '../helpers/colors/get-contrast-color.helper';

type TColorButton = {
  radioProps: UseRadioProps;
  color: string;
  onClick?: () => void;
  isCheckbox?: boolean;
};

function ColorButton({
  radioProps,
  color,
  onClick = () => {},
  isCheckbox = false,
}: TColorButton) {
  const {
    getInputProps,
    getCheckboxProps: getRadioProps,
    state: { isChecked },
  } = useRadio(radioProps);

  const { getCheckboxProps } = useCheckbox(radioProps);

  const input = { ...getInputProps(), type: isCheckbox ? 'checkbox' : 'radio' };
  const buttonProps = isCheckbox ? getCheckboxProps() : getRadioProps();

  return (
    <Box as="label" cursor="pointer">
      <input {...input} />
      <Center
        {...buttonProps}
        w={6}
        h={6}
        bg={color}
        onClick={onClick}
        border="1px"
        borderColor={color === 'white' ? 'blackAlpha.300' : 'transparent'}
        borderRadius="full"
      >
        {isChecked && (
          <Icon
            as={Check}
            w={4}
            h={4}
            weight="bold"
            color={getContrastColor(color)}
          />
        )}
      </Center>
    </Box>
  );
}

export default ColorButton;
