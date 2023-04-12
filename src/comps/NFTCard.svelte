<script>
    import { Skeleton, Card, Image, Group, Text, Button } from '@svelteuidev/core';
    import { completedSteps } from "../stores/generic";
    import { NFTDisplayCategory } from "../types"

    export let nft;
    export let burning;
    export let category;

    function onBurn() {
        burning=true;
        completedSteps.set(4)
    }
</script>

<Skeleton radius="lg" visible={category !== NFTDisplayCategory.Burning}>
    <Card radius="lg" class="group">
        <Card.Section>
            <!-- To change src path to NFT metadata if possible -->
            <Group position="center">
                <Image
                    src='../../nft.png'
                    fit='contain'
                    alt='NFT'
                />
                {#if category === NFTDisplayCategory.Burning && burning === false}
                    <Button class= "absolute hidden group-hover:block" variant='filled' color='dark' on:click={onBurn}>
                        Migrate
                    </Button>
                {/if}
            </Group>
            <Text class="m-2" weight={500}>{nft}</Text>
        </Card.Section>
    </Card>
</Skeleton>
