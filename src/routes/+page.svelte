<script lang="ts">
    import Navigation from '../comps/Navigation.svelte';
    import Origin from '../comps/Origin.svelte';
    import Destination from '../comps/Destination.svelte';

    let address: string = "";
    let network: string = "";
</script>
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"> -->
<div>
        <div class="grid-container">
    <div class="container-row">
        <Navigation bind:address={address} bind:network={network}/>
    </div>
    <div class="container-column"><Origin {address}/></div>
    <div class="container-column"><Destination {address}/></div>
</div>
<a target="_blank" class="logo" href="https://immutable.com">
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
        background:#FFFFFF;
        width: min(490px, 100vw);
        box-shadow: 0 0 30px rgba(0, 0, 0, .05);
        border-radius: 16px;
        padding: 2.5rem 3rem
    }
    .container-row {
        grid-column: span 2;
    }
    .logo {
    filter: saturate(0%);
    opacity: .5;
    width: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 2rem;
    transition: all .2s;
    display: block;
  }

  .logo img {
    max-width: 100%;
    display: block
  }

  .logo:hover {
    filter: saturate(100%);
    opacity: 1
  }
</style>