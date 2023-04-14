<script lang="ts">
    import { Modal, Button } from "@svelteuidev/core"
    import { completedSteps } from "../stores/generic";
    import { ethers } from "ethers";
    import { originChain } from "../utils/blockchain";

    export let walletOptionsModal = false;
    export let walletConnected = false;
    export let walletAddress = "";
    export let chainId = 0;

    function closeWalletOptions() {
        walletOptionsModal=false;
    }

    function connectWalletSuccess() {
        console.log("Successfully connected to wallet", walletAddress, chainId)
        completedSteps.set(1); // first completed step
        walletConnected = true;
    }

    // note: this does not realise if metamask if locked
    // note to convert this to a store or util
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

</script>

<Modal opened={walletOptionsModal} on:close={closeWalletOptions} title="Choose your wallet">
    <Button on:click={connectMetamask} class="m-2 min-w-full" variant="outline" color="gray" radius="xl">
        MetaMask
    </Button>
    <Button disabled class="m-2 min-w-full" variant="outline" color="gray" radius="xl">
        Gamestop
    </Button>
    <Button disabled class="m-2 min-w-full" variant="outline" color="gray" radius="xl">
        WalletConnect
    </Button>
</Modal>