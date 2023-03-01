/**
 * Фунцкия, которая на основе текущего хоста и переданного относительного пути страницы, возвращает
 * полный путь до этой страницы.
 * @param returnPage - Страница, на которую нужно будет вернуться.
 * @returns полный путь до страницы по типу "https://cloud.3divi.ai/billing"
 */
const getComebackUrl = (returnPage?: string) =>
  `${window.location.protocol}//${window.location.host}${returnPage ?? ''}`;

export default getComebackUrl;
