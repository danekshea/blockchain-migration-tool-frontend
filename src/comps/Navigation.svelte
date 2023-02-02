<script lang="ts">
    import { chains } from "../utils/imx";

    let connectstatus = "Connect";
    let address = "";
    let network = "";

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            console.log("MetaMask is installed!");
            address = await ethereum.request({ method: "eth_requestAccounts" });
            connectstatus = "Connected";
            let networktemp: string = await window.ethereum.networkVersion;
            network = chains[networktemp];
        } else {
            connectstatus = "Metamask is not installed.";
        }
    }
</script>

<nav>
    <div class="container">
        <button class="btn btn-primary" id="connect-btn" on:click={connect}
            >{connectstatus}</button
        >
        <h4>{address}</h4>
        <h4>{network}</h4>
    </div>
</nav>

<style>
    nav {
        max-width: 1040px;
        margin: auto;
        display: flex;
        align-items: center;
        margin-top: 1rem;
        /* justify-content: space-between; */
    }
</style>
