<script lang="ts">
    import { chains } from "../utils/imx";

    export let connectstatus = "Connect";
    export let network = "";
    export let address = "";

    // import { createEventDispatcher } from 'svelte';

    // const dispatch = createEventDispatcher();

    // function connect() {
	// 	dispatch('connect');
	// }

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            console.log("MetaMask is installed!");
            address = await ethereum.request({ method: "eth_requestAccounts" });
            address = address[0];
            console.log(address);
            connectstatus = "Connected";
            let networktemp: string = await window.ethereum.networkVersion;
            network = chains[networktemp];
            console.log(network);
        } else {
            connectstatus = "Metamask is not installed.";
        }
    }
</script>
<nav>
    <div class="container">
        <button class="btn" id="connect-btn" on:click={connect}>{connectstatus}</button>
        {#if address}
            <h4>Address: {address}</h4>
            <h4>Network: {network}</h4>
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
