import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { Funnel, Info } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { Aside } from '../../../blocks';
import { TAsideElement } from '../../../consts';
import { isAsideOpen } from '../../../helpers';
import TriggersSettingsFilters from './triggers-settings-filters/triggers-settings-filters.component';

function TriggersSettingsAside() {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: isAsideOpen(),
  });
  const { t } = useTranslation('pages');

  const asideElements: TAsideElement[] = [
    {
      title: t('Settings.Aside.Filters.Title'),
      icon: Funnel,
      content: <TriggersSettingsFilters />,
    },
    {
      title: t('Settings.Aside.Info.Title'),
      icon: Info,
      content: (
        <Box>
          <Text>{t(`Settings.Aside.Triggers.Description`)}</Text>
        </Box>
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

export default TriggersSettingsAside;
