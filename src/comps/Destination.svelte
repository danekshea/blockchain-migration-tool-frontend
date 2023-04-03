<script lang="ts">
  import { destinationTokenStore } from "../stores/tokens";
  import { chains, tokenScannerURL } from "../utils/blockchain";

  export let address = "";
  export let destinationChain;
  export let destinationCollectionAddress = "";

  $: if (address) {
    destinationTokenStore.fetchTokens(address, destinationCollectionAddress, destinationChain);
    destinationTokenStore.startInterval(address, destinationCollectionAddress, destinationChain);
  } else {
    destinationTokenStore.stopInterval();
  }
</script>

<div class="tokenlist">
  <ul>
    {#each $destinationTokenStore as token}
      <li>
        <div class="token">
          <img src="{chains[destinationChain].img}" alt="{chains[destinationChain].shortName}" />
          {#if tokenScannerURL(destinationCollectionAddress, token.token_id, destinationChain)}
            <a href={tokenScannerURL(destinationCollectionAddress, token.token_id, destinationChain)} target="_blank" rel="noreferrer">{token.token_id}</a>
          {:else}
            {token.token_id}
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tokenlist {
    max-width: 1040px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .token {
    height: 30px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    background: #ffffff;
    width: min(120px);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 1rem 0.5rem;
  }
  li {
    list-style: none;
    margin: 0.5rem 0;
  }
  img {
    height: 20px;
    width: 20px;
    margin-right: 2px;
  }
</style>
