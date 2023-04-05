<script lang="ts">
    import { originChain, chains } from "../utils/blockchain";
    import { Grid, Button, Group } from '@svelteuidev/core'

    export let walletAddress = "";
    export let chainId = 0;
    export let selection = false;

    function confirmSelection() {
        selection = true;
        console.log("Selection Confirmed")
    }

    function resetSelection() {
        selection = false;
        console.log("Selection RESET")
    }

</script>

<div class="container">
    <h2>
        Step 2: Select NFTs
    </h2>
    {#if walletAddress && chainId != 0}
    <Grid>
        <Grid.Col span={4}>1</Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
    </Grid>
    <Group position="center">
        <Button on:click={confirmSelection}>Confirm</Button>
        <Button on:click={resetSelection}>Reset</Button>
    </Group>

    {/if}
</div>

<style>
</style>
