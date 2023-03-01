<script lang="ts">
    import { ethers } from "ethers";
    import { moralisAPIkey, originMoralisURL, originCollectionAddress, chains, originNetwork, abi } from "../utils/blockchain";

    export let address: string = "";

    let balancesresult: any = [];

    async function getOriginTokenBalances(address: string) {
        console.log("Getting origin token balances...");
        const balances = await fetch(
                originMoralisURL(address),
            {
                headers: {
                    accept: "application/json",
                    "X-API-Key":
                        moralisAPIkey,
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

    async function getOriginTokenBalancesRegular(address: string) {
        const interval = setInterval(() => getOriginTokenBalances(address), 5000);
        return () => clearInterval(interval);
    }

    async function burn(tokenID: any) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
            originCollectionAddress,
            abi,
            signer
        );

        const result = await contract.burn(tokenID);
    }

    $: if (address) {
        getOriginTokenBalancesRegular(address);
    }

    const tokensPromise = getOriginTokenBalances(address);
</script>
{#await tokensPromise}
    <div>Loading...</div>
{:then tokens}
{#if address}
    {#if balancesresult.length > 0}
        <div class="tokenlist">
            <ul>
                {#each balancesresult as token}
                    <li>
                        <div class="token">
                            <img src="{chains[originNetwork].img}" alt="{chains[originNetwork].shortName}" /><span
                                >{token.token_id}</span
                            ><button
                                class="btn"
                                on:click={() => burn(token.token_id)}
                                >Migrate</button
                            >
                        </div>
                    </li>
                    <li />{/each}
            </ul>
        </div>
    {:else}
        <div>No tokens to migrate...</div>
    {/if}
{/if}
{/await}

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
        padding: 1rem 0.5rem;
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
        background: #17b5cb;
        padding: 0.2rem;
        width: 50px;
        color: white;
        border: 0px solid transparent;
        border-radius: 6px;
        font-weight: 500;
        font-size: 0.8rem;
        cursor: pointer;
        transition: background-color 0.25s, color 0.25s, border-color 0.25s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
