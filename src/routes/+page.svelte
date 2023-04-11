<script lang="ts">
  import { SvelteUIProvider, Seo } from '@svelteuidev/core';
  import Navigation from "../comps/Navigation.svelte";
  import Description from "../comps/Description.svelte";
  import Instructions from "../comps/Instructions.svelte";
  import ImmutableLogo from "../comps/ImmutableLogo.svelte";

  let walletAddress = "";
  let chainId = 0;
  let isDark = false;
</script>

<SvelteUIProvider withGlobalStyles themeObserver={isDark ? 'dark' : 'light'}>
  <Seo title="Immutable Migration Tool"/>
  <Navigation bind:walletAddress bind:chainId bind:isDark/>
  <Description/>
  <Instructions bind:walletAddress bind:chainId />
  <ImmutableLogo bind:isDark/>
</SvelteUIProvider>


