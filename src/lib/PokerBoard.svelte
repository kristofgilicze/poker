<script lang="ts">
import type { Card, Hand, PlayerScore } from "../types";
import PlayerSeat from "./PlayerSeat.svelte";
import PokerCard from "./PokerCard.svelte";

let { 
    players,
    community,
    deck,
    scores, 
    winner,
}: { players: Hand[], community: Hand, deck: Card[], scores: PlayerScore[], winner: number | undefined } = $props()

let scoresOrderedByPlayer = $derived([...scores].sort((a, b) => a.player - b.player))

</script>


<div class="flex flex-col justify-between bg-green-600 rounded-xl max-w-7xl h-full p-4">

    <section class="grid grid-cols-12 gap-4 pb-4">
        {#each deck as card}
            <PokerCard rank={card.rank} suit={card.suit} />
        {/each}
    </section>

    <section class="flex flex-row gap-4 pb-4 justify-center">
        {#each community as card}
            <PokerCard rank={card.rank} suit={card.suit} />
        {/each}
    </section>

    <section class="flex flex-row p-4 gap-4 justify-around">
        {#each players as player, idx}
            <PlayerSeat
                winner={idx === winner}
                playerIdx={idx}
                hand={player}
                score={scoresOrderedByPlayer[idx]?.score}
            />
        {/each}
    </section>

</div>
