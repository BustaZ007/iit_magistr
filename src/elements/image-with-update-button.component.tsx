import { Box, Button, FormLabel, Icon, Input } from '@chakra-ui/react';
import { Pencil, UploadSimple } from 'phosphor-react';
import { ChangeEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileImage from './profile-image.element';
import MissingImageLight from '../static/missing-image-light.svg';
import MissingImageDark from '../static/missing-image-dark.svg';

type TImageWithUpdateButton = {
  image?: string;
  mainSampleId?: string;
  handleFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
};

function ImageWithUpdateButton({
  image,
  mainSampleId,
  handleFileUpload,
}: TImageWithUpdateButton) {
  const { t } = useTranslation('common');
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProfileImage
        image={image && `data:image/jpeg;base64,${image}`}
        sampleId={mainSampleId}
        size="160px"
        fallbackDarkSrc={MissingImageDark}
        fallbackLightSrc={MissingImageLight}
      />
      <Button
        as={FormLabel}
        htmlFor="upload-file-input"
        cursor="pointer"
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        m={0}
        p={0}
        textAlign="center"
        borderTopRadius="none"
        borderBottomRadius="md"
        opacity={Number(isHovered)}
        fontWeight="normal"
        fontSize="sm"
        colorScheme="blue"
        h={8}
        leftIcon={
          <Icon
            as={mainSampleId || image ? Pencil : UploadSimple}
            w={4}
            h={4}
          />
        }
      >
        {mainSampleId || image ? t('Update') : t('Upload')}
        <Input
          ref={inputRef}
          id="upload-file-input"
          type="file"
          display="none"
          accept=".png, .jpg, .jpeg, .webp, .tiff"
          onChange={(e) => {
            handleFileUpload(e);
            if (inputRef.current) inputRef.current.value = '';
          }}
        />
      </Button>
    </Box>
  );
}

export default ImageWithUpdateButton;
