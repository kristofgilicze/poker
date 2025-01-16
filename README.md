Programming homework – Poker
Objective:
Create a program to simulate a simple round of Poker, dealing cards to players and evaluating the game setup. This task is designed to assess your understanding of programming fundamentals, randomness, and basic game logic.
Specifications:
    1. Deck Setup:
    • The program should initialize a standard 52-card deck with the following suits and ranks:
    • Suits: H (Hearts), D (Diamonds), C (Clubs), S (Spades).
    • Ranks: 2, 3, 4, ..., 10, J, Q, K, A.
    • Ensure that each card is unique and only drawn maximum once.
    2. Card Dealing:
    • Shuffle the deck randomly.
    • Deal 2 cards to each of the 4 players.
    • Deal 3 cards to the middle (community cards).
    3. Output:
    • Display the cards dealt to each player and the community in a simple format:
    • Example: Player 1: H2, S10; …; Community: D5, CQ, SA.
    4. Determine the winner
    • Evaluate each player’s hand based on the 2 personal cards and the 3 community cards.
    • Simplified rules in ascending ranking (from least valuable to most):
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
Implement your solution in any programming language of your choice, and pay attention to correctness, clarity, code quality and robustness.