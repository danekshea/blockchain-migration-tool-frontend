<script lang="ts">
    import { ethers } from "ethers";
    import { onMount } from "svelte";

    let balancesresult: any = [];
    export let address: string = "";

    $: if (address) {
        getDestinationTokenBalances(address);
    }

    export async function getDestinationTokenBalances(address: string) {
        const balances = await fetch(
            "https://api.sandbox.x.immutable.com/v1/assets?user=" + address +"&collection=0x43b2a84416bdad7091148a97f4c974dc0c2f0227",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const balancesjson = await balances.json();
        balancesresult = balancesjson.result;
        balancesresult.sort();
        balancesresult = balancesresult.sort((a: any, b: any) => {
            if (a.token_id < b.token_id) {
                return -1;
            }
        });
    }

    onMount(() => {
        if (address) {
            getDestinationTokenBalances(address);
        }
    });
</script>

<div class="tokenlist">
    {#if address}
        <ul>
            {#each balancesresult as token}
                <li>
                    <span>{token.token_id}</span>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .tokenlist {
        max-width: 1040px;
        margin: auto;
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
    }
    ul {
        list-style-type: none;
        list-style-image: url("imx.png");
    }
</style>
