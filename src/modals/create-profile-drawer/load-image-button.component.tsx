import { Button, FormLabel, Icon, Input } from '@chakra-ui/react';
import { UploadSimple } from 'phosphor-react';
import { ChangeEvent, useRef } from 'react';

type TLoadImageButton = {
  text: string;
  handleFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

function LoadImageButton({
  disabled,
  handleFileUpload,
  text,
}: TLoadImageButton) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Button
      as={FormLabel}
      disabled={disabled}
      htmlFor="upload-file-input"
      cursor="pointer"
      m={0}
      pl={2}
      textAlign="center"
      fontWeight="normal"
      fontSize="sm"
      colorScheme="blue"
      h={8}
      leftIcon={<Icon as={UploadSimple} w={4} h={4} />}
    >
      {text}
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
  );
}

export default LoadImageButton;
