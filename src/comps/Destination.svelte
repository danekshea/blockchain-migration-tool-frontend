<script lang="ts">
// @ts-nocheck

    import { destinationIMXURL, destinationScannerURL } from "../utils/blockchain";

    let balancesresult = [];
    export let address = "";

    $: if (address) {
        getDestinationTokenBalancesRegular(address);
    }

    const tokensPromise = getDestinationTokenBalances(address);
</script>

<div class="tokenlist">
    {#await tokensPromise}
        <div>Loading tokens from destination chain...</div>
    {:then tokens}
        {#if address}
            <ul>
                {#each balancesresult as token}
                    <li>
                        <div class="token">
                            <img src="imx.png" alt="imx">
                            {#if destinationScannerURL(token.token_id)}
                                <a href="{destinationScannerURL(token.token_id)}" target="_blank" rel="noreferrer">{token.token_id}</a>
                            {:else}
                                {token.token_id}
                            {/if}
                        </div>
                    </li>
                {/each}
            </ul>
        {/if}
    {/await}
</div>

<style>
    .tokenlist {
        max-width: 1040px;
        margin: auto;
        display: flex;
        justify-content: space-between; 
    }
    .token {
        height: 30px;
        display: flex;
        justify-content: space-between; 
        margin: auto;
        align-items: center;
        background: #ffffff;
        width: min(120px);
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        padding: 1rem 0.5rem;;
    }
    li {
        list-style: none;
        margin: 0.5rem 0;
    }
    img {
        height: 20px;
        width: 20px;
        margin-right: 2px;
    }
    .btn {
        background: #17B5CB;
        padding: 0.2rem;
        width: 50px;
        color: white;
        border: 0px solid transparent;
        border-radius: 6px;
        font-weight: 500;
        font-size: 0.8rem;
        cursor: pointer;
        transition: background-color .25s, color .25s, border-color .25s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
