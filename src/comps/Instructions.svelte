<script lang="ts">
    import { Timeline, Text } from "@svelteuidev/core"
    import { completedSteps } from "../stores/generic";
    import RegisterWallet from "../comps/RegisterWallet.svelte";
    import Disclaimers from "../comps/Disclaimers.svelte";
    import NFTDisplayBurn from "../comps/NFTDisplayBurn.svelte";
    import NFTDisplayReceive from "../comps/NFTDisplayReceive.svelte";
    import RegisterWalletNotification from "../comps/RegisterWalletNotification.svelte"

</script>

<RegisterWalletNotification />

<Timeline active={$completedSteps} lineWidth={5} bulletSize={20} color="green" class="p-5">
    <Timeline.Item title="Connect wallet">
        <Text color="dimmed">
            Please connect your wallet with NFTs on CHAIN_XYZ
        </Text>
    </Timeline.Item>
    <Timeline.Item title="Register wallet">
        <Text color="dimmed">
            Ensure your wallet is registered on Immutable X
        </Text>
        {#if $completedSteps === 1}
            <RegisterWallet/>
        {/if}
    </Timeline.Item>
    <Timeline.Item title="Disclaimers">
        <Text color="dimmed">
            Agree to disclaimers
        </Text>
        {#if $completedSteps === 2}
            <Disclaimers/>
        {/if}
    </Timeline.Item>
    <Timeline.Item title="Burn NFTs">
        <Text color="dimmed">
            Individually select your NFTs to burn on CHAIN_XYZ
        </Text>
        {#if $completedSteps > 2}
            <NFTDisplayBurn/>
        {/if}
    </Timeline.Item>
    <Timeline.Item title="Receive NFTs!">
        <Text color="dimmed">
            Wait for your NFTs to be minted directly to your wallet on Immutable X!
        </Text>
        {#if $completedSteps === 4}
            <NFTDisplayReceive/>
        {/if}
    </Timeline.Item>
</Timeline>