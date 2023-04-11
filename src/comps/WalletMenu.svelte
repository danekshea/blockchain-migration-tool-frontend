<script>
    import { Menu, Text } from "@svelteuidev/core"
    import { completedSteps } from "../stores/generic"

    export let walletAddress;
    export let walletConnected;

    // TO FIX FUNCTION
    const copyToClipboard = (e, address) => {
        if(!address) return
        navigator.clipboard.writeText(address)
        e.target.innerText = "Copied to clipboard!"
        setTimeout(() => e.target.innerText = "Copy address", 1000)
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

<Menu trigger='hover' delay={500}>
    <Menu.Item on:click={copyToClipboard}>
        <Text>
            Copy address
        </Text>
    </Menu.Item>
    <Menu.Item on:click={resetState}>
        <Text>
            Disconnect wallet
        </Text>
    </Menu.Item>
</Menu>