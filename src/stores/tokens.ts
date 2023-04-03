// customTokenStore.ts
import { writable } from 'svelte/store';
import { getAssetTokenBalances } from '../utils/api';

function createDestinationTokenStore() {
  const { subscribe, set } = writable([]);

  async function fetchTokens(address: string, chain_id) {
    const tokens = await getAssetTokenBalances(address, chain_id);
    set(tokens);
  }

  let interval;

  function startInterval(address: string, chain_id:number) {
    if (interval) clearInterval(interval);
    interval = setInterval(() => fetchTokens(address, chain_id), chain_id);
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

export const originTokenStore = createDestinationTokenStore();

export const destinationTokenStore = createDestinationTokenStore();
