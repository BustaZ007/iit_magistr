import { Alert, AlertIcon, Text } from "@chakra-ui/react";
import { ChartBar, MonitorPlay, ShoppingBagOpen } from "phosphor-react";
import { SectionButtonBlock, DashboardSectionBlock } from "../../blocks";

function AnalyticsModule() {
  return (
    <DashboardSectionBlock
      icon={ChartBar}
      title="Dashboard.Widgets.Analytic.Title"
      loading
    >
      <Alert status="info" borderRadius="lg">
        <AlertIcon />
        <Text>Dashboard.Widgets.Analytic</Text>
      </Alert>
      <SectionButtonBlock
        id="crowd-analytics-link-dashboard"
        icon={ShoppingBagOpen}
        title="Dashboard.Widgets.Analytic.Retail"
        subtitle="Dashboard.Widgets.Analytic.RetailDescription"
        url=""
        isDisabled={false}
      />
      <SectionButtonBlock
        id="digital-signage-analytics-link-dashboard"
        icon={MonitorPlay}
        title="Dashboard.Widgets.Analytic.Digital"
        subtitle="Dashboard.Widgets.Analytic.DigitalDescription"
        url=""
        isDisabled={false}
      />
    </DashboardSectionBlock>
  );
}

export default AnalyticsModule;
