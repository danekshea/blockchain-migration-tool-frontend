<script lang="ts">
    import { Skeleton, Container, Grid, Card, Image, Group, Button, Text } from '@svelteuidev/core';

    export let loading=true;
</script>
<nav>
    <Container class="mt-5" size="xs">
        <Grid>
            {#each [1] as n}
            <Grid.Col span={4}>
                <Skeleton visible={loading}>
                    <Card radius="lg" class="group">
                        <Card.Section>
                            <!-- To change src path to NFT metadata if possible -->
                            <Group position="center">
                                <Image
                                    src='../../nft.png'
                                    fit='contain'
                                    alt='NFT'
                                />
                            </Group>
                            <Text class="m-2" weight={500}>{n}</Text>
                        </Card.Section>
                    </Card>
                </Skeleton>
            </Grid.Col>
            {/each}
        </Grid>
    </Container>
</nav>
<style>
    
</style>
