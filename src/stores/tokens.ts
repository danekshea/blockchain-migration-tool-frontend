// customTokenStore.ts
import { writable } from 'svelte/store';
import { getAssetTokenBalances } from '../utils/api';

function createDestinationTokenStore() {
  const { subscribe, set } = writable([]);

  async function fetchTokens(address: string) {
    const tokens = await getAssetTokenBalances(address, 5001);
    set(tokens);
  }

  let interval;

  function startInterval(address: string) {
    if (interval) clearInterval(interval);
    interval = setInterval(() => fetchTokens(address), 5000);
  }

  function stopInterval() {
    if (interval) clearInterval(interval);
  }

  return {
    subscribe,
    fetchTokens,
    startInterval,
    stopInterval,
  };
}

export const destinationTokenStore = createDestinationTokenStore();
