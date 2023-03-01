import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { Info } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { Aside } from '../../../blocks';
import { TAsideElement } from '../../../consts';
import { isAsideOpen } from '../../../helpers';

function FieldsSettingsAside() {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: isAsideOpen(),
  });
  const { t } = useTranslation('pages');

  const asideElements: TAsideElement[] = [
    {
      title: t('Settings.Aside.Info.Title'),
      icon: Info,
      content: (
        <Box>
          <Box pb={3}>
            <Text pb={2}>{t(`Settings.Aside.Fields.Description`)}</Text>
          </Box>
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

export default FieldsSettingsAside;
