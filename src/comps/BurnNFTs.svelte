<script lang="ts">
    import { completedSteps } from "../stores/generic";
    import { originChain, chains } from "../utils/blockchain";
    import { Container, Grid, Button, Group, Card, Image, Text, Notification } from '@svelteuidev/core'

    export let walletAddress = "";
    export let chainId = 0;
    export let selection = false;
    export let disclaimers=[];
    export let loading=true;
    let burning=false;
    let originNFTs = [1, 2, 3];

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
        completedSteps.set(4)
    }

    function onMint() {
        burning=false;
        loading=false;
    }

</script>

<div class="container">
    {#if burning===true}
    <Notification on:close={onMint} class="fixed top-1 right-1 z-10" title='Uploading data' loading>
        Please wait until your NFT is migrated before performing more burns
    </Notification>
    {/if}
    <Container class="mt-5" size="xs">
        <Grid>
            {#each originNFTs as n}
            <Grid.Col span={4}>
                <Card radius="lg" class="group">
                    <Card.Section>
                        <!-- To change src path to NFT metadata if possible -->
                        <Group position="center">
                            <Image
                                src='../../nft.png'
                                fit='contain'
                                alt='NFT'
                            />
                            {#if burning===false}
                            <Button class= "absolute hidden group-hover:block" variant='filled' color='dark' on:click={onBurn}>
                                Migrate
                            </Button>
                            {/if}
                        </Group>
                        <Text class="m-2" weight={500}>{n}</Text>
                    </Card.Section>

                </Card>
            </Grid.Col>
            {/each}
        </Grid>
    </Container>
</div>

<style>
</style>
