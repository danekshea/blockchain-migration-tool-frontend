<script lang="ts">
    import { Skeleton, Card, Image, Group, Text, Button } from '@svelteuidev/core';
    import BurnButton from '../burn/BurnButton.svelte'
    import { NFTDisplayCategory } from "../../types"

    export let nft;
    export let burning;
    export let category;

</script>

<Skeleton radius="lg" visible={category !== NFTDisplayCategory.Burning}>
    <Card shadow='lg' radius="lg" class="group">
        <Card.Section>
            <!-- To change src path to NFT metadata if possible -->
            <Group position="center">
                <Image
                    src='../../nft.png'
                    fit='contain'
                    alt='NFT'
                />
                <BurnButton category={category} bind:burning />
            </Group>
            <Text class="m-2" weight={500}>{nft}</Text>
        </Card.Section>
    </Card>
</Skeleton>
