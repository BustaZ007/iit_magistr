import { Box, Button, HStack, Icon, Text } from '@chakra-ui/react';
import { LinuxLogo, WindowsLogo } from 'phosphor-react';
import { useLocation } from 'react-router-dom';
import { LinksOnExternalSources } from '../consts';

type TDownloadButtonsElement = {
  handleClick?: () => void;
};

function DownloadButtonsElement({ handleClick }: TDownloadButtonsElement) {
  const location = useLocation();
  const pageName =
    location.pathname.slice(1, location.pathname.length - 1) ?? 'dashboard'; // Взять имя страницы без /

  return (
    <HStack spacing="2" w="100%">
      <Button
        id={`windows-agent-download-button-${pageName}`}
        size="lg"
        px="4"
        as="a"
        target="_blank"
        download
        href={LinksOnExternalSources.WINDOWS_AGENT_DOWNLOAD}
        loadingText="Windows"
        justifyContent="flex-start"
        variant="outline"
        flexGrow={1}
        flexBasis={0}
        leftIcon={<Icon as={WindowsLogo} w="6" h="6" weight="light" />}
        colorScheme="blue"
        onClick={handleClick}
      >
        <Box textAlign="left" fontWeight="normal">
          <Text fontSize="sm">Windows</Text>
          <Text fontSize="xs" opacity={0.48}>
            x64
          </Text>
        </Box>
      </Button>
      <Button
        id={`linux-agent-download-button-${pageName}`}
        size="lg"
        px="4"
        as="a"
        target="_blank"
        download
        href={LinksOnExternalSources.LINUX_AGENT_DOWNLOAD}
        loadingText="Linux"
        justifyContent="flex-start"
        variant="outline"
        flexGrow={1}
        flexBasis={0}
        onClick={handleClick}
        leftIcon={<Icon as={LinuxLogo} w="6" h="6" weight="light" />}
      >
        <Box textAlign="left" fontWeight="normal">
          <Text fontSize="sm">Linux</Text>
          <Text fontSize="xs" opacity={0.48}>
            x64
          </Text>
        </Box>
      </Button>
    </HStack>
  );
}

export default DownloadButtonsElement;
