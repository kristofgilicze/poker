<script lang="ts">
import type { Card, Hand, HandRank } from "../types";
import PlayerSeat from "./PlayerSeat.svelte";
import PokerCard from "./PokerCard.svelte";
    import RankDisplay from "./RankDisplay.svelte";

let { hand, playerIdx, score, winner }: { hand: Hand, playerIdx: number, score: HandRank | undefined, winner: boolean } = $props()

let winnerClass = $derived(winner ? 'bg-yellow-200 animate-pulse' : 'bg-gray-200')
</script>


<div class="border rounded-lg border-yellow-400 p-4 {winnerClass}">
    <!-- {#if score}
        <RankDisplay score={score} />
    {:else}
        <p>Score not yet calculated</p>
    {/if} -->
    
    <ul class="flex flex-row">
    {#each hand as card}
        <li class="p-2">
            <PokerCard rank={card.rank} suit={card.suit} />
        </li>
    {/each}

    </ul>
    <h2 class="font-bold uppercase text-lg">seat {playerIdx+1}.</h2>
</div>
