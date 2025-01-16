export interface Card {
    suit: string;
    rank: string;
}

export type Hand = Card[];

export type PlayerScore = {
    player: number;
    score: HandRank;
    hand: Hand;
}

export enum HandRank {
    HighCard = 1,
    Pair = 2,
    ThreeOfAKind = 3,
    Straight = 4
}