import { HandRank, type Hand, type PlayerScore } from "../types";

// Simplified scoring: rank high card, pair, three of a kind, straight
const rankValues: { [key: string]: number } = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
    '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
};

export function formatHand(hand: Hand): string {
    return hand.map(card => `${card.suit}${card.rank}`).join(', ');
}

/*
Evaluate each player’s hand based on the 2 personal cards and the 3 community cards.

Simplified rules in ascending ranking (from least valuable to most):
◦ High Card:
    ▪ The highest single card wins if no other combination exists.
    ▪ Card ranking: 2 < 3 < ... < 10 < J < Q < K < A.
◦ Pair:
    ▪ Two cards of the same rank.
    ▪ The highest pair wins. If tied, the highest remaining card decides.
◦ Three of a Kind:
    ▪ Three cards of the same rank.
    ▪ The higher-ranked three of a kind wins.
◦ Straight:
    ▪ Five consecutive ranks (e.g., 5, 6, 7, 8, 9).
    ▪ The straight with the highest ending card wins.
◦ Tie-breaking:
    ▪ If players have the same combination, compare the highest card(s) in their full hand.
    ▪ Use ranks to resolve any ties.
*/
export function scoreHand(hand: Hand): HandRank {



    const rankCount: { [key: string]: number } = {};

    hand.forEach(card => {
        rankCount[card.rank] = (rankCount[card.rank] || 0) + 1;
    });

    const pairs = Object.entries(rankCount).filter(([, count]) => count === 2).length;

    const threeOfAKind = Object.entries(rankCount).some(([, count]) => count === 3);

    const ranks = Object.keys(rankCount).map(rank => rankValues[rank]).sort((a, b) => a - b);

    const isStraight = ranks.length === 5 && ranks[4] - ranks[0] === 4;

    if (isStraight) return HandRank.Straight; // Straight
    if (threeOfAKind) return HandRank.ThreeOfAKind; // Three of a Kind
    if (pairs) return HandRank.Pair; // Pair
    return HandRank.HighCard; // High Card
}

export function scoreRound(players: Hand[], community: Hand): PlayerScore[] {

    const playerScores = players.map((hand, index) => ({
        player: index,
        score: scoreHand([...hand, ...community]),
        hand: [...hand, ...community]
    }));

    playerScores.sort((a, b) => b.score - a.score);


    // check if there are multiple players with the same score
    if (playerScores.length > 1 && playerScores[0].score === playerScores[1].score) {
        return tieBreak(playerScores);
    }

    return playerScores;
}

export function tieBreak(playerScores: PlayerScore[]): PlayerScore[] {
    /* Tie-breaking:
    ▪ If players have the same combination, compare the highest card(s) in their full hand.
    ▪ Use ranks to resolve any ties. */
    const highestScore = playerScores[0].score;
    const highestScoringPlayers = playerScores.filter(score => score.score === highestScore);

    if (highestScoringPlayers.length > 1) {


        const highestRanks = highestScoringPlayers.map(score => {
            const ranks = score.hand.map(card => card.rank);
            return Math.max(...ranks.map(rank => rankValues[rank]));
        });

        const highestRank = Math.max(...highestRanks);

        const tieBreaked = highestScoringPlayers.filter(score => {
            const ranks = score.hand.map(card => card.rank);
            return Math.max(...ranks.map(rank => rankValues[rank])) === highestRank;
        });

        return tieBreaked.concat(playerScores.filter(score => !tieBreaked.includes(score)));
    }

    return playerScores;
}