<script lang="ts">
    import { originChain, chains } from "../utils/blockchain";
    import { Button, Checkbox, CheckboxGroup, Group } from "@svelteuidev/core"

    export let walletAddress = "";
    export let chainId = 0;
    export let disclaimers=[];

    const items = [
        { label: 'I am willing to burn my NFTs on CHAIN_XYZ to receive my NFTs on Immutable X', value: 'disclaimer1' },
        { label: 'I understand I will be receiving my NFTs on my current wallet address', value: 'disclaimer2' }
    ];

</script>
<div class="container">
    <h2>
        Step 2: Disclaimers
    </h2>
    {#if walletAddress && chainId != 0}
        <CheckboxGroup items={items} bind:value={disclaimers} direction={'column'}/>
    {/if}

</div>
<style>
    
</style>
