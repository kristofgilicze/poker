<script lang="ts">
    import { HandRank } from "../types";

let { score }: { score: HandRank } = $props();
</script>

<div>
    {#if score}
        {HandRank[score]}({score})
    {:else}
        <p>Score not yet calculated</p>
    {/if}
</div>