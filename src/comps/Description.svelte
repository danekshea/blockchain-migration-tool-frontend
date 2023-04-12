<script lang="ts">
    import { Title, Code, Anchor } from "@svelteuidev/core"
</script>

<div>
    <Title class="font-bold text-center p-5" order={1}>
        Transfer your NFTs to Immutable X
    </Title>
    <div class="min-w-full items-center text-center pb-5">
        <Code class="text-xl" color="blue">Configured for </Code>
        <Anchor>
            <Code class="text-xl" color="blue">COLLECTION_XYZ</Code>
        </Anchor> 
        <Code class="text-xl" color="blue">on</Code>
        <Anchor>
            <Code class="text-xl" color="blue">CHAIN_XYZ</Code>
        </Anchor>
    </div>
</div>