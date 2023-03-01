import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import { DELETE_AGENT, GET_AGENTS } from '..';

type TDeleteAgentResult = {
  deleteAgent: {
    ok: boolean;
  };
};

const useDeleteAgent = (id: string, onClose?: () => void) => {
  const { t } = useTranslation('components');
  const [deleteAgentReq, { loading, error }] =
    useCustomMutation<TDeleteAgentResult>(DELETE_AGENT, {
      loadingToast: t(`Modal.DeleteAgent.Deleting`),
      successToast: t(`Modal.DeleteAgent.SuccessDelete`),
      errorToast: t(`Modal.DeleteAgent.ErrorDelete`),
    });

  const deleteAgent = () => {
    deleteAgentReq({
      variables: {
        agentIds: [id],
      },
      refetchQueries: [GET_AGENTS],
    });
    if (onClose) onClose();
  };

  return {
    loading,
    deleteAgent,
    error,
  };
};

export { useDeleteAgent };
