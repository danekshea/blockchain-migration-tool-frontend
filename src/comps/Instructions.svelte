<script lang="ts">
    import { Modal, Group, Button, Title, Code, Timeline, Text, ThemeIcon } from "@svelteuidev/core"
    import { completedSteps } from "../stores/generic";
    import RegisterWallet from "../comps/RegisterWallet.svelte";
    import Disclaimers from "../comps/Disclaimers.svelte";
    import BurnNFTs from "./BurnNFTs.svelte";
    import ReceiveNFTs from "./ReceiveNFTs.svelte";
    import { Person } from 'radix-icons-svelte';

    export let walletAddress = "";
    export let chainId = 0;
    export let disclaimers=[];
    export let loading=true;

    function bulletColour(step) {
        if ($completedSteps >= step) {
            return "blue"
        } else {
            return "gray"
        }
    }
</script>

<Timeline active={$completedSteps} lineWidth={5} bulletSize={20} color="blue" class="p-5">
    <Timeline.Item title="Connect wallet">
        <!-- Have to have bullets as fragments to preserve colour in dark mode -->
        <!-- Timeline doesn't work that well in dark mode -->
        <!-- <svelte:fragment slot='bullet'>
			<ThemeIcon size="sm" radius='xl' color={bulletColour(0)}></ThemeIcon>
		</svelte:fragment> -->
        <Text color="dimmed">
            Please connect your wallet with NFTs on CHAIN_XYZ
        </Text>
    </Timeline.Item>
    <Timeline.Item title="Register wallet">
        <Text color="dimmed">
            Ensure your wallet is registered on Immutable X
        </Text>
        {#if $completedSteps === 1}
            <RegisterWallet bind:walletAddress bind:chainId bind:disclaimers/>
        {/if}
    </Timeline.Item>
    <Timeline.Item title="Disclaimers">
        <Text color="dimmed">
            Agree to disclaimers
        </Text>
        {#if $completedSteps === 2}
            <Disclaimers bind:walletAddress bind:chainId bind:disclaimers/>
        {/if}
    </Timeline.Item>
    <Timeline.Item title="Burn NFTs">
        <Text color="dimmed">
            Individually select your NFTs to burn on CHAIN_XYZ
        </Text>
        {#if $completedSteps > 2}
            <BurnNFTs bind:walletAddress bind:chainId bind:disclaimers bind:loading/>
        {/if}
    </Timeline.Item>
    <Timeline.Item title="Receive NFTs!">
        <Text color="dimmed">
            Wait for your NFTs to be minted directly to your wallet on Immutable X!
        </Text>
        {#if $completedSteps === 4}
            <ReceiveNFTs/>
        {/if}
    </Timeline.Item>
</Timeline>