<script lang="ts">
    // import { IMXAsset } from '../types'
    import NFTDisplay from './NFTDisplay.svelte';

    let loading = true;
    // need to change this to IMX NFT or EVM NFT
    const nfts = [1];
    const ncols = 4;
</script>

<NFTDisplay ncols={ncols} nfts={nfts} loading={loading} burning={false} showSkeletons={true} showBurnButton={false}/>
