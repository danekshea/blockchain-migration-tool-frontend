<script lang="ts">
    import { Button } from "@svelteuidev/core";
    import { completedSteps, registrationStatus } from "../stores/generic"
    import { RegistrationStatus } from "../types"

    export let client, address;
    let isRegistered;

    async function checkRegistered(address) {
        registrationStatus.set(RegistrationStatus.Checking);
        try {
            isRegistered = await client.getUser(address);
            if (isRegistered.accounts.length) {
                console.log("registered")
                registrationStatus.set(RegistrationStatus.Registered);
                completedSteps.set(2)
            }
        } catch (error) {
            console.error(error)
            registrationStatus.set(RegistrationStatus.Unregistered);            
        }
    }
</script>
<Button class="mt-5" on:click={() => checkRegistered(address)} variant="light" color="orange" radius="xl">
    Check if I'm registered on Immutable X!
</Button>