import { Text, useDisclosure, VStack } from '@chakra-ui/react';
import { Funnel, Info } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { Aside } from '../../../blocks';
import { TAsideElement } from '../../../consts';
import { isAsideOpen } from '../../../helpers';
import AsideFilters from './aside-filters.component';

function ActivitiesAside() {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: isAsideOpen(),
  });
  const { t } = useTranslation('pages');

  const asideElements: TAsideElement[] = [
    {
      title: t('Activities.Aside.Filters.Title'),
      icon: Funnel,
      content: <AsideFilters />,
    },
    {
      title: t('Activities.Aside.Info.Title'),
      icon: Info,
      content: (
        <VStack spacing="4" alignItems="flex-start">
          <Text>{t(`Activities.Aside.Info.Description`)}</Text>
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

export default ActivitiesAside;
