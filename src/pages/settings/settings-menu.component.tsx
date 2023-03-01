import { comparePathname } from '@3divi/shared-components';
import { Box, Button, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PATHNAMES } from '../../consts';

const SettingsPageItems = [
  // Вернуть, когда появится рабочий агент с функционалом порогов для кластеризации активностей и нотификаций
  // { title: 'Settings.General.Title', path: PATHNAMES.settings_general },
  { title: 'Settings.Groups.Title', path: PATHNAMES.settings_groups },
  { title: 'Agents.Title', path: PATHNAMES.settings_agents },
  { title: 'Settings.Triggers.Title', path: PATHNAMES.settings_triggers },
  { title: 'Settings.Endpoints.Title', path: PATHNAMES.settings_endpoints },
  { title: 'Settings.Fields.Title', path: PATHNAMES.settings_fields },
  { title: 'Settings.Integration.Title', path: PATHNAMES.settings_integration },
];

function SettingsMenu() {
  const { t } = useTranslation('pages');
  const bg = useColorModeValue('gray.100', 'gray.700');
  const groupBtnHoverBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100');
  const groupBtnBg = useColorModeValue('white', 'whiteAlpha.200');
  const navigate = useNavigate();

  const handleSettingsItemClick = (path: string) => {
    navigate(path);
  };
  return (
    <Stack
      py={2}
      spacing="px"
      bg={bg}
      w={{ base: '150px', lg: '200px' }}
      flexShrink={0}
      overflowX="hidden"
    >
      {SettingsPageItems.map((item) => (
        <Box pl={2} pr={2} key={item.path}>
          <Button
            px={1}
            fontWeight="normal"
            variant="ghost"
            w="full"
            _hover={{
              backgroundColor: groupBtnHoverBg,
            }}
            backgroundColor={
              comparePathname(item.path) ? groupBtnBg : undefined
            }
            onClick={() => handleSettingsItemClick(item.path)}
          >
            <Text
              pl={3}
              textOverflow="ellipsis"
              overflow="hidden"
              wordBreak="break-all"
              w="full"
              textAlign="left"
            >
              {t(item.title)}
            </Text>
          </Button>
        </Box>
      ))}
    </Stack>
  );
}

export default SettingsMenu;
