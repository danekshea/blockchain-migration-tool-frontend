<script>
    import { Skeleton, Grid, Card, Image, Group, Text, Container, Button } from '@svelteuidev/core';
    import { completedSteps } from "../stores/generic";
    import NFTCard from "./NFTCard.svelte";

    export let ncols;
    export let nfts;
    let loading;
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
