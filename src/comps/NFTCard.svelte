<script>
    import { Card, Image, Group, Text, Button } from '@svelteuidev/core';
    import { completedSteps } from "../stores/generic";

    export let nft;
    export let burning;
    export let showBurnButton;

    function onBurn() {
        burning=true;
        completedSteps.set(4)
    }
</script>

<Card radius="lg" class="group">
    <Card.Section>
        <!-- To change src path to NFT metadata if possible -->
        <Group position="center">
            <Image
                src='../../nft.png'
                fit='contain'
                alt='NFT'
            />
            {#if showBurnButton === true && burning === false}
                <Button class= "absolute hidden group-hover:block" variant='filled' color='dark' on:click={onBurn}>
                    Migrate
                </Button>
            {/if}
        </Group>
        <Text class="m-2" weight={500}>{nft}</Text>
    </Card.Section>
</Card>