<script lang="ts">
    import { Button } from '@svelteuidev/core';
    import { completedSteps } from "../stores/generic";
    import { NFTDisplayCategory } from "../types"
    import BurnNotification from "./BurnNotification.svelte";

    export let burning;
    export let category;

    function onBurn() {
        burning=true;
        completedSteps.set(4)
    }
</script>

<BurnNotification bind:burning/>

{#if category === NFTDisplayCategory.Burning && burning === false}
    <Button class= "absolute hidden group-hover:block" variant='filled' color='dark' on:click={onBurn}>
        Migrate
    </Button>
{/if}
