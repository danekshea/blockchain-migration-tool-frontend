<script>
    //import Tooltip from "src/comps/Tooltip.svelte"
    import { ethers } from "ethers";
    import { Modal, Group, Button, Menu, Text, Switch, UnstyledButton, ThemeIcon } from "@svelteuidev/core"
    import { Moon, Sun } from 'radix-icons-svelte';

    import { originChain, chains } from "../utils/blockchain";
    import { sliceAddress } from "../utils/utils";
    import { completedSteps } from "../stores/generic";


    export let walletConnected = false;
    export let walletAddress = "";
    export let chainId = 0;
    export let disclaimers = [];
    export let isDark = false;
    let walletOptionsModal = false;
    const CONNECT_WALLET = "Connect wallet";	
    const DISCONNECT = "Disconnect";	

    function toggleTheme() {
		isDark = !isDark;
	}

    // TO FIX FUNCTION
    const copyToClipboard = (e, address) => {
        if(!address) return

        navigator.clipboard.writeText(address)
        e.target.innerText = "Copied to clipboard!"
        setTimeout(() => e.target.innerText = "Copy address", 1000)
    }

    // $: User = $Wallet.User
    // $: if(!User || !$User) open = false
   
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
        completedSteps.set(1); // first completed step
        walletConnected = true;
    }

    function disconnectWallet() {
        walletAddress = "";
        completedSteps.set(0); // reset to initial state
        walletConnected = false;
    }

    function resetState() {
        disconnectWallet();
        completedSteps.set(0); // reset to initial state
        disclaimers = [];
    }
</script>

<nav class="max-w-[1040px] m-auto flex items-center mt-0.5">
    <!-- <img src="" alt="" class="logo"> -->
    <div class="p-0.5 font-bold text-xl">
        migrate<span class="text-blue">.</span>
    </div>
    <Modal 
        opened={walletOptionsModal} on:close={closeWalletOptions} title="Choose your wallet">
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
    <div class="ml-auto flex items-center p-0.5 rounded-[40px]">
        {#if walletConnected===false}
            <Button on:click={openWalletOptions} class="min-w-[128px]" variant="outline" color="gray" radius="xl">
                {`${CONNECT_WALLET}`}
            </Button>
        {:else}
            <div>
                <Group spacing="xs">
                    <Text>
                        {sliceAddress(walletAddress)}
                    </Text>
                    <Menu trigger='hover' delay={500}>
                        <Menu.Item on:click={copyToClipboard}>
                            <Text>
                                Copy address
                            </Text>
                        </Menu.Item>
                        <Menu.Item on:click={resetState}>
                            <Text>
                                {`${DISCONNECT}`}
                            </Text>
                        </Menu.Item>
                    </Menu>
                </Group>
            </div>
        {/if}
        {#if isDark === false}
            <Button class="m-2" variant="outline" color="gray" size="lg" radius="xl" compact on:click={toggleTheme}> 
                <ThemeIcon variant="subtle" size="xs" color="dark">
                    <Moon />
                </ThemeIcon>
            </Button>
        {:else}
            <Button class="m-2" variant="outline" color="gray" size="lg" radius="xl" compact on:click={toggleTheme}> 
                <ThemeIcon variant="subtle" size="xs" color="dark">
                    <Sun />
                </ThemeIcon>
            </Button>
        {/if}
    </div>
</nav>

<style>

</style>