<script lang="ts">
    import { ethers } from "ethers";
    import { moralisAPIkey, originMoralisURL, originCollectionAddress, chains, originNetwork } from "../utils/blockchain";

    export let address: string = "";
    export let network: string = "";

    let balancesresult: any = [];
    
    const abi = JSON.parse(
        '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" } ], "name": "safeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]'
    );

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
        // console.log(result);
        // console.log(result.hash);
        // if (result.hash) {
        //     //delay for 3 seconds
        //     await new Promise((resolve) => setTimeout(resolve, 9000));
        //     getOriginTokenBalances(address);
        // }
    }

    $: if (address) {
        getOriginTokenBalancesRegular(address);
    }
</script>
{#if address}
    {#if network == chains[originNetwork].name}
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
    {:else}
        <div>Switch to {chains[originNetwork].name}</div>
    {/if}
{/if}

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
