import { useDisclosure, VStack, Text } from '@chakra-ui/react';
import { Funnel, Info } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { Aside } from '../../../blocks';
import { TAsideElement } from '../../../consts';
import { isAsideOpen } from '../../../helpers';
import NotificationsFilters from './notifications-filters.component';

function NotificationsAside(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: isAsideOpen(),
  });
  const { t } = useTranslation('pages');
  const asideElements: TAsideElement[] = [
    {
      title: t('Notifications.Aside.Filters.Title'),
      icon: Funnel,
      content: <NotificationsFilters />,
    },
    {
      title: t('Notifications.Aside.Info.Title'),
      icon: Info,
      content: (
        <VStack spacing="4" alignItems="flex-start">
          <Text>{t('Notifications.Aside.Info.Description')}</Text>
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

export default NotificationsAside;
