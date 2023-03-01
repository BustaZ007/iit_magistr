import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { useTranslation } from 'react-i18next';
import { CustomFormLabel } from '../../elements';

type TCreatePersonGenderButtons = {
  gender: string;
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

function CreatePersonGenderButtons({
  gender,
  setFieldValue,
  heading,
}: TCreatePersonGenderButtons) {
  const { t } = useTranslation('pages');

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: string
  ) => {
    setFieldValue('gender', value);
  };

  return (
    <Flex alignContent="flex-start">
      <Box py={2}>
        <CustomFormLabel label={heading} />
      </Box>

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
          ml="-1px"
          isActive={gender === 'FEMALE'}
          onClick={(e) => handleButtonClick(e, 'FEMALE')}
          fontWeight="normal"
          lineHeight="base"
        >
          {t('Profiles.ProfileCard.Gender.FEMALE')}
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default CreatePersonGenderButtons;
