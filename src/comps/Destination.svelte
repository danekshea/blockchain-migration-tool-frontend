<script lang="ts">
  import { destinationTokenStore } from "../stores/tokens";
  import { chains, tokenScannerURL } from "../utils/blockchain";

  export let address = "";
  export let chain_id;
  export let collectionAddress = "";

  $: if (address) {
    destinationTokenStore.fetchTokens(address, chain_id);
    destinationTokenStore.startInterval(address, chain_id);
  } else {
    destinationTokenStore.stopInterval();
  }
</script>

<div class="tokenlist">
  <ul>
    {#each $destinationTokenStore as token}
      <li>
        <div class="token">
          <img src="{chains[chain_id].img}" alt="{chains[chain_id].shortName}" />
          {#if tokenScannerURL(collectionAddress, token.token_id, chain_id)}
            <a href={tokenScannerURL(collectionAddress, token.token_id, chain_id)} target="_blank" rel="noreferrer">{token.token_id}</a>
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
  .btn {
    background: #17b5cb;
    padding: 0.2rem;
    width: 50px;
    color: white;
    border: 0px solid transparent;
    border-radius: 6px;
    font-weight: 500;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 0.25s, color 0.25s, border-color 0.25s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
