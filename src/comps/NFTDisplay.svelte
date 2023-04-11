<script>
    import { Skeleton, Grid, Card, Image, Group, Text, Container, Button } from '@svelteuidev/core';
    import { completedSteps } from "../stores/generic";
    import NFTCard from "./NFTCard.svelte";

    export let ncols;
    export let nfts;
    export let loading;
    export let burning;
    export let showSkeletons;
    export let showBurnButton;
    export let category; // can either be 'burn' or 'receive'

</script>

<Container class="mt-5" size="xs">
    <Grid>
        {#each nfts as nft}
            <Grid.Col span={ncols}>

                {#if showSkeletons === true}
                    <Skeleton visible={loading} radius="lg">
                        <NFTCard nft={nft} burning={burning}/>
                    </Skeleton>
                {:else}
                    <NFTCard nft={nft} bind:burning showBurnButton={showBurnButton}/>
                {/if}
            </Grid.Col>
        {/each}
    </Grid>
</Container>
