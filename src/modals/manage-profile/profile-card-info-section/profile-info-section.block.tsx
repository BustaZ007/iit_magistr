import { useTranslation } from 'react-i18next';
import { VStack, Stack, Editable, Box } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { VALIDATION_SCHEMAS } from '../../../consts';
import PersonAvatar from './person-avatar.component';
import {
  EditableControlButtons,
  EditableDateInput,
  EditableGenderButtons,
  EditableTextInput,
} from '../../../elements';
import {
  deleteProfileInfoIdsFields,
  filterProfilesRequiredFields,
  TProfileInfo,
  useUpdateProfileInfoCache,
} from '../../../domains/profiles';

type TProfileInfoSection = {
  avatar: string;
  profileId: string;
  info: TProfileInfo;
};

function ProfileInfoSection({
  avatar,
  profileId,
  info,
}: TProfileInfoSection): JSX.Element {
  const { t } = useTranslation('pages');
  const { updateProfileInfoCache } = useUpdateProfileInfoCache();
  const customProfilesFields = filterProfilesRequiredFields(Object.keys(info));

  const formik = useFormik<{ [x: string]: string }>({
    initialValues: deleteProfileInfoIdsFields(info),
    enableReinitialize: true,
    validationSchema: VALIDATION_SCHEMAS.updateProfileInfo,
    onSubmit: (values) => {
      updateProfileInfoCache(values, profileId);
    },
  });

  return (
    <VStack spacing={6} alignItems="flex-start">
      <PersonAvatar avatar={avatar} personId={profileId} />
      <Box flexGrow={1} w="full" display="flex" flexDir="column">
        <form onSubmit={formik.handleSubmit}>
          <Editable>
            <Stack spacing={2} align="flex-start" boxSizing="content-box">
              <EditableTextInput
                value={formik.values.name ?? ''}
                name="name"
                heading={t('Profiles.ProfileCard.Name')}
                handleChange={formik.handleChange}
                error={formik.errors.name}
              />
              <EditableGenderButtons
                gender={formik.values.gender ? formik.values.gender : 'MALE'}
                setFieldValue={formik.setFieldValue}
                heading={t('Profiles.ProfileCard.Gender.Title')}
              />
              <EditableDateInput
                name="birthday"
                date={formik.values.birthday ?? ''}
                error={formik.errors.birthday}
                setDate={formik.setFieldValue}
                heading={t('Profiles.ProfileCard.Birthday')}
              />
              <EditableTextInput
                value={formik.values.description ?? ''}
                name="description"
                heading={t('Profiles.ProfileCard.Description')}
                handleChange={formik.handleChange}
                error={formik.errors.description}
              />
              {customProfilesFields.map((customField) => (
                <EditableTextInput
                  key={customField}
                  value={formik.values[customField] ?? ''}
                  name={customField}
                  heading={customField}
                  handleChange={formik.handleChange}
                  error={formik.errors.description}
                  maxLength={255}
                />
              ))}
            </Stack>
            <EditableControlButtons
              handleResetForm={formik.resetForm}
              isEditing={formik.dirty}
            />
          </Editable>
        </form>
      </Box>
    </VStack>
  );
}

export default ProfileInfoSection;
