<script lang="ts">
  import Navigation from "../comps/Navigation.svelte";
  import Origin from "../comps/Origin.svelte";
  import Destination from "../comps/Destination.svelte";
  import { originChain, originCollectionAddress, destinationChain, destinationCollectionAddress, chains } from "../utils/blockchain";
  import Selection from "../comps/Selection.svelte";
  import Confirmation from "../comps/Confirmation.svelte";
  import Reception from "../comps/Reception.svelte";

  let address = "";
  let chainid = 0;
</script>

<div>
  <div>
    <h1>Cross-chain Migration Tool</h1>
    <p>
      This tool offers intuitive NFT transfers across chains onto Immutable X. 
      <br/>
      It has been configured to migrate <b>COLLECTION_XYZ</b> on <b>CHAIN_XYZ</b>
    </p>
  </div>

  <div>
    <Navigation bind:address bind:chainid />
    <Selection bind:address bind:chainid />
    <Confirmation bind:address bind:chainid />
    <Reception />

    {#if address && chainid != 0}
      {#if chainid == originChain}
        <div class="container-column"><Origin {address} {originCollectionAddress} {originChain} /></div>
        <div class="container-column"><Destination {address} {destinationCollectionAddress} {destinationChain} /></div>
      {:else}
        <div class="container-row">
          <h4>This migration tool is for migrating assets from {chains[originChain].name} but you're connected to {chains[chainid].name}</h4>
        </div>
      {/if}
    {/if}
  </div>
  <a target="_blank" rel="noreferrer" class="logo" href="https://immutable.com">
    <img src="logo-black.png" alt="Immutable X logo" />
  </a>
</div>

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
  h1 {
    text-align: center;
    margin-top: 1rem;
  }
</style>
