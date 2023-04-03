<script lang="ts">
  import { destinationTokenStore } from "../stores/tokens";
  import { tokenScannerURL } from "../utils/blockchain";

  export let address = "";

  $: if (address) {
    destinationTokenStore.fetchTokens(address);
    destinationTokenStore.startInterval(address);
  } else {
    destinationTokenStore.stopInterval();
  }
</script>

<div class="tokenlist">
  <ul>
    {#each $destinationTokenStore as token}
      <li>
        <div class="token">
          <img src="imx.png" alt="imx" />
          {#if tokenScannerURL("0x82633202e463d7a39e6c03a843f0f4e83b7e9aa3", token.token_id, 5001)}
            <a href={tokenScannerURL("0x82633202e463d7a39e6c03a843f0f4e83b7e9aa3", token.token_id, 5001)} target="_blank" rel="noreferrer">{token.token_id}</a>
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
