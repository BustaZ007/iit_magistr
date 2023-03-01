import {
  Box,
  Heading,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Info } from 'phosphor-react';
import { Trans, useTranslation } from 'react-i18next';
import { Aside } from '../../../blocks';
import { LinksOnExternalSources, TAsideElement } from '../../../consts';
import { isAsideOpen } from '../../../helpers';

function GeneralSettingsAside() {
  const color = useColorModeValue('blue.500', 'blue.200');
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: isAsideOpen(),
  });
  const { t } = useTranslation('pages');

  const link = (href: string) => (
    <Text
      id="setting-up-environment-link"
      as={Link}
      isExternal
      variant="link"
      fontWeight="normal"
      href={href}
      color={color}
      display="inline-block"
    />
  );

  const asideElements: TAsideElement[] = [
    {
      title: t('Settings.Aside.Info.Title'),
      icon: Info,
      content: (
        <Box>
          <Box pb={3}>
            <Text pb={2}>{t(`Settings.Aside.General.Description`)}</Text>
            <Text>
              <Trans
                i18nKey="pages:Settings.Aside.General.CameraHint"
                components={{
                  settingsLink: link(
                    LinksOnExternalSources.SETTING_UP_ENVIRONMENT
                  ),
                }}
              />
            </Text>
          </Box>

          <Box py={3}>
            <Heading as="h2" fontSize="md" pb={2}>
              {t(`Settings.Aside.General.Activity.Title`)}
            </Heading>
            <Text pb={2}>
              {t(`Settings.Aside.General.Activity.Description`)}
            </Text>
            <Text>{t(`Settings.Aside.General.RecommendValue`)}</Text>
          </Box>

          <Box pt={3}>
            <Heading as="h2" fontSize="md" pb={2}>
              {t(`Settings.Aside.General.Notification.Title`)}
            </Heading>
            <Text pb={2}>
              {t(`Settings.Aside.General.Notification.Description`)}
            </Text>
            <Text>{t(`Settings.Aside.General.RecommendValue`)}</Text>
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

export default GeneralSettingsAside;
