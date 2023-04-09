<script>
    import {Button, Notification } from "@svelteuidev/core";
    import { completedSteps } from "../stores/generic"
    import { Check, Cross2 } from 'radix-icons-svelte';

    export let walletConnected = false;
    export let walletAddress = "";
    export let chainId = 0;
    export let disclaimers = [];
    let walletOptionsModal = false;
    const CONNECT_WALLET = "Connect wallet";	
    const DISCONNECT = "Disconnect";
    let registered = false;
    let check = false;

    function registerSuccess() {
        completedSteps.set(2)
        console.log("success", completedSteps)
        registered = true;
    }

    function checkRegistered() {
        check = true
    }
</script>

<div>
    {#if registered===false && check===true}
        <Notification on:close={registerSuccess} class="fixed top-1 right-1 z-10" title='Register wallet' icon={Check} color='teal'>
            Successfully registered on Immutable X!
        </Notification>
    {/if}
    {#if registered===false}
        <Button class="mt-5" on:click={checkRegistered} variant="light" color="orange" radius="xl">
            Check if I'm registered on Immutable X!
        </Button>
    {/if}
</div>