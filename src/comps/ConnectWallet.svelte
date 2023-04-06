<script lang="ts">
    import { originChain, chains } from "../utils/blockchain";
    import { Modal, Group, Button } from "@svelteuidev/core"
    import { ethers } from "ethers";

    export let walletConnected = false;
    export let walletAddress = "";
    export let chainId = 0;
    export let disclaimers = [];
    let walletOptionsModal = false;
    const CONNECT_WALLET = "Connect wallet";	
    const DISCONNECT = "Disconnect wallet";	
   
    // note: this does not realise if metamask if locked
    async function connectMetamask() {
        try {
            // Prompt the user to connect their wallet
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send('eth_requestAccounts', []);

            const signer = provider.getSigner();
            const network = await provider.getNetwork();

            if (network.chainId === originChain) {
                console.log("Successfully connected to correct network")
            } else {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain', 
                    params: [{ chainId: `0x${originChain.toString(16)}` }]
                });
            }
            walletAddress = await signer.getAddress();
            chainId = await signer.getChainId();
            connectWalletSuccess();

        } catch (error) {
            if (error.code === 4001) {
                // User rejected request
                console.log('User rejected connection request');
            } else {
                console.log('Error connecting to wallet', error);
            }
        }
        closeWalletOptions();
    }

    function openWalletOptions() {
        walletOptionsModal=true;
    }

    function closeWalletOptions() {
        walletOptionsModal=false;
    }

    function connectWalletSuccess() {
        console.log("Successfully connected to wallet", walletAddress, chainId)
        walletConnected = true;
    }

    function disconnectWallet() {
        walletAddress = "";
        walletConnected = false;
    }

    function resetState() {
        disconnectWallet();
        disclaimers = [];
    }

</script>
<div class="container">
    <h2>
        Step 1: Connect your wallet
    </h2>
    <Modal opened={walletOptionsModal} on:close={closeWalletOptions} title="Choose your wallet">
        <!-- Modal Content -->
        <Button on:click={connectMetamask}>MetaMask</Button>
        <Button disabled>Gamestop</Button>
        <Button disabled>WalletConnect</Button>
    </Modal>
    {#if walletAddress && chainId}
        <p><b>Address: </b>{walletAddress}</p>
        <p><b>Network: </b>{chains[chainId].name}</p>
    {/if}
    <Group position="center">
        {#if walletConnected===false}
            <Button on:click={openWalletOptions}>{`${CONNECT_WALLET}`}</Button>
        {:else}
            <Button on:click={resetState}>{`${DISCONNECT}`}</Button>
        {/if}
    </Group>

</div>

<style>

</style>
