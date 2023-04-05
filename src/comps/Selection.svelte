<script lang="ts">
    import { originChain, chains } from "../utils/blockchain";
    import { Grid, Button } from '@svelteuidev/core'

</script>

<div class="container">
    <p>
        Step 2: Select NFTs
    </p>
    <Button>Burn</Button>
    <Grid>
        <Grid.Col span={4}>1</Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
    </Grid>
</div>

<style>
    .btn {
        background: #17B5CB;
        padding: 1.15rem 1rem;
        width: 100%;
        color: white;
        border: 0px solid transparent;
        border-radius: 6px;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color .25s, color .25s, border-color .25s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
