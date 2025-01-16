import { HandRank, type Card, type PlayerScore } from "../types";
import { scoreHand } from "./utils";

export class Hand extends Array<Card> {
    public toString(): string {
        return this.map(card => `${card.suit}${card.rank}`).join(', ');
    }
}

export class PokerState {
    public deck: Card[] = $state([]);
    public players: Hand[] = $state([]);
    public communityCards: Hand = $state(new Hand());
    public playerScores: PlayerScore[] = $state([]);
    public log: string[] = $state([]);
    public winner: number | undefined = $derived(this.playerScores.length > 1 ? this.playerScores[0].player : undefined);


    constructor(playerCount: number = 4) {
        this.initializeDeck();
        this.players = Array(playerCount).fill([]);
    }

    private initializeDeck(): void {
        const suits = ['H', 'D', 'C', 'S'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.deck = suits.flatMap(suit => ranks.map(rank => ({ suit, rank })));
    }

}