/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  FormControl,
  FormErrorMessage,
  Flex,
  Select,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetEditableControls } from '../../hooks';
import { CustomFormLabel } from '../custom-form-lable.component';

type TEditableSelect = {
  name: string | undefined;
  value: string;
  error: string | undefined;
  heading: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  elements: string[];
  isDisabled?: boolean;
};

function EditableSelect({
  name,
  error,
  handleChange,
  heading,
  value,
  elements,
  isDisabled,
}: TEditableSelect) {
  const { isFocused, isEditing, getEditButtonProps, handleClick } =
    useGetEditableControls(isDisabled);
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
            cursor={isDisabled ? undefined : 'pointer'}
            _hover={isDisabled ? undefined : { bg }}
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
              noOfLines={1}
              wordBreak="break-all"
              lineHeight="base"
              pt={0.5}
            >
              {value
                ? t(`Modal.ManageEndpoint.Type.${value}`)
                : t('EditableComponents.Edit')}
            </Text>
          </Box>
        ) : (
          <FormControl isInvalid={isInvalid}>
            <Select
              width="max-content"
              autoFocus={isFocused}
              name={name}
              value={value}
              onChange={handleChange}
              size="sm"
              borderRadius="md"
            >
              {elements.map((element) => (
                <option value={element} key={element}>
                  {t(`Modal.ManageEndpoint.Type.${element}`)}
                </option>
              ))}
            </Select>
            <FormErrorMessage>
              {isInvalid && t(`errors.${error}`)}
            </FormErrorMessage>
          </FormControl>
        )}
      </Box>
    </Flex>
  );
}

export default EditableSelect;
