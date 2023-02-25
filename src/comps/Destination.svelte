<script lang="ts">
    import { ethers } from "ethers";
    import { onMount } from "svelte";

    let balancesresult: any = [];
    export let address: string = "";

    const immutableURL = "https://api.sandbox.x.immutable.com/v1/assets?user=";
    const immutableURLextension = "&collection=";
    const collectionAddress = "0x82633202e463d7a39e6c03a843f0f4e83b7e9aa3";
    const destination_scanner_url = "https://immutascan.io/address/0x43b2a84416bdad7091148a97f4c974dc0c2f0227/";


    async function getDestinationTokenBalances(address: string) {
        console.log("Getting destination token balances...");
        const balances = await fetch(
            immutableURL + address + immutableURLextension + collectionAddress,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const balancesjson = await balances.json();
        balancesresult = balancesjson.result;
        balancesresult = balancesresult.sort((a: any, b: any) => {
            if (a.token_id < b.token_id) {
                return -1;
            }
        });
    }

    async function getDestinationTokenBalancesRegular(address: string) {
        const interval = setInterval(() => getDestinationTokenBalances(address), 5000);
        return () => clearInterval(interval);
    }

    $: if (address) {
        getDestinationTokenBalancesRegular(address);
    }
</script>

<div class="tokenlist">
    {#if address}
        <ul>
            {#each balancesresult as token}
                <li>
                    <div class="token">
                        <img src="imx.png" alt="imx"><a href="{destination_scanner_url}{token.token_id}" target="_blank" rel="noreferrer">{token.token_id}</a>
                    </div>
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
