import { describe, it, expect } from 'vitest';
import { scoreRound, scoreHand } from '../game/utils';
import { HandRank } from '../types';

describe('Scoring test', () => {

    it('High card', () => {

        const hand = [
            { suit: 'H', rank: '2' },
            { suit: 'D', rank: '3' },
            { suit: 'C', rank: '4' },
            { suit: 'S', rank: '5' },
            { suit: 'H', rank: '7' },
        ];

        expect(scoreHand(hand)).toBe(HandRank.HighCard);
    
    });

    it('Pair', () => {

        const hand = [
            { suit: 'H', rank: '2' },
            { suit: 'D', rank: '3' },
            { suit: 'C', rank: '4' },
            { suit: 'S', rank: '5' },
            { suit: 'H', rank: '5' },
        ];

        expect(scoreHand(hand)).toBe(HandRank.Pair);
    
    });


    it('Three of a kind', () => {

        const hand = [
            { suit: 'H', rank: '2' },
            { suit: 'D', rank: '3' },
            { suit: 'C', rank: '3' },
            { suit: 'S', rank: '3' },
            { suit: 'H', rank: '5' },
        ];

        expect(scoreHand(hand)).toBe(HandRank.ThreeOfAKind);
    
    });


    it('Straight', () => {

        const hand = [
            { suit: 'H', rank: '2' },
            { suit: 'D', rank: '3' },
            { suit: 'C', rank: '4' },
            { suit: 'S', rank: '5' },
            { suit: 'H', rank: '6' },
        ];

        expect(scoreHand(hand)).toBe(HandRank.Straight);
    
    });


    it('Straight', () => {

        const hand = [
            { suit: 'H', rank: '10' },
            { suit: 'D', rank: 'J' },
            { suit: 'C', rank: 'Q' },
            { suit: 'S', rank: 'K' },
            { suit: 'H', rank: 'A' },
        ];

        expect(scoreHand(hand)).toBe(HandRank.Straight);
    
    });

});


describe('Round scoring test', () => {
    it('Needs tie breaker', () => {
        
            const players = [
                [
                    { suit: 'H', rank: '2' },
                    { suit: 'D', rank: '3' },
                    { suit: 'C', rank: '4' },
                    { suit: 'S', rank: '5' },
                    { suit: 'H', rank: '7' },
                ],
                [
                    { suit: 'H', rank: '2' },
                    { suit: 'D', rank: '3' },
                    { suit: 'C', rank: '4' },
                    { suit: 'S', rank: '5' },
                    { suit: 'H', rank: '8' },
                ]
            ];
        
            const community = [
                { suit: 'H', rank: '10' },
                { suit: 'D', rank: 'J' },
                { suit: 'C', rank: 'Q' },
                { suit: 'S', rank: 'K' },
                { suit: 'H', rank: 'A' },
            ];
        
            const scores = scoreRound(players, community);
  
        expect(scores[0].score === scores[1].score).toBe(true);

    });


});