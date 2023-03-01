import { Editable, Progress, Stack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { TTrigger, useUpdateTrigger } from '../../domains/triggers';
import { EditableControlButtons, EditableTextInput } from '../../elements';

type TManageTriggerForm = {
  trigger?: TTrigger;
  loading: boolean;
};

function ManageTriggerForm({ trigger, loading }: TManageTriggerForm) {
  const { t } = useTranslation('components');
  const { updateTrigger } = useUpdateTrigger(trigger?.id ?? '');
  const formik = useFormik({
    initialValues: {
      title: trigger?.title ?? '',
    },
    enableReinitialize: true,
    onSubmit: (values) => updateTrigger(values.title),
  });

  return loading ? (
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
            heading={t('Modal.ManageTrigger.Title')}
          />
        </Stack>
        <EditableControlButtons
          isEditing={formik.dirty}
          handleResetForm={formik.resetForm}
        />
      </Editable>
    </form>
  );
}

export default ManageTriggerForm;
