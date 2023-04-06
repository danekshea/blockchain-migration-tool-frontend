<script lang="ts">
    import { originChain, chains } from "../utils/blockchain";
    import { Container, Grid, Button, Group, Card, Image, Text } from '@svelteuidev/core'

    export let walletAddress = "";
    export let chainId = 0;
    export let selection = false;
    export let disclaimers=[];
    let focus=false;

    function confirmSelection() {
        selection = true;
        console.log("Selection Confirmed")
    }

    function resetSelection() {
        selection = false;
        console.log("Selection RESET")
    }

    function onFocus() {
        focus = true;
        console.log("NFT in focus")
    }

    function offFocus() {
        focus = false;
        console.log("NFT in focus")
    }

</script>

<div class="container">
    <h2>
        Step 3: Burn NFTs
    </h2>
    {#if walletAddress && chainId != 0 && disclaimers.length === 2}
    <Container>
        <Grid>
            {#each [1,2,3,4,5,6] as n}
            <Grid.Col span={4}>
                <Card on:mouseover={onFocus} on:mouseleave={offFocus}>
                    <Card.Section>
                        <!-- To change src path to NFT metadata if possible -->
                        <Image
                            src='../../nft.png'
                            fit='contain'
                            alt='NFT'
                        />
                        <Group position='center'>
                            <Text weight={500}>#{n}</Text>
                        </Group>
                    </Card.Section>
                    {#if focus}
                        <Button variant='light' color='blue' fullSize>
                            Migrate
                        </Button>
                    {/if}  
                </Card>
            </Grid.Col>
            {/each}
        </Grid>
    </Container>
    {/if}
</div>

<style>
</style>
