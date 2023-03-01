/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  FormControl,
  FormErrorMessage,
  Flex,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetEditableControls } from '../../hooks';
import { CustomFormLabel } from '../custom-form-lable.component';

type TEditableTextInput = {
  name: string | undefined;
  value: string;
  error: string | undefined;
  heading: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  type?: 'text' | 'email';
};

function EditableTextInput({
  name,
  error,
  handleChange,
  heading,
  value,
  maxLength = 70,
  type = 'text',
}: TEditableTextInput) {
  const { isFocused, isEditing, getEditButtonProps, handleClick } =
    useGetEditableControls();
  const { t } = useTranslation('components');
  const bg = useColorModeValue('gray.100', 'gray.600');

  const isInvalid = !!error;
  return (
    <Flex alignItems="center" w="full">
      <CustomFormLabel label={heading} />
      <Box flexGrow={1} flexShrink={1}>
        {!isEditing ? (
          <Box
            {...getEditButtonProps()}
            minH={8}
            py={1}
            px={3}
            cursor="pointer"
            _hover={{ bg }}
            borderRadius="md"
            minW={120}
            w="fit-content"
            onClick={handleClick}
          >
            <Text
              pl="px"
              fontSize="sm"
              opacity={!value ? 0.48 : undefined}
              maxW={value ? 60 : undefined}
              lineHeight="base"
              pt={0.5}
              noOfLines={1}
              wordBreak="break-all"
            >
              {value || t('EditableComponents.Edit')}
            </Text>
          </Box>
        ) : (
          <FormControl isInvalid={isInvalid}>
            <Input
              autoFocus={isFocused}
              w="full"
              size="sm"
              borderRadius="md"
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              autoComplete="off"
              maxLength={maxLength}
              py={1.5}
            />
            <FormErrorMessage>
              {isInvalid && t(`errors.${error}`)}
            </FormErrorMessage>
          </FormControl>
        )}
      </Box>
    </Flex>
  );
}

export default EditableTextInput;
