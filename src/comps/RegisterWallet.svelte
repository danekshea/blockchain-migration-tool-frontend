<script>
    import { Button, Notification } from "@svelteuidev/core";
    import { completedSteps } from "../stores/generic"
    import { Check, Cross2 } from 'radix-icons-svelte';
    import { RegistrationStatus } from "../types"
    import RegisterWalletModal from "./RegisterWalletModal.svelte";
    
    let status = RegistrationStatus.Unchecked;
    let registerWalletModal = false;

    function openRegisterModal() {
        registerWalletModal = true;
    }

    function registerSuccess() {
        completedSteps.set(2)
        status = RegistrationStatus.Registered;
    }

    function registerFail() {
        status = RegistrationStatus.Unregistered;
    }

    function checkRegistered() {
        status = RegistrationStatus.Checking
    }
</script>

<div>
    {#if status === RegistrationStatus.Unchecked}
        <Button class="mt-5" on:click={checkRegistered} variant="light" color="orange" radius="xl">
            Check if I'm registered on Immutable X!
        </Button>
    {:else if status === RegistrationStatus.Checking}
        <Button class="mt-5" disabled variant="light" color="orange" radius="xl">
            Checking registration status...
        </Button>
        <Notification on:close={registerFail} class="fixed top-1 right-1 z-10" title='Fail' icon={Cross2} color='red'>
            Not registered on Immutable X.
        </Notification> 
    {:else if status === RegistrationStatus.Unregistered}
        <Button on:click={openRegisterModal} class="mt-5" variant="light" color="orange" radius="xl">
            Register me on Immutable X!
        </Button>
        <RegisterWalletModal bind:registerWalletModal bind:status/>
    {:else if status === RegistrationStatus.Registering}
        <Button class="mt-5" disabled variant="light" color="orange" radius="xl">
            Registering...
        </Button>    
        <Notification on:close={registerSuccess} class="fixed top-1 right-1 z-10" title='Registering wallet' loading color='teal'>
            Registering on Immutable X...
        </Notification> 
    {:else}
        <Notification on:close={registerSuccess} class="fixed top-1 right-1 z-10" title='Success' icon={Check} color='teal'>
            Successfully registered on Immutable X!
        </Notification> 
    {/if}
</div>