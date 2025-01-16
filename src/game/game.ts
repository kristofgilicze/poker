import type { Card, Hand } from "../types";
import { PokerState } from "./PokerState.svelte";
import { formatHand, scoreHand, scoreRound } from "./utils";


export class PokerGame {
    public state: PokerState

    constructor(initialState: PokerState = new PokerState(4)) {
        this.state = initialState
    }

    private log(message: string): void {
        this.state.log.push(message);
    }
    
    public shuffleDeck(): void {
        for (let i = this.state.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.state.deck[i], this.state.deck[j]] = [this.state.deck[j], this.state.deck[i]];
        }

        this.log('# Deck shuffled');
    }

    public async dealCards(): Promise<void> {
        console.log(`dealing cards to ${this.state.players.length}`)

        for (let i = 0; i < this.state.players.length; i++) {
            this.state.players[i].push(...this.state.deck.splice(0, 2));
            // wait 1 second before dealing to next player
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        this.state.communityCards = this.state.deck.splice(0, 3);
        this.log('# Cards dealt');
    }

    public logHands(): void {
        this.state.players.forEach((hand, index) => {
            console.log(`Player ${index + 1}: ${formatHand(hand)}`);
            this.log(`Player ${index + 1}: ${formatHand(hand)}`);
        });
        this.log(`Community: ${formatHand(this.state.communityCards)}`);

    }

    public evaluate(): void {
        this.state.playerScores = scoreRound(this.state.players, this.state.communityCards)
        this.log(`Winner: Player ${this.state.playerScores[0].player+1}`);
    }
}

