<script lang="ts">
    import { Modal, Button, Image, Group, Text } from "@svelteuidev/core"
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

<Modal opened={walletOptionsModal} on:close={closeWalletOptions} title="Choose your wallet" class="justify-items-center">
    <Button on:click={connectMetamask} class="my-2 min-w-full justify-start" variant="outline" color="gray" radius="lg" size="md">
        <Group spacing="xs">
            <Image height={28} src={"/metamask.png"} alt='Metamask' />
            <Text size="sm">
                MetaMask
            </Text>
        </Group>
    </Button>
    <Button disabled class="my-2 min-w-full justify-start" variant="outline" color="gray" radius="lg" size="md">
        <Group spacing="xs">
            <Image height={28} src={"/gamestop.png"} alt='Gamestop' />
            <Text size="sm">
                Gamestop
            </Text>
        </Group>    
    </Button>
    <Button disabled class="my-2 min-w-full justify-start" variant="outline" color="gray" radius="lg" size="md">
        <Group spacing="xs">
            <Image height={28} src={"/walletconnect.png"} alt='Wallet Connect' />
            <Text size="sm">
                Wallet Connect
            </Text>
        </Group>   
    </Button>
</Modal>