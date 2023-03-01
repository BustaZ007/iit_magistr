/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-promise-reject-errors */
const MAX_IMAGE_SIZE = 6 * 1024 * 1024;

function validateUploadFile(
  file: any,
  imageData: {
    width: number;
    height: number;
  } | null
) {
  if (file && !file.type.match('image')) {
    return 'OnlyImage';
  }

  if (imageData && (imageData.width >= 4032 || imageData.height >= 4032)) {
    return 'BigImageWidth';
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return 'BigImageSize';
  }

  return '';
}

function readFileAsync(file: any): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64result = reader.result?.toString();
      if (base64result) {
        resolve(base64result);
      } else {
        reject();
      }
    };
    reader.onerror = reject;
    reader.readAsBinaryString(file);
  });
}

function imageFileAsync(image: any): Promise<{
  width: number;
  height: number;
}> {
  return new Promise((resolve) => {
    const img = new Image();
    const currentURL = window.URL;
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      });
    };
    img.src = currentURL.createObjectURL(image);
  });
}

export default async function uploadFiles(
  files: FileList,
  setImages: (images: string[]) => void,
  setError: (error: string) => void
) {
  if (files[0]?.type.indexOf('image/') === -1) {
    setError('ImageDecodeFailed');
    return;
  }

  if (files.length > 1) {
    setError('TooManyFiles');
    return;
  }
  const base64Images: string[] = [];
  let error = '';
  for (let i = 0; i < files.length; i += 1) {
    const file = files.item(i);
    let imageData;
    try {
      imageData = await imageFileAsync(file);
    } catch (e) {
      imageData = null;
    }

    error = validateUploadFile(file, imageData);

    if (!error) {
      const picFile = await readFileAsync(file);
      const base64image = btoa(picFile);
      base64Images.push(base64image);
    }
  }

  if (base64Images.length === 0 && error) {
    setError(error);
    return;
  }
  setImages(base64Images);
}
