<script lang="ts">
    import { completedSteps } from "../stores/generic";
    import { CheckboxGroup } from "@svelteuidev/core"

    let disclaimers=[];

    const items = [
        { label: 'I am willing to burn my NFTs on CHAIN_XYZ to receive my NFTs on Immutable X', value: 'disclaimer1' },
        { label: 'I understand I will be receiving my NFTs on my current wallet address', value: 'disclaimer2' }
    ];

    function checkDisclaimers() {
        if (disclaimers.length == 2) {
            completedSteps.set(3);
        }
    }

</script>

<div class="mt-5">
    <CheckboxGroup on:change={checkDisclaimers} spacing='xs' color='blue' size='sm' items={items} bind:value={disclaimers} direction={'column'}/>
</div>