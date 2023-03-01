/**
 * Утилита, возвращающая URL для WebSocket'а на основе текущего хоста и
 * протокола.
 * @returns готовый URL, например "wss://example.com"
 */

const getWebSocketUrl = (): string => {
  const { host, protocol } = window.location;
  return `${protocol === 'http:' ? 'ws' : 'wss'}://${host}`;
};

export default getWebSocketUrl;
