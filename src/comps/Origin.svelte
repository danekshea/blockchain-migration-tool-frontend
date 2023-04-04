<script>
// @ts-nocheck

    import { ethers } from "ethers";
    import { originTokenStore } from "../stores/tokens";
    import { chains, abi, tokenScannerURL } from "../utils/blockchain";

    export let address = "";
    export let originCollectionAddress = "";
    export let originChain;

    async function burn(tokenID) {
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
        originTokenStore.fetchTokens(address, originCollectionAddress, originChain);
        originTokenStore.startInterval(address, originCollectionAddress, originChain);
    } 
    else {
        originTokenStore.stopInterval();
    }
</script>


<div class="tokenlist">
    <ul>
      {#each $originTokenStore as token}
        <li>
          <div class="token">
            <img src="{chains[originChain].img}" alt="{chains[originChain].shortName}" />
            {#if tokenScannerURL(originCollectionAddress, token.token_id, originChain)}
              <a href={tokenScannerURL(originCollectionAddress, token.token_id, originChain)} target="_blank" rel="noreferrer">{token.token_id}</a>
            {:else}
              {token.token_id}
            {/if}<button class="btn" on:click={() => burn(token.token_id)}>Migrate</button>
          </div>
        </li>
      {/each}
    </ul>
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
