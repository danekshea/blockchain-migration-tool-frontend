<script lang="ts">
    import NFTDisplay from "./NFTDisplay.svelte";

    let burning=false;
    let originNFTs = [1, 2, 3];
    let ncols = 4;

</script>

<NFTDisplay ncols={ncols} nfts={originNFTs} loading={false} bind:burning showSkeletons={false} showBurnButton={true}/>
