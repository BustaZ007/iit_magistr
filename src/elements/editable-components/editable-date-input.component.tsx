/* eslint-disable react/jsx-props-no-spreading */
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useGetEditableControls } from '../../hooks';
import { CustomFormLabel } from '../custom-form-lable.component';
import DrawerDateInput from '../drawer/drawer-date-input.component';

type TEditableDateInput = {
  date: string | undefined;
  name: string;
  error: string | undefined;
  setDate: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          age: number;
          gender: string;
          description: string;
          name: string;
          birthday: string | undefined;
        }>
      >;
  heading: string;
};

function EditableDateInput({
  date,
  error,
  setDate,
  name,
  heading,
}: TEditableDateInput) {
  const { isEditing, getEditButtonProps, handleClick } =
    useGetEditableControls();
  const { t } = useTranslation('components');
  const bg = useColorModeValue('gray.100', 'gray.600');

  return (
    <Flex alignItems="center">
      <CustomFormLabel label={heading} htmlFor={`${heading}-date-input`} />

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
            id={`${heading}-date-input`}
          >
            <Text
              wordBreak={date ? 'break-all' : undefined}
              noOfLines={date ? 5 : undefined}
              opacity={!date ? 0.48 : undefined}
              fontSize="sm"
              lineHeight="base"
              pt={0.5}
              pl="px"
            >
              {date
                ? moment(date).format('DD MMMM YYYY')
                : t('EditableComponents.Edit')}
            </Text>
          </Box>
        ) : (
          <DrawerDateInput
            date={date}
            name={name}
            error={error}
            setDate={setDate}
          />
        )}
      </Box>
    </Flex>
  );
}

export default EditableDateInput;
