import {
  Text,
  Box,
  Stack,
  Button,
  ListItem,
  OrderedList,
  Link,
} from '@chakra-ui/react';
import { ArrowBendLeftDown } from 'phosphor-react';
import { Trans, useTranslation } from 'react-i18next';
import { isOnPremise } from '@3divi/shared-components';
import { DashboardSectionBlock } from '../../blocks';
import { DownloadButtonsElement } from '../../../../elements';
import { LinksOnExternalSources } from '../../../../consts';

export function GettingStartedModule() {
  const { t } = useTranslation('pages');

  const link = (href: string) => (
    <Button
      id="what-is-agent-link-dashboard"
      as={Link}
      isExternal
      variant="link"
      colorScheme="blue"
      fontWeight="normal"
      href={href}
    />
  );

  return (
    <DashboardSectionBlock
      icon={ArrowBendLeftDown}
      title={t('Dashboard.GettingStarted')}
    >
      <OrderedList spacing={1}>
        <ListItem>
          {!isOnPremise() ? (
            <Stack spacing={1} w="100%">
              <Text>{t('Dashboard.DownloadNuitrackAgent')}</Text>
              <Box py="2">
                <DownloadButtonsElement />
              </Box>
            </Stack>
          ) : (
            t('Dashboard.InstallOnPremAgent')
          )}
        </ListItem>
        <ListItem>{t('Dashboard.StartAgentAndAcivation')}</ListItem>
        <ListItem>{t('Dashboard.CheckAgentSendData')}</ListItem>
      </OrderedList>

      <Text>
        {isOnPremise() ? (
          t('Dashboard.AgentInfo')
        ) : (
          <Trans
            i18nKey="pages:Dashboard.GetStartedWithPlatform"
            components={{
              whatIsAgentLink: link(LinksOnExternalSources.WHAT_IS_AN_AGENT),
            }}
          />
        )}
      </Text>
    </DashboardSectionBlock>
  );
}
