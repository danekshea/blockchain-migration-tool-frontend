<script lang="ts">
    import { originChain, chains } from "../utils/blockchain";
    import { Modal, Group, Button } from "@svelteuidev/core"
    import { ethers } from "ethers";

    export let connectStatus = "Connect wallet";
    export let walletAddress = "";
    export let chainId = 0;
    let network = "";
    let opened = false;

    async function connectMetamask() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            walletAddress = await signer.getAddress();
            chainId = await signer.getChainId();

            if (chainId != originChain) {
                // error: Wrong network
            } else {
                // success
                connectStatus = "Disconnect wallet"
            }
        } else {
            // error: Metamask is not installed
        }
        opened = false;
    }

    function closeWalletOptions() {
        opened=false;
    }

    // resets saved address to empty string
    async function connectOrDisconnect() {
        if (connectStatus === "Connect wallet") {
            opened=true;
        } else if (connectStatus === "Disconnect wallet"){
            walletAddress = "";
            connectStatus = "Connect wallet";
        }
    }

</script>
<div class="container">
    <h2>
        Step 1:
    </h2>
    <Modal {opened} on:close={closeWalletOptions} title="Choose your wallet">
        <!-- Modal Content -->
        <Button on:click={connectMetamask}>MetaMask</Button>
        <Button>Gamestop</Button>
        <Button>WalletConnect</Button>
    </Modal>
    <Group position="center">
        <Button on:click={connectOrDisconnect}>{connectStatus}</Button>
    </Group>
    {#if walletAddress && chainId}
        <p>Address: {walletAddress}</p>
        <p>Network: {chains[chainId].name}</p>
    {/if}
</div>
<style>

</style>
