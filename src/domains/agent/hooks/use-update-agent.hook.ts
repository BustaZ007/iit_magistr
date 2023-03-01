import { useTranslation } from 'react-i18next';
import { useCustomMutation } from '@3divi/shared-components';
import {
  AgentUpdateInput,
  GET_AGENTS,
  GET_AGENT_BY_ID,
  TUpdateAgentResult,
  UPDATE_AGENT,
} from '../requests';

const useUpdateAgent = (onClose: () => void) => {
  const { t } = useTranslation('components');
  const [updateAgentReq, { loading, error }] =
    useCustomMutation<TUpdateAgentResult>(UPDATE_AGENT, {
      loadingToast: t(`Modal.UpdateAgent.Updating`),
      successToast: t(`Modal.UpdateAgent.SuccessUpdate`),
      errorToast: t(`Modal.UpdateAgent.ErrorUpdate`),
      onError: onClose,
    });

  const updateAgent = (agentData: AgentUpdateInput, agentId: string) => {
    updateAgentReq({
      variables: {
        agentData,
        agentId,
      },
      refetchQueries: [GET_AGENTS, GET_AGENT_BY_ID],
    });
  };

  return {
    loading,
    updateAgent,
    error,
  };
};

export { useUpdateAgent };
