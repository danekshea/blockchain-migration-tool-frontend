<script>
    import ConnectWallet from "./ConnectWallet.svelte";
    import LightDarkModeButton from "./LightDarkModeButton.svelte";
    import MainLogo from "./MainLogo.svelte";

    export let isDark;

    // $: User = $Wallet.User
    // $: if(!User || !$User) open = false
</script>

<nav class="max-w-[1040px] m-auto flex items-center top-1">
    <MainLogo />
    <ConnectWallet />
    <LightDarkModeButton bind:isDark/>
</nav>