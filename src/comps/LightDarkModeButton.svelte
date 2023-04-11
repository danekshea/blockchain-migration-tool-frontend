<script>
    import { Button, ThemeIcon } from "@svelteuidev/core"
    import { Sun, Moon } from "radix-icons-svelte"

    export let isDark;

    function toggleTheme() {
		isDark = !isDark;
	}

</script>

{#if isDark === false}
<Button class="m-2" variant="outline" color="gray" size="lg" radius="xl" compact on:click={toggleTheme}> 
    <ThemeIcon variant="subtle" size="xs" color="dark">
        <Moon />
    </ThemeIcon>
</Button>
{:else}
<Button class="m-2" variant="outline" color="gray" size="lg" radius="xl" compact on:click={toggleTheme}> 
    <ThemeIcon variant="subtle" size="xs" color="dark">
        <Sun />
    </ThemeIcon>
</Button>
{/if}