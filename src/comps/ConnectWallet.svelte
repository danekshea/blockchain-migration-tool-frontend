<script lang="ts">
    import { Group, Button, Text } from "@svelteuidev/core"
    import { sliceAddress } from "../utils/utils";
    import WalletMenu from "./WalletMenu.svelte";
    import WalletOptionsModal from "./WalletOptionsModal.svelte";

    export let walletConnected = false;
    export let walletAddress = "";
    export let chainId = 0;
    export let disclaimers = [];
    let walletOptionsModal = false;
    const CONNECT_WALLET = "Connect wallet";	
   
    function openWalletOptions() {
        walletOptionsModal=true;
    }


</script>

<div class="ml-auto flex items-center p-0.5 rounded-[40px]">

    {#if walletConnected===false}
        <Button on:click={openWalletOptions} class="min-w-[128px]" variant="outline" color="gray" radius="xl">
            {`${CONNECT_WALLET}`}
        </Button>
        <WalletOptionsModal bind:walletOptionsModal bind:walletAddress bind:walletConnected bind:chainId/>
    {:else}
        <div>
            <Group spacing="xs">
                <Text>
                    {sliceAddress(walletAddress)}
                </Text>
                <WalletMenu bind:walletAddress bind:walletConnected bind:disclaimers/>
            </Group>
        </div>
    {/if}
</div>
