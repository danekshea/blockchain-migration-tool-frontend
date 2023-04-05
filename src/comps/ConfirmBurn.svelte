<script lang="ts">
    import { originChain, chains } from "../utils/blockchain";
    import { Button, Checkbox, CheckboxGroup, Group } from "@svelteuidev/core"

    export let walletAddress = "";
    export let chainId = 0;
    export let selection = false;
    export let confirmBurn = false;

</script>
<nav>
    <div class="container">
        <h2>
            Step 3: Confirm and burn
        </h2>
        {#if walletAddress && chainId != 0 && selection}
            <Checkbox label="I am willing to burn my NFTs on CHAIN_XYZ to receive my NFTs on Immutable X" />
            <Checkbox label="I understand that I'll be receiving my NFTs on the same wallet address I am currently using" />
        
            <Group position="center">
                <Button>Migrate NFTs</Button>
            </Group>
        {/if}
    </div>
</nav>
<style>
    
</style>
