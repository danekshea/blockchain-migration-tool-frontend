<script lang="ts">
    import NFTDisplay from "./NFTDisplay.svelte";
    import { NFTDisplayCategory } from "../types"

    let burning=false;
    let originNFTs = [1, 2, 3];
    let ncols = 4;

</script>

<NFTDisplay ncols={ncols} nfts={originNFTs} bind:burning category={NFTDisplayCategory.Burning}/>
