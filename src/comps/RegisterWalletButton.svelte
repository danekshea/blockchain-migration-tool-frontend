<script lang="ts">
    import { Button, Notification } from "@svelteuidev/core";
    import { completedSteps, registrationStatus } from "../stores/generic"
    import { Check } from 'radix-icons-svelte';
    import { RegistrationStatus } from "../types"
    import RegisterWalletModal from "./RegisterWalletModal.svelte";

    //export let status = RegistrationStatus.Unchecked;
    export let client, address;

    let registerWalletModal = false;
    let registering = false;

    function openRegisterModal() {
        registerWalletModal = true;
    }

    function registerSuccess() {
        completedSteps.set(2)
        $registrationStatus = RegistrationStatus.Registered;
    }
</script>

<RegisterWalletModal bind:registerWalletModal bind:registering/>

{#if $registrationStatus === RegistrationStatus.Unregistered}
    {#if registering === false}
        <Button on:click={openRegisterModal} class="mt-5" variant="light" color="orange" radius="xl">
            Register me on Immutable X!
        </Button>
    {:else}
        <Notification on:close={registerSuccess} class="fixed top-1 right-1 z-10" title='Registering wallet' loading color='teal'>
            Registering on Immutable X...
        </Notification>
        <Button disabled class="mt-5" variant="light" color="orange" radius="xl">
            Registering...
        </Button>
    {/if}
{:else}
    <Notification on:close={registerSuccess} class="fixed top-1 right-1 z-10" title='Success' icon={Check} color='teal'>
        Successfully registered on Immutable X!
    </Notification> 
{/if}