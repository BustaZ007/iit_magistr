import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { CreateEntityDrawer } from '../../elements/create-entity-drawer';
import { VALIDATION_SCHEMAS } from '../../consts';
import {
  useCreatePersonWithData,
  useGetProfilesFields,
  useSearchPersonsByImage,
} from '../../domains/profiles';
import { handlePersonOperation, TInitialValue } from '../../helpers';
import CreateProfileForm from './create-profile-form.component';

type TCreatePersonDrawer = {
  isOpen: boolean;
  onClose: () => void;
};

function CreateProfileDrawer({ isOpen, onClose }: TCreatePersonDrawer) {
  const { t } = useTranslation('pages');
  const { customFields } = useGetProfilesFields();
  const { createPersonWithData, loading: createLoading } =
    useCreatePersonWithData();
  const {
    searchPersons,
    loading,
    error: searchError,
  } = useSearchPersonsByImage();
  const customValues = customFields.reduce(
    (accumulator, key) => ({ ...accumulator, [key]: '' }),
    {}
  );

  const formik = useFormik({
    initialValues: {
      ...customValues,
      gender: '',
      description: '',
      name: '',
      birthday: '',
      image: '',
      profileGroupsIds: [],
    },
    enableReinitialize: true,
    onSubmit: (values: TInitialValue) => {
      handlePersonOperation(values, (info) => {
        createPersonWithData(
          values.image as string,
          values.profileGroupsIds ?? [],
          info,
          onClose
        );
      });
    },
    validationSchema: VALIDATION_SCHEMAS.updateProfileInfo,
  });

  return (
    <CreateEntityDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={t('Profiles.ProfileCard.Creation')}
      formElements={
        <CreateProfileForm
          values={formik.values}
          setFieldValue={formik.setFieldValue}
          errors={formik.errors}
          handleChange={formik.handleChange}
          customFields={customFields}
          searchPersons={searchPersons}
          searchLoading={loading}
          searchError={searchError}
        />
      }
      handleSubmit={formik.handleSubmit}
      isFormButtonDisabled={loading || createLoading}
    />
  );
}

export default CreateProfileDrawer;
