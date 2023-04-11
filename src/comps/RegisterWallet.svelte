<script>
    import {Button, Notification, Modal, Text, Anchor, Stack } from "@svelteuidev/core";
    import { completedSteps } from "../stores/generic"
    import { Check, Cross2 } from 'radix-icons-svelte';

    let registerWalletModal = false;

    function openRegisterModal() {
        registerWalletModal = true;
    }

    function closeRegisterModal() {
        registerWalletModal = false;
    }

    const RegistrationStatus = {
        Unchecked: 0,
        Checking: 1,
        Unregistered: 2,
        Registering: 3,
        Registered: 4
    };

    let status = RegistrationStatus.Unchecked;

    function registerSuccess() {
        completedSteps.set(2)
        console.log("success", completedSteps)
        status = RegistrationStatus.Registered;
    }

    function registerFail() {
        status = RegistrationStatus.Unregistered;
    }

    function checkRegistered() {
        status = RegistrationStatus.Checking
    }

    function registering() {
        status = RegistrationStatus.Registering
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
        <Modal size="lg" opened={registerWalletModal} on:close={closeRegisterModal} title="Registering your wallet on Immutable X">
            <!-- Modal Content -->
            <Stack>
                <Text color="dimmed">
                    Registering on Immutable is free of charge and will only occur once. 
                </Text>
                <Text color="dimmed">
                    To find out more about registering on Immutable X, please click <Anchor>here</Anchor> 
                </Text>
            </Stack>
            <Button on:click={registering} class="mt-5" variant="outline" color="gray" radius="xl">
                I understand. Register me on Immutable X!
            </Button>
        </Modal>
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