<script lang="ts">
    import { Notification } from "@svelteuidev/core";
    import { registrationStatus } from "../stores/generic"
    import { Check, Cross2 } from 'radix-icons-svelte';
    import { RegistrationStatus } from "../types"

    let visible = true;

    function closeNotification() {
        setTimeout(() => visible = false, 0);
    }
</script>

{#if $registrationStatus === RegistrationStatus.Checking}
    <Notification withCloseButton={false} class="fixed top-1 right-1 z-10 min-w-[300px]" title='Checking registration' loading>
        Checking registration status...
    </Notification>
{:else if $registrationStatus === RegistrationStatus.Unregistered && visible === true}
    <Notification on:close={closeNotification} class="fixed top-1 right-1 z-10 min-w-[300px]" title='Wallet unregistered' icon={Cross2} color='red'>
        Please register on Immutable X
    </Notification>
{:else if $registrationStatus === RegistrationStatus.Registered && visible === true}
    <Notification on:close={closeNotification} class="fixed top-1 right-1 z-10 min-w-[300px]" title='Wallet registered' icon={Check} color='teal'>
        Successfully registered on Immutable X!
    </Notification> 
{/if}