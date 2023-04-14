<script lang="ts">
    import { Button, Modal, Text, Anchor, Stack, Group } from "@svelteuidev/core";
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

<Modal size="lg" opened={registerWalletModal} withCloseButton={false} title="Registering your wallet on Immutable X">
    <!-- Modal Content -->
    <Stack>
        <Text color="dimmed">
            Registering on Immutable is free of charge and will only occur once. 
        </Text>
        <Text color="dimmed">
            To find out more about registering on Immutable X, please click <Anchor>here</Anchor> 
        </Text>
    </Stack>
    <Group>
        <Button on:click={closeRegisterModal} class="mt-5" variant="light" color="gray" radius="xl">
            Cancel
        </Button>
        <Button on:click={registering} class="mt-5" variant="outline" color="gray" radius="xl">
            I understand. Register me on Immutable X!
        </Button>
    </Group>
</Modal>