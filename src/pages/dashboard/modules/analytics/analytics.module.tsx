import { useEffect, useState } from 'react';
import { Alert, AlertIcon, Link, Text } from '@chakra-ui/react';
import { ChartBar, MonitorPlay, ShoppingBagOpen } from 'phosphor-react';
import { useCustomQuery } from '@3divi/shared-components';
import { useTranslation } from 'react-i18next';
import { SectionButtonBlock, DashboardSectionBlock } from '../../blocks';
import { GET_KIBANA_INFO, TKibanaInfo } from '../../requests';

function AnalyticsModule() {
  const { t } = useTranslation('pages');
  const [isLoading, setLoadingStatus] = useState<boolean>(true);
  const [email] = useState('support-platform@3divi.com');
  const [isError, setErrorStatus] = useState<boolean>(false);
  const { data, stopPolling } = useCustomQuery<TKibanaInfo>(GET_KIBANA_INFO, {
    isPolling: true,
  });

  useEffect(() => {
    const kibanaUrls = data?.analytics;
    if (kibanaUrls) {
      const { retail, advertising } = kibanaUrls;
      if (advertising?.includes('http') && retail?.includes('http')) {
        setLoadingStatus(false);
        stopPolling();
      } else if (retail === 'failed' || advertising === 'failed') {
        setLoadingStatus(false);
        setErrorStatus(true);
        stopPolling();
      }
    }
  }, [data, stopPolling]);

  return (
    <DashboardSectionBlock
      icon={ChartBar}
      title={t('Dashboard.Widgets.Analytic.Title')}
      loading={isLoading}
    >
      <Alert status={isError ? 'error' : 'info'} borderRadius="lg">
        <AlertIcon />
        <Text>
          {t(`Dashboard.Widgets.Analytic.${isError ? 'Error' : 'Login'}`)}
          {isError && (
            <Link display="inline" href={`mailto:${email}`} fontWeight="bold">
              {email}
            </Link>
          )}
        </Text>
      </Alert>
      <SectionButtonBlock
        id="crowd-analytics-link-dashboard"
        icon={ShoppingBagOpen}
        title={t('Dashboard.Widgets.Analytic.Retail')}
        subtitle={t('Dashboard.Widgets.Analytic.RetailDescription')}
        url={data?.analytics?.retail ?? ''}
        isDisabled={isError}
      />
      <SectionButtonBlock
        id="digital-signage-analytics-link-dashboard"
        icon={MonitorPlay}
        title={t('Dashboard.Widgets.Analytic.Digital')}
        subtitle={t('Dashboard.Widgets.Analytic.DigitalDescription')}
        url={data?.analytics?.advertising ?? ''}
        isDisabled={isError}
      />
    </DashboardSectionBlock>
  );
}

export default AnalyticsModule;
