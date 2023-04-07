<script lang="ts">
  import Origin from "../comps/Origin.svelte";
  import Destination from "../comps/Destination.svelte";
  import { originChain, originCollectionAddress, destinationChain, destinationCollectionAddress, chains } from "../utils/blockchain";
  import SelectNFTs from "../comps/SelectNFTs.svelte";
  import Disclaimers from "../comps/Disclaimers.svelte";
  import Reception from "../comps/Reception.svelte";
  import { SvelteUIProvider } from '@svelteuidev/core';
  import ConnectWallet from "../comps/ConnectWallet.svelte";

  let walletAddress = "";
  let chainId = 0;
  let selection = false;
  let disclaimers = [];
</script>

<SvelteUIProvider>
  <div>
    <div>
      <h1>Cross-chain Migration Tool</h1>
      <p>
        This tool offers intuitive NFT transfers across chains onto Immutable X. 
        <br/>
        It has been configured to migrate <b>COLLECTION_XYZ</b> on <b>CHAIN_XYZ</b>
      </p>
      
      <ConnectWallet bind:walletAddress bind:chainId bind:disclaimers/>
      <Disclaimers bind:walletAddress bind:chainId bind:disclaimers/>
      <SelectNFTs bind:walletAddress bind:chainId bind:selection bind:disclaimers/>
      <Reception bind:walletAddress bind:chainId bind:selection bind:disclaimers/>
  
      {#if walletAddress && chainId != 0}
        {#if chainId == originChain}
          <div class="container-column"><Origin {walletAddress} {originCollectionAddress} {originChain} /></div>
          <div class="container-column"><Destination {walletAddress} {destinationCollectionAddress} {destinationChain} /></div>
        {:else}
          <div class="container-row">
            <h4>This migration tool is for migrating assets from {chains[originChain].name} but you're connected to {chains[chainId].name}</h4>
          </div>
        {/if}
      {/if}
    </div>
    <a target="_blank" rel="noreferrer" class="logo" href="https://immutable.com">
      <img src="logo-black.png" alt="Immutable X logo" />
    </a>
  </div>
  
</SvelteUIProvider>

<style>
  .container-row {
    grid-column: span 2;
  }
  .logo {
    filter: saturate(0%);
    opacity: 0.5;
    width: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 2rem;
    transition: all 0.2s;
    display: block;
  }

  .logo img {
    max-width: 100%;
    display: block;
  }

  .logo:hover {
    filter: saturate(100%);
    opacity: 1;
  }
</style>
