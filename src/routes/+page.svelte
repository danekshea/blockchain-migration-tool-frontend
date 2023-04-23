<script lang="ts">
  import { SvelteUIProvider, Seo } from '@svelteuidev/core';
  import Navigation from "../comps/navigation/Navigation.svelte";
  import Description from "../comps/Description.svelte";
  import Instructions from "../comps/Instructions.svelte";
  import ImmutableLogo from "../comps/ImmutableLogo.svelte";
  import { completedSteps, registrationStatus } from "../stores/generic"

  let walletAddress = "";
  let chainId = 0;
  let isDark = false;
</script>

<SvelteUIProvider withGlobalStyles themeObserver={isDark ? 'dark' : 'light'}>
  <Seo title="Immutable Migration Tool"/>
  <Navigation bind:isDark/>
  <Description/>
  <Instructions/>
  <ImmutableLogo bind:isDark/>
</SvelteUIProvider>


