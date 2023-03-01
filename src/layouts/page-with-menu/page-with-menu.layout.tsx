import {
  Box,
  Flex,
  Link,
  Text,
  useBreakpointValue,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { isOnPremise, useCustomQuery } from '@3divi/shared-components';
import { Logo, MenuItemElement } from '../../elements';
import { HeaderModule, LicenseAlert } from '../../modules';
import {
  LinksOnExternalSources,
  MenuItems,
  Names,
  PATHNAMES,
} from '../../consts';
import Notifications from '../../modules/notifications/notifications.module';
import { pollingDateVar } from '../../providers/apollo-client';
import { PackageLoadingPerson } from '../../modals';
import { useWorkspace } from '../../domains/workspaces';
import { useGetUnreadNotificationsCount } from '../../domains/endpoints';
import { GET_AGENTS, TAgent } from '../../domains/agent';
import { IS_AGENTS_MESSAGE_SHOWED } from '../../consts/cookies.const';
import UpdateOldAgents from '../../modals/update-old-agents/update-old.agents.modal';
import { useGetPlatformInformation } from '../../domains/common';

const FoundationYear = import.meta.env.VITE_FOUNDATION_YEAR;
type TGetAgent = {
  items: {
    totalCount: number;
    collectionItems?: TAgent[];
  };
};
function PageWithMenuLayout() {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const pollingDate = useReactiveVar(pollingDateVar);
  const logoSize = useBreakpointValue({ base: 7, lg: 6 }) || 7;
  const showCopyright = useBreakpointValue({ base: false, lg: true });
  const { pathname } = useLocation();
  const { isWorkspace } = useWorkspace();
  const { version } = useGetPlatformInformation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { notificationsCount } =
    useGetUnreadNotificationsCount('cache-and-network');
  const { data, loading } = useCustomQuery<TGetAgent>(GET_AGENTS, {
    variables: {
      withItems: false,
      filter: JSON.stringify({ creation_date__lte: '2023-01-31T00:00+05:00' }), // Убрать, когда сообщение уже будет не актуально
    },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!isWorkspace) {
      navigate(PATHNAMES.workspaces, { replace: true });
    }
  }, [isWorkspace]);

  useEffect(() => {
    const checkAgentsMessage = localStorage.getItem(IS_AGENTS_MESSAGE_SHOWED);
    if (
      !isOnPremise() &&
      checkAgentsMessage !== 'true' &&
      !loading &&
      !!data?.items.totalCount
    ) {
      onOpen();
    }
  }, [loading]);

  return (
    <Flex direction="column" h="100vh" maxH="100vh" overflow="hidden" w="100%">
      {!isOnPremise() && <LicenseAlert />}
      <Flex>
        <Box
          flexShrink={0}
          bg="gray.800"
          w={{ base: 'auto', lg: '216px' }}
          minH="14"
          borderRight="1px"
          borderBottom="1px"
          borderColor="whiteAlpha.200"
        >
          <Box px="4" py="3.5">
            <Logo mode="dark" h={logoSize} />
          </Box>
        </Box>
        <HeaderModule />
      </Flex>
      <Flex flexGrow={1} overflow="hidden">
        <VStack
          h="full"
          flexShrink={0}
          w={{ base: 'auto', lg: '216px' }}
          overflowX="hidden"
          overflowY="auto"
          bg="gray.800"
          borderRight="1px"
          borderColor="whiteAlpha.200"
        >
          <VStack
            width="full"
            spacing="px"
            alignItems="flex-start"
            p="2"
            flexGrow={1}
            position="relative"
          >
            {MenuItems.map((menuItem) => (
              <MenuItemElement
                key={menuItem.title}
                icon={menuItem.icon}
                to={menuItem.to[0]}
                title={menuItem.title}
                active={
                  !!menuItem.to.find(
                    (element) =>
                      element.replace(/\//g, '') === pathname.replace(/\//g, '')
                  )
                }
                count={
                  menuItem.to[0] === PATHNAMES.notifications
                    ? notificationsCount
                    : undefined
                }
              />
            ))}
          </VStack>
          <VStack p={2}>
            <Text fontSize="xs" textAlign="left" color="gray.600">
              {version && t('Version', { version })}
              {version && Names.COMPANY === '3DiVi Inc.' && (
                <Link
                  href={`${
                    LinksOnExternalSources.RELEASE_NOTES
                  }${version.replaceAll('.', '_')}`}
                  isExternal
                  textDecoration="underline"
                >
                  {t('WhatsNew')}
                </Link>
              )}
            </Text>
            {showCopyright && (
              <Text fontSize="xs" color="gray.600" textAlign="center">
                {`© ${t('Copyright')} ${Names.COMPANY} ${
                  FoundationYear === '-' ? '' : `${FoundationYear}-`
                }2022`}
              </Text>
            )}
          </VStack>
        </VStack>
        <Outlet />
      </Flex>
      <Box position="absolute" top="-999px" left="-999px">
        {PATHNAMES.notifications.replace(/\//g, '') !==
          pathname.replace(/\//g, '') &&
          !pollingDate.notifications && <Notifications />}
        <PackageLoadingPerson />
      </Box>
      {isOpen && <UpdateOldAgents isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
}

export default PageWithMenuLayout;
