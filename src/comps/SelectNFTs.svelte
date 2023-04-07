<script lang="ts">
    import { originChain, chains } from "../utils/blockchain";
    import { Container, Grid, Button, Group, Card, Image, Text, Notification } from '@svelteuidev/core'

    export let walletAddress = "";
    export let chainId = 0;
    export let selection = false;
    export let disclaimers=[];
    let burning=false;

    function confirmSelection() {
        selection = true;
        console.log("Selection Confirmed")
    }

    function resetSelection() {
        selection = false;
        console.log("Selection RESET")
    }

    function onFocus() {
        //focus = true;
        console.log("NFT in focus")
    }

    function offFocus() {
        //focus = false;
        console.log("NFT in focus")
    }

    function onBurn() {
        burning=true;
    }

    function onMint() {
        burning=false
    }

</script>

<div class="container">
    <h2>
        Step 3: Burn NFTs
    </h2>
    {#if burning===true}
    <Notification on:close={onMint} class="fixed top-1 right-1 z-10" title='Uploading data' loading>
        Please wait until your NFT is migrated before performing more burns
    </Notification>
    {/if}
    {#if walletAddress && chainId != 0 && disclaimers.length === 2}
    <Container>
        <Grid>
            {#each [1,2,3,4,5,6] as n}
            <Grid.Col span={4}>
                <Card class="group">
                    <Card.Section>
                        <!-- To change src path to NFT metadata if possible -->
                        <Group>
                            <Image
                                src='../../nft.png'
                                fit='contain'
                                alt='NFT'
                            />
                            {#if burning===false}
                            <Button class= "absolute hidden group-hover:block" variant='light' color='blue' fullSize on:click={onBurn}>
                                Migrate
                            </Button>
                            {/if}
                        </Group>
                        <Text weight={500}>#{n}</Text>
                    </Card.Section>

                </Card>
            </Grid.Col>
            {/each}
        </Grid>
    </Container>
    {/if}
</div>

<style>
</style>
