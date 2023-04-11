<script>
    export let isDark;

</script>

<a target="_blank" rel="noreferrer" class="logo" href="https://immutable.com">
    {#if isDark}
      <img src="logo-white.png" alt="Immutable X logo" />
    {:else}
      <img src="logo-black.png" alt="Immutable X logo" />
    {/if}
  </a>

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