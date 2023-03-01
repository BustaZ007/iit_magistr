import { ApolloError } from '@apollo/client';
import { VStack } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { useTranslation } from 'react-i18next';
import { TFormikOnChange } from '../../consts';
import { TSearchResult } from '../../domains/profiles';
import { DrawerInput } from '../../elements/drawer';
import DrawerDateInput from '../../elements/drawer/drawer-date-input.component';
import { TInitialValue } from '../../helpers';
import CreatePersonGenderButtons from './create-person-gender-buttons.component';
import CreatePersonWatchlists from './create-profile-watchlists.component';
import FormImage from './form-image.component';

type TCreatePersonForm = {
  values: TInitialValue;
  errors: FormikErrors<TInitialValue>;
  handleChange: TFormikOnChange;
  customFields: string[];
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<TInitialValue>>;
  searchPersons: (sourceImage: string) => Promise<TSearchResult[] | undefined>;
  searchLoading: boolean;
  searchError: ApolloError | undefined;
};

function CreateProfileForm({
  values,
  errors,
  handleChange,
  setFieldValue,
  customFields,
  searchError,
  searchLoading,
  searchPersons,
}: TCreatePersonForm) {
  const { t } = useTranslation('pages');

  return (
    <VStack spacing={4} p={6} align="flex-start" boxSizing="content-box">
      <FormImage
        setFieldValue={setFieldValue}
        searchPersons={searchPersons}
        searchLoading={searchLoading}
        searchError={searchError}
      />
      <DrawerInput
        name="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        label={t('Profiles.ProfileCard.Name')}
        id="profile-name"
        autoFocus
      />
      <CreatePersonGenderButtons
        gender={values.gender}
        setFieldValue={setFieldValue}
        heading={t('Profiles.ProfileCard.Gender.Title')}
      />
      <DrawerDateInput
        date={values.birthday}
        name="birthday"
        error={errors.birthday}
        setDate={setFieldValue}
        label={t('Profiles.ProfileCard.Birthday')}
      />
      <DrawerInput
        name="description"
        value={values.description}
        onChange={handleChange}
        error={errors.description}
        label={t('Profiles.ProfileCard.Description')}
        id="profile-description"
      />
      {customFields.map((field) => (
        <DrawerInput
          key={field}
          name={field}
          value={(values[field] as string) ?? ''}
          onChange={handleChange}
          error={errors[field]}
          label={field}
          id={`profile-${field}`}
        />
      ))}
      <CreatePersonWatchlists setFieldValue={setFieldValue} />
    </VStack>
  );
}

export default CreateProfileForm;
