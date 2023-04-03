// customTokenStore.ts
import { writable } from 'svelte/store';
import { getAssetTokenBalances } from '../utils/api';

function createTokenStore() {
  const { subscribe, set } = writable([]);

  async function fetchTokens(address: string, collectionAddress:string, network:number) {
    const tokens = await getAssetTokenBalances(address, collectionAddress, network);
    set(tokens);
  }

  let interval;

  function startInterval(address: string, collectionAddress:string, network:number) {
    if (interval) clearInterval(interval);
    interval = setInterval(() => fetchTokens(address, collectionAddress, network), network);
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

export const originTokenStore = createTokenStore();

export const destinationTokenStore = createTokenStore();
