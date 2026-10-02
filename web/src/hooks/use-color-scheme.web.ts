import { useSyncExternalStore } from 'react';

const colorSchemeQuery = '(prefers-color-scheme: dark)';

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia(colorSchemeQuery);
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getSnapshot() {
  return window.matchMedia(colorSchemeQuery).matches ? 'dark' : 'light';
}

function getServerSnapshot() {
  return 'light';
}

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
