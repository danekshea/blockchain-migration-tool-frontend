<script lang="ts">
    import NFTDisplay from "./NFTDisplay.svelte";
    import { NFTDisplayCategory } from "../types"
    import BurnNotification from "./BurnNotification.svelte";

    let burning=false;
    let originNFTs = [1, 2, 3];
    let ncols = 4;

</script>

<BurnNotification bind:burning/>
<NFTDisplay ncols={ncols} nfts={originNFTs} bind:burning category={NFTDisplayCategory.Burning}/>
