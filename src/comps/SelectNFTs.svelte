<script lang="ts">
    import { originChain, chains } from "../utils/blockchain";
    import { Grid, Button, Group } from '@svelteuidev/core'

    export let walletAddress = "";
    export let chainId = 0;
    export let selection = false;
    export let disclaimers=[];

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
        Step 3: Burn NFTs
    </h2>
    {#if walletAddress && chainId != 0 && disclaimers.length === 2}
    <Grid>
        {#each [1,2,3,4,5,6,7,8,9,10,11,12] as n}
        <Grid.Col md={6} lg={3}>{n}</Grid.Col>
        {/each}
    </Grid>
    {/if}
</div>

<style>
</style>
