/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  VStack,
  Center,
  FormLabel,
  Icon,
  Input,
  Text,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowFatLinesUp, CloudArrowUp } from 'phosphor-react';
import { personLoadingFiles } from '../../domains/profiles';

type TDropArea = {
  onClose: () => void;
};

function DropArea({ onClose }: TDropArea) {
  const { t } = useTranslation('components');
  const bg = useColorModeValue('white', 'gray.700');
  const dragBg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const border = useColorModeValue('gray.300', 'whiteAlpha.400');

  const [isDragging, setIsDragging] = useState(false);

  const sendFilesToPersonLoadingTable = (fileArr: FileList) => {
    const files = [];
    for (let i = 0; i < fileArr.length; i += 1) {
      const file = fileArr.item(i);
      if (file) files.push(file);
    }

    personLoadingFiles(files);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    sendFilesToPersonLoadingTable(e.dataTransfer.files);

    onClose();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    sendFilesToPersonLoadingTable(e.target.files);

    onClose();
  };

  return (
    <Center
      h={96}
      p={4}
      bg={isDragging ? dragBg : bg}
      borderRadius="lg"
      _after={{
        content: '""',
        position: 'absolute',
        inset: '4',
        border: '2px',
        borderStyle: 'dashed',
        borderColor: border,
        borderRadius: 'lg',
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <VStack spacing={4}>
        <Icon as={isDragging ? ArrowFatLinesUp : CloudArrowUp} h={10} w={10} />
        <Text fontSize="xl" maxW={96} textAlign="center">
          {t('Modal.UploadImage.DragImage')}
        </Text>
        <Button
          as={FormLabel}
          htmlFor="upload-file-input"
          cursor="pointer"
          zIndex={isDragging ? 'auto' : 'docked'}
        >
          {t('Modal.UploadImage.Button')}
          <Input
            id="upload-file-input"
            type="file"
            display="none"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
          />
        </Button>
      </VStack>
    </Center>
  );
}

export default DropArea;
