import { dev } from '@3divi/shared-components';
import { Editable, Progress, Stack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { VALIDATION_SCHEMAS } from '../../consts';
import { TModifyGroupData, useUpdateGroup } from '../../domains/group';
import { EditableControlButtons, EditableTextInput } from '../../elements';
import ManageGroupColors from './manage-group-colors.component';

type TManageGroupForm = {
  initialValues: TModifyGroupData | undefined;
  loading: boolean;
  shouldUpdate: boolean;
};

function ManageGroupForm({
  initialValues,
  loading,
  shouldUpdate,
}: TManageGroupForm) {
  const { t } = useTranslation('components');
  const { updateGroup } = useUpdateGroup();
  const formik = useFormik({
    initialValues: initialValues!,
    validationSchema: VALIDATION_SCHEMAS.updateCreateGroup,
    enableReinitialize: true,
    onSubmit: (values) => {
      updateGroup(values, initialValues);
    },
  });

  useEffect(() => {
    if (initialValues) {
      formik.setValues(initialValues).catch((error) => dev.log(error));
    }
  }, [shouldUpdate]);

  return loading || !initialValues ? (
    <Progress
      size="xs"
      isIndeterminate
      pos="absolute"
      w="full"
      top={0}
      left={0}
    />
  ) : (
    <form onSubmit={formik.handleSubmit}>
      <Editable>
        <Stack spacing={2}>
          <EditableTextInput
            name="title"
            value={formik.values?.title}
            handleChange={formik.handleChange}
            error={formik.errors.title}
            heading={t('Groups.Name')}
          />
          <ManageGroupColors
            groupColor={formik.values?.groupColor}
            setColor={formik.setFieldValue}
            onChangeColors={formik.handleChange}
          />
        </Stack>
        <EditableControlButtons
          handleResetForm={formik.resetForm}
          isEditing={formik.dirty}
        />
      </Editable>
    </form>
  );
}

export default ManageGroupForm;
