import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { X } from 'phosphor-react';
import { useEffect } from 'react';
import { TAsideElement } from '../consts';
import { getUrlPageName } from '../helpers';

type TAside = {
  elements: TAsideElement[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function Aside({ elements, isOpen, onOpen, onClose }: TAside) {
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300');
  const boxBg = useColorModeValue('white', 'gray.700');

  const handleAsideClose = () => {
    onClose();
    localStorage.setItem(getUrlPageName(), 'closed');
  };

  const handleAsideOpen = () => {
    onOpen();
    localStorage.setItem(getUrlPageName(), 'open');
  };

  useEffect(() => {
    if (!localStorage.getItem(getUrlPageName())) {
      handleAsideOpen();
    }
  }, []);

  return (
    <Box
      h="100%"
      flexShrink={0}
      overflowY="auto"
      overflowX="hidden"
      bg={boxBg}
      borderLeft="1px"
      borderColor={borderColor}
      boxShadow={isOpen ? 'lg' : undefined}
    >
      <Accordion defaultIndex={[0]}>
        <Box position="relative">
          {isOpen && (
            <IconButton
              position="absolute"
              right="4"
              top="3"
              onClick={handleAsideClose}
              aria-label="Close aside panel"
              icon={<Icon as={X} w="5" h="5" />}
              size="sm"
              variant="ghost"
            />
          )}
          {elements.map(({ title, icon, content }, index) => (
            <AccordionItem key={title} border="none">
              <AccordionButton
                pl={isOpen ? '6' : '4'}
                py="4"
                onClick={handleAsideOpen}
                id="" //! Поменять id в GTM
              >
                <HStack spacing={3} w="100%">
                  <Icon as={icon} w="6" h="6" />
                  {isOpen && (
                    <>
                      <Heading fontSize="md" fontWeight="medium">
                        {title}
                      </Heading>
                      {!!index && (
                        <>
                          <Spacer />
                          <Box pr="1.5">
                            <AccordionIcon />
                          </Box>
                        </>
                      )}
                    </>
                  )}
                </HStack>
              </AccordionButton>
              {isOpen && (
                <Box pl="6" w="xs" mt="-px">
                  <Divider borderColor={borderColor} />
                  <AccordionPanel pb="8" pl="0" pt="4">
                    {content}
                  </AccordionPanel>
                  {index !== elements.length - 1 && (
                    <Divider mt="-1px" borderColor={borderColor} />
                  )}
                </Box>
              )}
            </AccordionItem>
          ))}
        </Box>
      </Accordion>
    </Box>
  );
}

export default Aside;
