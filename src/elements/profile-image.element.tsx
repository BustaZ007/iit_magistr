import { Image, useColorModeValue } from '@chakra-ui/react';

import { getImageUrl } from '../helpers';
import missingImageLight from '../static/missing-image-light.svg';
import missingImageDark from '../static/missing-image-dark.svg';

type TProfileImage = {
  sampleId?: string;
  image?: string;
  size: string;
  objectFit?: 'contain' | 'cover';
  fallbackLightSrc?: string;
  fallbackDarkSrc?: string;
};

function ProfileImage({
  sampleId,
  image,
  size,
  objectFit = 'cover',
  fallbackLightSrc,
  fallbackDarkSrc,
}: TProfileImage) {
  const fallbackImage: string = useColorModeValue(
    fallbackLightSrc ?? missingImageLight,
    fallbackDarkSrc ?? missingImageDark
  );

  return (
    <Image
      src={image || getImageUrl(sampleId)}
      objectFit={objectFit}
      boxSize={size}
      borderRadius="lg"
      alt="profile image"
      fallbackSrc={fallbackImage}
    />
  );
}

export default ProfileImage;
