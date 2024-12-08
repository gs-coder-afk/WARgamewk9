// WAR CARD GAME

//52 card deck 
// 4 suits : hearts, spades, clubs, diamonds
// rank assigned to each card (numerical value)
// shuffle deck 
// deal 26 cards to each player 
// score 


// Deck class 
// array to store cards 
// array to store card ranks/values
// array to store card suits 


class Deck {
    constructor () {
        this.deck = [];
        this.rank = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = [
            "Hearts ♥", 
            "Spades ♠", 
            "Diamonds ♦", 
            "Clubs ♣"
        ];
    }

// assigning each card to the 4 suits

createDeck () {
    for (let i = 0; i < this.suits.length; i++) {
        for (let j = 0; j < this.rank.length; j++) {
            let card = {
                name: `${this.rank[j]} of ${this.suits[i]}`,
                value: j + 1
            }
            
            this.deck.push (card) 
        }
    }
 } 

// shuffle or randomizing the deck created above

shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
}


} 

// Game structuring (or rules) 
// player names (1 & 2)
// player score 
// player hand

class Game {
 constructor () {
    this.player1 = {
        name: "Player 1", 
        score: 0, 
        hand: []
    } 
    this.player2 = {
        name: "Player 2", 
        score: 0, 
        hand: []
    } 
 } 
 
 playGame () { 
    const deck = new Deck 
 deck.createDeck() 
 deck.shuffleDeck() 

// dealing the deck randomly to both players until 
// all the cards are dealt 
// each player plays a card & the values/rank of the 
// cards are compared & a point is rewarded to the 
// player with the highest value/rank or a tie is 
// issued & no points are awarded to either player

 while (deck.deck.length !== 0) {
    this.player1.hand.push(deck.deck.shift())
    this.player2.hand.push(deck.deck.shift()) 
 } 
  for (let i = 0; i < this.player1.hand.length; i++) {
    if (this.player1.hand[i].value > this.player2.hand[i].value) {
        this.player1.score ++ 
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name} 
            Player 1 wins a point! 
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `);
    } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
        this.player2.score ++
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name} 
            Player 2 wins a point! 
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `);
    } else { 
        console.log(`
            P1 Card: ${this.player1.hand[i].name}
            P2 Card: ${this.player2.hand[i].name} 
            Tie: No points awarded .
            Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}
            `);
    }
  } 

// once all the cards are played after 26 moves the 
// final scores are compared for a winner to be 
// declared or a tie to be declared if scores are equal  
   
  if (this.player1.score > this.player2.score) {
    console.log(`Player 1 wins! 
        Final Score: P1: ${this.player1.score}
                     P2: ${this.player2.score}       
        `); 
  } else if  
    (this.player2.score > this.player1.score) {
        console.log(`Player 2 wins! 
            Final Score: P1: ${this.player1.score}
                         P2: ${this.player2.score}       
            `);
    } else { 
        console.log(`Tie! 
            Final Score: P1: ${this.player1.score}
                         P2: ${this.player2.score}       
            `);
    
  }


 }

}

const game = new Game 
game.playGame()
 