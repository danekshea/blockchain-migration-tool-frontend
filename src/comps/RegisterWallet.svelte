<script lang="ts">
    import { RegistrationStatus } from "../types"
    import RegisterCheckButton from "./RegisterCheckButton.svelte";
    import RegisterWalletButton from "./RegisterWalletButton.svelte";
    import { registrationStatus } from "../stores/generic"
    import { ImmutableX, Config } from "@imtbl/core-sdk"

    const config = Config.PRODUCTION;
    const client = new ImmutableX(config);
    const address = "0x25dd4094a519f692990ac6291db6ac8ad689f4a9";

</script>

<div>
    <!-- If wallet already registered, can immediately move onto next step -->
    {#if $registrationStatus === RegistrationStatus.Unchecked}
        <RegisterCheckButton client={client}/>
    <!-- If wallet not registered, need to register before proceeding -->
    {:else if $registrationStatus === RegistrationStatus.Unregistered}
        <RegisterWalletButton/>
    {/if}
</div>