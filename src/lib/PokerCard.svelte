<script lang="ts">
import { scale } from "svelte/transition";
let { suit = 'hearts', rank = 'A', flipped = false } = $props();


let fontColor = $derived((suit === 'H' || suit === 'D') ? 'red' : 'black');

</script>

<div
  transition:scale={{duration: 500}}
  class="w-16 h-24 p-1 bg-white border border-black rounded-md {suit}">
    
    {#if flipped}
      <p class="black text>2xl font-bold">?</p>
    {:else}
    <p class="black text-2xl font-bold">{rank}</p>
    <p class="font-bold text-2xl" style='color: {fontColor};'>
    {#if suit === 'H'}
      ♥
    {:else if suit === 'D'}
      ♦
    {:else if suit === 'C'}
      ♣
    {:else if suit === 'S'}
      ♠
    {:else}
        {suit}
    {/if}
    </p>
    {/if}

</div>


<style>


</style>