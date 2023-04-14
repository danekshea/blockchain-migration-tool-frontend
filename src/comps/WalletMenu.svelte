<script lang="ts">
    import { Menu, Text, Button } from "@svelteuidev/core"
    import { completedSteps } from "../stores/generic"
    import { sliceAddress } from "../utils/utils";

    export let walletAddress;
    export let walletConnected;

    const copyToClipboard = (walletAddress) => {
        if(!walletAddress) return
        navigator.clipboard.writeText(walletAddress)
    }

    function disconnectWallet() {
        walletAddress = "";
        completedSteps.set(0); // reset to initial state
        walletConnected = false;
    }

    function resetState() {
        disconnectWallet();
        completedSteps.set(0); // reset to initial state
    }
</script>

<Menu trigger='hover' delay={250}>
    <Button slot="control" variant="subtle" color="dark" radius="xl">
        {sliceAddress(walletAddress)}
    </Button>
    <Menu.Item on:click={() => copyToClipboard(walletAddress)}>
        <Text size="sm">
            Copy address
        </Text>
    </Menu.Item>
    <Menu.Item on:click={resetState}>
        <Text size="sm">
            Disconnect wallet
        </Text>
    </Menu.Item>
</Menu>