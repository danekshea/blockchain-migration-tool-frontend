<script lang="ts">
    // import { IMXAsset } from '../types'
    import NFTDisplay from './NFTDisplay.svelte';
    import { NFTDisplayCategory } from "../types"


    let loading = true;
    // need to change this to IMX NFT or EVM NFT
    const nfts = [1];
    const ncols = 4;
</script>

<NFTDisplay ncols={ncols} nfts={nfts} burning={false} category={NFTDisplayCategory.Receiving}/>
