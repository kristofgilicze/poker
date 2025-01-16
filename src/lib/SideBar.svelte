<script lang="ts">
    import { HandRank, type PlayerScore } from "../types";

let { log, scores }: { log: string[], scores: PlayerScore[] } = $props();
</script>

<div class="w-1/4 h-full bg-zinc-300 p-4">
    <h2 class="text-2xl font-bold">Game Log</h2>
    <ul class="list-disc-none list-inside bg-black font-mono text-green-600 p-2 rounded-lg mb-6">
        {#each log as entry}
            <li>{entry}</li>
        {/each}
    </ul>

    <h2 class="text-2xl font-bold">Player Scores</h2>
    <ul class="list-disc list-inside">
        {#each scores as { player, score, hand }}
            <li>
                Player {player+1}: {HandRank[score]}({score})
                <ul class="flex flex-row gap-4 justify-around">
                {#each hand as card}
                    <li>{card.rank}{card.suit}</li>
                {/each}
                </ul>
            </li>
        {/each}
    </ul>
</div>