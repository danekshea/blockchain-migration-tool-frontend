<script>
    //import Tooltip from "src/comps/Tooltip.svelte"
    import { ethers } from "ethers";
    import { Modal, Group, Button, Menu, Text } from "@svelteuidev/core"
    import ConnectWallet from "./ConnectWallet.svelte";

    import { originChain, chains } from "../utils/blockchain";
    import LightDarkModeButton from "./LightDarkModeButton.svelte";
    import MainLogo from "./MainLogo.svelte";

    export let walletConnected = false;
    export let walletAddress = "";
    export let chainId = 0;
    export let disclaimers = [];
    export let isDark;
    let walletOptionsModal = false;
    const CONNECT_WALLET = "Connect wallet";	
    const DISCONNECT = "Disconnect";	

    // $: User = $Wallet.User
    // $: if(!User || !$User) open = false
</script>

<nav class="max-w-[1040px] m-auto flex items-center top-1">
    <!-- <img src="" alt="" class="logo"> -->
    <MainLogo />
    <ConnectWallet />
    <LightDarkModeButton bind:isDark/>
</nav>