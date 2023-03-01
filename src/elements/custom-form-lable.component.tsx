/* eslint-disable react/jsx-props-no-spreading */
import { FormLabel, Text } from '@chakra-ui/react';

type TCustomFormLable = {
  label: string;
  htmlFor?: string;
  [key: string]: any;
};

export function CustomFormLabel({
  label,
  htmlFor,
  ...rest
}: TCustomFormLable): JSX.Element {
  return (
    <FormLabel
      {...rest}
      htmlFor={htmlFor}
      fontSize="sm"
      opacity={0.48}
      m={0}
      fontWeight="normal"
      w={150}
      lineHeight={1}
    >
      <Text noOfLines={1}>{label}</Text>
    </FormLabel>
  );
}
