import { AspectRatio, Box, Flex, Image } from '@chakra-ui/react';
import { getImageUrl } from '../../../../helpers';

type TNotificationImages = {
  avatar: string;
  realtimeFacePhotoId: string;
  realtimeBodyPhotoId: string;
};

function NotificationImages({
  avatar,
  realtimeFacePhotoId,
  realtimeBodyPhotoId,
}: TNotificationImages): JSX.Element | null {
  if (!avatar) {
    return null;
  }

  const photos: string[] = [getImageUrl(avatar)];
  if (realtimeFacePhotoId) photos.unshift(getImageUrl(realtimeFacePhotoId));
  if (realtimeBodyPhotoId) photos.unshift(getImageUrl(realtimeBodyPhotoId));

  return (
    <Flex bg="gray.900">
      {photos.length === 1 && <Box flexGrow={1} flexShrink={1} />}
      <AspectRatio
        ratio={1}
        flexGrow={4}
        flexShrink={1}
        sx={{
          '& > img': {
            objectFit: 'contain',
          },
        }}
      >
        <Image src={photos[0]} />
      </AspectRatio>
      <Box flexGrow={photos.length === 1 ? 1 : 2} flexShrink={1}>
        {photos.slice(1).map((photoSrc) => (
          <AspectRatio w="full" ratio={1} key={photoSrc}>
            <Image src={photoSrc} />
          </AspectRatio>
        ))}
      </Box>
    </Flex>
  );
}

export default NotificationImages;
