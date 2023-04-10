<script lang="ts">
  import Origin from "../comps/Origin.svelte";
  import Destination from "../comps/Destination.svelte";
  import { originChain, originCollectionAddress, destinationChain, destinationCollectionAddress, chains } from "../utils/blockchain";
  import BurnNFTs from "../comps/BurnNFTs.svelte";
  import ReceiveNFTs from "../comps/ReceiveNFTs.svelte";
  import { SvelteUIProvider } from '@svelteuidev/core';
  import ConnectWallet from "../comps/ConnectWallet.svelte";
  import Navigation from "../comps/Navigation.svelte";
  import Description from "../comps/Description.svelte";
  import Instructions from "../comps/Instructions.svelte";

  let walletAddress = "";
  let chainId = 0;
  let selection = false;
  let disclaimers = [];

  let isDark = false;
</script>

<SvelteUIProvider withGlobalStyles themeObserver={isDark ? 'dark' : 'light'}>
  <div>
    <div>
      <Navigation bind:walletAddress bind:chainId bind:disclaimers bind:isDark/>
      <Description/>
      <Instructions bind:walletAddress bind:chainId bind:disclaimers />

    </div>
    <a target="_blank" rel="noreferrer" class="logo" href="https://immutable.com">
      <img src="logo-black.png" alt="Immutable X logo" />
    </a>
  </div>
  
</SvelteUIProvider>

<style>
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
