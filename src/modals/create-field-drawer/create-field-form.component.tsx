import { Stack } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { DrawerInput } from '../../elements/drawer';
import CreateFieldSelect from './create-field-select.component';

type TCreateFieldFormValues = {
  name: string;
  type: string;
};

type TCreateFieldForm = {
  values: TCreateFieldFormValues;
  errors: FormikErrors<TCreateFieldFormValues>;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

function CreateFieldForm({ values, handleChange, errors }: TCreateFieldForm) {
  const { t } = useTranslation('components');

  return (
    <Stack spacing={4} p={6}>
      <CreateFieldSelect
        elements={['profile', 'camera']}
        handleChange={handleChange}
        heading={t('Modal.CreateField.Type.Title')}
        name="type"
        value={values.type}
      />
      <DrawerInput
        error={errors.name}
        id="name"
        name="name"
        label={t('Modal.CreateField.FieldName')}
        onChange={handleChange}
        value={values.name}
      />
    </Stack>
  );
}

export default CreateFieldForm;
