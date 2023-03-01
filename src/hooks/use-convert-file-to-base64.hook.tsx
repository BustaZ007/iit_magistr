import { ChangeEvent, useState } from 'react';
import { uploadFiles } from '../helpers';

const useConvertFileToBase64 = () => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setImages([]);
    setError('');
    if (!e.target.files) return;
    uploadFiles(e.target.files, setImages, setError);
  };

  return { base64Image: images[0], error, handleFileUpload };
};

export default useConvertFileToBase64;
