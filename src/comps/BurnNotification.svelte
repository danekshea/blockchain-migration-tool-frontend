<script lang="ts">
    import { Container, Grid, Button, Group, Card, Image, Text, Notification } from '@svelteuidev/core'
    export let burning;

    function onMint() {
        burning=false;
    }
</script>

{#if burning===true}
    <Notification on:close={onMint} class="fixed top-1 right-1 z-10" title='Burning NFT...' loading>
        Please wait until your NFT is migrated before performing more burns
    </Notification>
{/if}