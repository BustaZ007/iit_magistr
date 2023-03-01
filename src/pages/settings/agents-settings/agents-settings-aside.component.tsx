import { isOnPremise } from '@3divi/shared-components';
import {
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Funnel, Info } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { Aside } from '../../../blocks';
import { LinksOnExternalSources, TAsideElement } from '../../../consts';
import { DownloadButtonsElement } from '../../../elements';
import { isAsideOpen } from '../../../helpers';
import AgentsSettingsFilters from './agents-settings-filters';

function AgentsSettingsAside() {
  const color = useColorModeValue('blue.500', 'blue.200');
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: isAsideOpen(),
  });
  const { t } = useTranslation('pages');

  const asideElements: TAsideElement[] = [
    {
      title: t('Settings.Aside.Filters.Title'),
      icon: Funnel,
      content: <AgentsSettingsFilters />,
    },
    {
      title: t('Agents.RightMenu.Info.title'),
      icon: Info,
      content: (
        <VStack spacing="4" alignItems="flex-start">
          <Text>{t('Agents.RightMenu.Info.description')}</Text>
          {!isOnPremise() && (
            <>
              <VStack spacing="1" w="full" alignItems="flex-start">
                <Text fontSize="sm">
                  {t('Agents.RightMenu.Download.description')}
                </Text>
                <DownloadButtonsElement />
              </VStack>
              <Link
                href={LinksOnExternalSources.INSTALLING_AND_CONFIGURATION_AGENT}
                isExternal
                color={color}
                fontSize="sm"
                id="agent-install-instructions-link"
              >
                {t('Agents.RightMenu.Info.hrefs.instruction')}
              </Link>
            </>
          )}
        </VStack>
      ),
    },
  ];

  return (
    <Aside
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      elements={asideElements}
    />
  );
}

export default AgentsSettingsAside;
