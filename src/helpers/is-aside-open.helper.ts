import getUrlPageName from './get-url-page-name.helper';

function isAsideOpen(): boolean {
  const isOpen = localStorage.getItem(getUrlPageName());
  return isOpen === 'open';
}

export default isAsideOpen;
