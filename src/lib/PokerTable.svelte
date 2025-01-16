<script lang="ts">
  import type { PokerState } from "../game/PokerState.svelte";
  import PokerBoard from "./PokerBoard.svelte";
  import GameLog from "./SideBar.svelte";

  let { state }: { state: PokerState} = $props()
</script>

<div class="w-full h-screen bg-zinc-200">
  <div class="w-full h-full flex justify-center p-4">
    <PokerBoard 
      players={state.players}
      community={state.communityCards}
      deck={state.deck}
      scores={state.playerScores}
      winner={state.winner}
    />
    <GameLog log={state.log} scores={state.playerScores} />
  </div>
</div>
