<script lang="ts">
    import { Grid, Container } from '@svelteuidev/core';
    import NFTCard from "./NFTCard.svelte";

    export let ncols;
    export let nfts;
    export let burning;
    export let category; // can either be 'burn' or 'receive'

</script>

<Container class="mt-5" size="xs">
    <Grid>
        {#each nfts as nft}
            <Grid.Col span={ncols}>
                <NFTCard nft={nft} bind:burning category={category} />
            </Grid.Col>
        {/each}
    </Grid>
</Container>
