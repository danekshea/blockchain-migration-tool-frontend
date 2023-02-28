<script lang="ts">
  import Navigation from "../comps/Navigation.svelte";
  import Origin from "../comps/Origin.svelte";
  import Destination from "../comps/Destination.svelte";
  import { originNetwork, chains } from "../utils/blockchain";

  let address: string = "";
  let chainid: number = 0;
</script>

<div>
  <h1>IMX Migration Tool</h1>
  <div class="grid-container">
    <div class="container-row">
      <Navigation bind:address bind:chainid />
    </div>
    {#if address && chainid != 0}
      {#if chainid == originNetwork}
        <div class="container-column"><Origin {address} {chainid}/></div>
        <div class="container-column"><Destination {address} /></div>
      {:else}
        <div class="container-row">
          <h4>This migration tool is for migrating assets from {chains[originNetwork].name} but you're connected to {chains[chainid].name}</h4>
        </div>
      {/if}
    {/if}
  </div>
  <a target="_blank" rel="noreferrer" class="logo" href="https://immutable.com">
    <img src="logo.svg" alt="Immutable X logo" />
  </a>
</div>

<style>
  .grid-container {
    max-width: 800px;
    margin: auto;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-gap: 20px; */
    background: #eeeeee;
    width: min(490px, 100vw);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding: 2.5rem 3rem;
  }
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
