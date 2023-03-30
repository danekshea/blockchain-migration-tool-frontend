<script lang="ts">
    import { chains } from "../utils/blockchain";

    export let connectstatus = "Connect";
    export let address = "";
    export let chainid = 0;

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            console.log("MetaMask is installed!");
            address = await ethereum.request({ method: "eth_requestAccounts" });
            address = address[0];
            console.log(address);
            connectstatus = "Connected";
            chainid = await window.ethereum.networkVersion;
        } else {
            connectstatus = "Metamask is not installed.";
        }
    }
</script>
<nav>
    <div class="container">
        <button class="btn" id="connect-btn" on:click={connect}>{connectstatus}</button>
        {#if address && chainid}
            <h4>Address: {address}</h4>
            <h4>Network: {chains[chainid].name}</h4>
            <hr>
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
