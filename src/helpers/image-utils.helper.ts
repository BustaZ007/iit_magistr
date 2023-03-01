import { MAX_IMAGE_SIZE } from '../consts';

/**
 * Утилита, проверяющая изображение на расширение (.jpg, .png, .jpeg и т.д.), а
 * также на размер файла, чтобы он не превышал MAX_IMAGE_SIZE. Возвращает код ошибки
 * для локалей. Если ошибок нет, то возвращает пустую строку.
 * @param file - файл, который надо проверить
 */
const validateImageFile = (file: File) => {
  if (file && !file.type.match('image')) {
    return 'OnlyImage';
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return 'BigImageSize';
  }
  return '';
};

/**
 * Утилита, конвертирующая изображение из формата File в Base64 строку. Конвертирование
 * происходит асинхронно, поэтому результат передается в колбэк setBase64Result.
 * @param image - изображение, которое необходимо преобразовать в Base64
 * @param setBase64Result - колбэк, для обработки результата
 */
const imageToBase64 = (image: File, setBase64Result: (s: string) => void) => {
  const reader = new FileReader();
  reader.onload = () => {
    setBase64Result(btoa(reader.result?.toString() ?? ''));
  };
  reader.readAsBinaryString(image);
};

export { imageToBase64, validateImageFile };
