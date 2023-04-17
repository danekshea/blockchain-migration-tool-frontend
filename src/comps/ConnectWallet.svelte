<script lang="ts">
    import { Button, ThemeIcon, Group, Text } from "@svelteuidev/core"
    import WalletMenu from "./WalletMenu.svelte";
    import ConnectWalletModal from "./ConnectWalletModal.svelte";
    import { Enter } from "radix-icons-svelte"

    export let walletConnected = false;
    export let walletAddress = "";
    export let chainId = 0;
    let walletOptionsModal = false;
   
    function openWalletOptions() {
        walletOptionsModal=true;
    }
</script>

<ConnectWalletModal bind:walletOptionsModal bind:walletAddress bind:walletConnected bind:chainId/>

<div class="ml-auto flex items-center p-0.5 rounded-[40px]">
    {#if walletConnected===false}
        <Button on:click={openWalletOptions} class="min-w-[128px]" variant="outline" color="gray" radius="xl">
            <Group spacing="xs">
                <ThemeIcon variant="subtle" size="xs" color="dark">
                    <Enter />
                </ThemeIcon>
                <Text size="sm">
                    Connect wallet
                </Text>
            </Group>
        </Button>
    {:else}
        <WalletMenu bind:walletAddress bind:walletConnected/>
    {/if}
</div>
