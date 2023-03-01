import { useCustomQuery, workspaceVar } from '@3divi/shared-components';
import { Box, Button, ButtonGroup, Progress } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityThresholds, NotificationThresholds } from '../../../consts';
import {
  GET_WORKSPACES,
  TWorkspace,
  TWorkspacesCollection,
  useUpdateWorkspaceConfig,
} from '../../../domains/workspaces';
import { ThresholdSection } from './components';

function GeneralSettingsPage() {
  const { t } = useTranslation('pages');
  const { updateWorkspaceConfig, loading: updateLoading } =
    useUpdateWorkspaceConfig();
  const { data, loading } = useCustomQuery<TWorkspacesCollection>(
    GET_WORKSPACES,
    { fetchPolicy: 'cache-and-network', nextFetchPolicy: 'cache-only' }
  );
  const workspaceConfig = data?.workspaces.find(
    (workspace: TWorkspace) => workspace.id === workspaceVar()
  )?.config;

  const [activityThreshold, setActivityThreshold] = useState<string>(
    workspaceConfig?.activity_score_threshold?.toString() ?? ''
  );
  const [notificationThreshold, setNotificationThreshold] = useState<string>(
    workspaceConfig?.notification_score_threshold?.toString() ?? ''
  );

  useEffect(() => {
    if (workspaceConfig) {
      setNotificationThreshold(
        workspaceConfig?.notification_score_threshold?.toString()
      );
      setActivityThreshold(
        workspaceConfig?.activity_score_threshold?.toString()
      );
    }
  }, [workspaceConfig]);

  const handleSaveSettings = useCallback(() => {
    updateWorkspaceConfig(
      Number(activityThreshold ?? 0),
      Number(notificationThreshold ?? 0)
    );
  }, [activityThreshold, notificationThreshold, updateWorkspaceConfig]);

  const handleResetSettings = useCallback(() => {
    if (workspaceConfig) {
      setNotificationThreshold(
        workspaceConfig.notification_score_threshold.toString()
      );
      setActivityThreshold(
        workspaceConfig?.activity_score_threshold?.toString()
      );
    }
  }, [workspaceConfig]);

  if (!workspaceConfig || loading) {
    return <Progress size="xs" isIndeterminate />;
  }

  return (
    <Box p={6} h="100%" w="100%" overflowY="auto">
      <ThresholdSection
        title={t('Settings.General.Activity.Title')}
        setThresholdScore={setActivityThreshold}
        thresholdScore={activityThreshold}
        marks={[
          ActivityThresholds.MIN,
          ActivityThresholds.NORMAL,
          ActivityThresholds.MAX,
        ]}
      />
      <ThresholdSection
        title={t('Settings.General.Notification.Title')}
        setThresholdScore={setNotificationThreshold}
        thresholdScore={notificationThreshold}
        marks={[
          NotificationThresholds.MIN,
          NotificationThresholds.NORMAL,
          NotificationThresholds.MAX,
        ]}
      />
      {(Number(notificationThreshold) !==
        workspaceConfig.notification_score_threshold ||
        Number(activityThreshold) !==
          workspaceConfig.activity_score_threshold) && (
        <ButtonGroup spacing={4}>
          <Button
            colorScheme="blue"
            isDisabled={updateLoading}
            onClick={handleSaveSettings}
          >
            {t('common:Save')}
          </Button>
          <Button isDisabled={updateLoading} onClick={handleResetSettings}>
            {t('common:Cancel')}
          </Button>
        </ButtonGroup>
      )}
    </Box>
  );
}

export default GeneralSettingsPage;
