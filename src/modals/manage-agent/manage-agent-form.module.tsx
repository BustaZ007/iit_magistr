import { Editable, Stack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { VALIDATION_SCHEMAS } from '../../consts';
import { TAgent, useUpdateAgent } from '../../domains/agent';
import { EditableControlButtons, EditableTextInput } from '../../elements';

type TRenameAgentFormModule = {
  onClose: () => void;
  agent: TAgent;
};

function ManageAgentFormModule({ onClose, agent }: TRenameAgentFormModule) {
  const { t } = useTranslation('components');
  const { updateAgent } = useUpdateAgent(onClose);

  const formik = useFormik({
    initialValues: {
      title: agent?.title ?? '',
    },
    validationSchema: VALIDATION_SCHEMAS.updateAgent,
    enableReinitialize: true,
    onSubmit: (values) => {
      updateAgent(values, agent.id);
    },
    validateOnBlur: true,
  });

  return (
    <form onSubmit={formik.handleSubmit} id="rename-agent-modal-submit-form">
      <Stack spacing={4}>
        <Editable>
          <EditableTextInput
            value={formik.values.title}
            name="title"
            heading={t('Modal.UpdateAgent.Label')}
            handleChange={formik.handleChange}
            error={formik.errors.title}
            maxLength={30}
          />
          <EditableControlButtons
            handleResetForm={formik.resetForm}
            isEditing={formik.dirty}
          />
        </Editable>
      </Stack>
    </form>
  );
}

export default ManageAgentFormModule;
