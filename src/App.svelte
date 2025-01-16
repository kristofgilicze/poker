<script lang="ts">
import { onMount } from 'svelte';
import { PokerGame } from './game/game'
import { PokerState } from './game/PokerState.svelte';
import PokerTable from './lib/PokerTable.svelte';

const PLAYER_COUNT = 4;

const state = new PokerState(PLAYER_COUNT);

const game = new PokerGame(state);

onMount(async () => {
  game.shuffleDeck();

  await game.dealCards();

  game.logHands();
  game.evaluate();
})
</script>

<main>
  <PokerTable state={state} />
</main>
