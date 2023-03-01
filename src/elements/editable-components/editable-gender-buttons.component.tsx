/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  useColorModeValue,
  useEditableControls,
} from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { useTranslation } from 'react-i18next';
import { CustomFormLabel } from '../custom-form-lable.component';

type TEditableGenderButtons = {
  gender: string | null;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          age: number;
          gender: string;
          description: string | undefined;
          name: string | undefined;
          birthday: string | undefined;
        }>
      >;
  heading: string;
};

function EditableGenderButtons({
  gender,
  setFieldValue,
  heading,
}: TEditableGenderButtons) {
  const { t } = useTranslation('pages');
  const { isEditing, getEditButtonProps } = useEditableControls();
  const bg = useColorModeValue('gray.100', 'gray.600');

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: string
  ) => {
    const obj = getEditButtonProps();
    if (obj.onClick !== undefined) obj.onClick(e);
    setFieldValue('gender', value);
  };

  return (
    <Flex alignItems="center">
      <CustomFormLabel label={heading} />
      {isEditing ? (
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button
            isActive={gender === 'MALE'}
            value="MALE"
            onClick={(e) => handleButtonClick(e, 'MALE')}
            fontWeight="normal"
            lineHeight="base"
          >
            {t('Profiles.ProfileCard.Gender.MALE')}
          </Button>
          <Button
            isActive={gender === 'FEMALE'}
            onClick={(e) => handleButtonClick(e, 'FEMALE')}
            fontWeight="normal"
            lineHeight="base"
          >
            {t('Profiles.ProfileCard.Gender.FEMALE')}
          </Button>
        </ButtonGroup>
      ) : (
        <Box
          minH={8}
          py={1}
          px={3}
          cursor="pointer"
          _hover={{ bg }}
          borderRadius="md"
          minW={120}
          w="fit-content"
        >
          <Text
            {...getEditButtonProps()}
            pl="px"
            fontSize="sm"
            opacity={!gender ? 0.48 : undefined}
            lineHeight="base"
            pt={0.5}
          >
            {gender
              ? t(`Profiles.ProfileCard.Gender.${gender}`)
              : t('components:EditableComponents.Edit')}
          </Text>
        </Box>
      )}
    </Flex>
  );
}

export default EditableGenderButtons;
