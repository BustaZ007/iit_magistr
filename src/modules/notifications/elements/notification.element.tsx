import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';
import { X } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { PATHNAMES } from '../../../consts';
import {
  TNotificationInfo,
  useViewNotification,
} from '../../../domains/notification';
import { getContrastColor, getImageUrl } from '../../../helpers';

type TNotification = {
  notification: TNotificationInfo;
};

function Notification({ notification }: TNotification) {
  const { viewNotification } = useViewNotification();
  const notiBg = useColorModeValue('white', 'gray.800');
  const btnColor = useColorModeValue('gray.400', 'gray.600');
  const btnHoverColor = useColorModeValue('gray.800', 'gray.300');

  let imageId = notification.avatarId;

  if (notification.realtimeBodyPhotoId) {
    imageId = notification.realtimeBodyPhotoId;
  } else if (notification.realtimeFacePhotoId) {
    imageId = notification.realtimeFacePhotoId;
  }

  const closeNotification = () => {
    viewNotification(notification.id);
  };

  return (
    <Box
      overflow="hidden"
      bg={notiBg}
      borderRadius="sm"
      boxShadow="lg"
      cursor="pointer"
    >
      <Flex>
        <Flex as={Link} to={PATHNAMES.notifications}>
          <AspectRatio
            minW="74px"
            ratio={1}
            flexGrow={0}
            flexShrink={0}
            bg="gray.900"
            sx={{
              '& > img': {
                objectFit: 'contain',
              },
            }}
          >
            <Image src={getImageUrl(imageId)} objectFit="contain" />
          </AspectRatio>
          <Box w="full" minW={60}>
            <Box
              bg={notification.profileGroupColor}
              px={4}
              py={2}
              fontWeight="semibold"
            >
              <Text
                color={getContrastColor(notification.profileGroupColor ?? '')}
                fontSize="sm"
              >
                {notification.profileGroupTitle}
              </Text>
            </Box>

            <Box alignItems="flex-start" px={4} py={2}>
              <Text fontSize="sm" maxW={200}>
                {notification.name || notification.cameraTitle}
              </Text>

              {notification.name && (
                <Text fontSize="xs" color="gray.600">
                  {notification.cameraTitle}
                </Text>
              )}

              <Text fontSize="xs" color="gray.600">
                {moment(notification.creationDate).format(
                  'DD MMMM YYYY HH:mm:ss'
                )}
              </Text>
            </Box>
          </Box>
        </Flex>
        <Flex>
          <Divider orientation="vertical" flexShrink={0} />
          <Center
            px={1.5}
            aria-label="Close notifications"
            onClick={closeNotification}
            color={btnColor}
            _hover={{ cursor: 'pointer', color: btnHoverColor }}
          >
            <Icon as={X} w={5} h={5} />
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Notification;
