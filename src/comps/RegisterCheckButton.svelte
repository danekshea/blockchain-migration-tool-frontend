<script lang="ts">
    import { Button, Notification } from "@svelteuidev/core";
    import { completedSteps } from "../stores/generic"
    import { Check, Cross2 } from 'radix-icons-svelte';
    import { RegistrationStatus } from "../types"

    export let status;
    let checking = false;

    function registerSuccess() {
        completedSteps.set(2)
        status = RegistrationStatus.Registered;
    }

    function registerFail() {
        status = RegistrationStatus.Unregistered;
        checking = false;
    }

    function checkRegistered() {
        checking = true;
    }
</script>

{#if status === RegistrationStatus.Unchecked}
    <Button class="mt-5" on:click={checkRegistered} variant="light" color="orange" radius="xl">
        Check if I'm registered on Immutable X!
    </Button>
    {#if checking === true}
        <Notification on:close={registerFail} class="fixed top-1 right-1 z-10" title='Checking registration' loading>
            Checking registration status...
        </Notification>
    {/if}
{:else if status === RegistrationStatus.Unregistered}
    <Notification on:close={registerFail} class="fixed top-1 right-1 z-10" title='Fail' icon={Cross2} color='red'>
        Not registered on Immutable X.
    </Notification>
{:else if status === RegistrationStatus.Registered}
    <Notification on:close={registerSuccess} class="fixed top-1 right-1 z-10" title='Success' icon={Check} color='teal'>
        Successfully registered on Immutable X!
    </Notification> 
{/if}