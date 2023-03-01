import { VStack } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { useTranslation } from 'react-i18next';
import { TFormikOnChange } from '../../consts';
import { DrawerInput } from '../../elements/drawer';
import GroupColors from './group-colors.element';

type TCreateGroupValues = {
  id: string;
  title: string;
  groupColor: string;
};

type TCreateGroupForm = {
  values: TCreateGroupValues;
  handleChange: TFormikOnChange;
  errors: FormikErrors<TCreateGroupValues>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<TCreateGroupValues>>;
};

function CreateGroupForm({
  values,
  handleChange,
  errors,
  setFieldValue,
}: TCreateGroupForm) {
  const { t } = useTranslation('components');
  return (
    <VStack spacing={4} p={6} align="flex-start" boxSizing="content-box">
      <DrawerInput
        value={values.title}
        error={errors.title}
        onChange={handleChange}
        label={t('Groups.Name')}
        id="group-name"
        name="title"
        autoFocus
      />

      <GroupColors
        groupColor={values.groupColor}
        setColor={setFieldValue}
        onChangeColors={handleChange}
      />
    </VStack>
  );
}

export default CreateGroupForm;
