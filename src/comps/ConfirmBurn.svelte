<script lang="ts">
    import { originChain, chains } from "../utils/blockchain";

    export let connectstatus = "Migrate";
    export let walletAddress = "";
    export let chainId = 0;
    export let selection = false;
    let network = "";

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            console.log("MetaMask is installed!");
            walletAddress = await ethereum.request({ method: "eth_requestAccounts" });
            walletAddress = walletAddress[0];
            console.log("Metamask connected to " + walletAddress);
            chainId = await window.ethereum.networkVersion;
            console.log("Metamask network: " + chainId);
            if(chainId != originChain) {
                connectstatus = "Wrong network";
            } else {
                connectstatus = "Connected";
            }
        } else {
            connectstatus = "Metamask is not installed.";
        }
    }
</script>
<nav>
    <div class="container">
        <h2>
            Step 3: Confirm and burn
        </h2>
        {#if walletAddress && chainId != 0 && selection}
        <button class="btn" id="connect-btn" on:click={connect}>{connectstatus}</button>
        {/if}
    </div>
</nav>
<style>
    .btn {
        background: #17B5CB;
        padding: 1.15rem 1rem;
        width: 100%;
        color: white;
        border: 0px solid transparent;
        border-radius: 6px;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color .25s, color .25s, border-color .25s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
