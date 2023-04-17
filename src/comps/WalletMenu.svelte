<script lang="ts">
    import { Menu, Text, Button, ThemeIcon, Group } from "@svelteuidev/core"
    import { completedSteps } from "../stores/generic"
    import { sliceAddress } from "../utils/utils";
    import { Copy, Exit } from "radix-icons-svelte"

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
        <Group spacing="xs">
            <ThemeIcon variant="subtle" size="xs" color="dark">
                <Copy />
            </ThemeIcon>
            <Text size="sm">
                Copy address
            </Text>
        </Group>
    </Menu.Item>
    <Menu.Item on:click={resetState}>
        <Group spacing="xs">
            <ThemeIcon variant="subtle" size="xs" color="dark">
                <Exit />
            </ThemeIcon>
            <Text size="sm">
                Disconnect wallet
            </Text>
        </Group>
    </Menu.Item>
</Menu>