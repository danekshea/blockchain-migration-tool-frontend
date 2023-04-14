<script lang="ts">
    import { RegistrationStatus } from "../types"
    import RegisterCheckButton from "./RegisterCheckButton.svelte";
    import RegisterWalletButton from "./RegisterWalletButton.svelte";

    let status = RegistrationStatus.Unchecked;

</script>

<div>
    <!-- If wallet already registered, can immediately move onto next step -->
    {#if status === RegistrationStatus.Unchecked}
        <RegisterCheckButton bind:status/>
    <!-- If wallet not registered, need to register before proceeding -->
    {:else if status === RegistrationStatus.Unregistered}
        <RegisterWalletButton bind:status/>
    {/if}
</div>