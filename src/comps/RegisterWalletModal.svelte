<script>
    import {Button, Modal, Text, Anchor, Stack } from "@svelteuidev/core";
    import { RegistrationStatus } from "../types"

    export let registerWalletModal;
    export let status;

    function closeRegisterModal() {
        registerWalletModal = false;
    }

    function registering() {
        status = RegistrationStatus.Registering
    }

</script>

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