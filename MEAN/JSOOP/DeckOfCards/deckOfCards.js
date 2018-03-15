//Card class
class Card {
    constructor(suit,value,point){
        this.suit = suit;       //Heart, diamond, club, and spade
        this.value = value;     //Ace, 2-10, Jack, Queen, King
        this.point = point;     //1-11
    }

    //
    info(){
        return this;
    }
}

//Deck class
class Deck {
    constructor(){
        this.base = [];
        this.buildDeck();
    }
    
    //This generates the standard 52-card deck
    buildDeck(){
        for(let i = 1; i < 14; i++){
            for(let j = 0; j < 4; j++){
                let value = "";
                let suit = "";
                let point = i;
                if(j == 0){
                    suit = "Heart";
                }
                if(j == 1){
                    suit = "Diamond";
                }
                if(j == 2){
                    suit = "Club";
                }
                if(j == 3){
                    suit = "Spade";
                }
                value = i.toString();
                if(i == 1) {
                    value = "Ace";
                    point = 1;
                }
                if(i == 11){
                    value = "Jack";
                    point = 10;
                }
                if(i == 12){
                    value = "Queen";
                    point = 10;
                }
                if(i == 13){
                    value = "King";
                    point = 10;
                }

                this.base.push(new Card(suit,value,point));
            }
        }
    }

    //Empty and re-build deck
    reset(){
        this.base = [];
        this.buildDeck();
    }

    //Randomize deck
    shuffle(){
        let shuffledDeck = [];
        let CurrentCard = 0;

        //Get a random position
        while(CurrentCard < 52){
            let rand = Math.floor(Math.random() * 52);
            if(shuffledDeck[rand] == null){
                shuffledDeck[rand] = this.base[CurrentCard];
                CurrentCard++;
            }
        }

        this.base = shuffledDeck;
    }

    //Get card from top of deck
    dealCard(){
        let lastCard = this.base.length-1;
        
        if(lastCard == 0){
            this.reset();
            this.shuffle();
        }

        let cardToDeal = new Card();
        cardToDeal = this.base[lastCard];
        this.base.pop();
        return cardToDeal;
    }
}

//Player class
class Player {
    constructor (name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    discardCard(index){
        this.hand.splice(index, 1);
    }

    discardHand(){
        this.hand = [];
    }

    addCard(card){
        this.hand.push(card);
    }

    revealHand(){
        console.log(this.hand);
    }

    getHandTotal(){
        let totalPoints = 0;
        for(let i = 0; i < this.hand.length; i++){
            if(this.hand[i].value == "Ace"){
                if (totalPoints + 11 <= 21){
                    totalPoints += 11;
                }
                else {
                    totalPoints += 1;
                }
            }
            else{
                totalPoints += this.hand[i].point;
            }
        }
        return totalPoints;
    }
}

//Create Deck
const mainDeck = new Deck();
mainDeck.shuffle();

var card1 = mainDeck.dealCard();

//Create players
const player1 = new Player("Joseph");
const player2 = new Player("Paul");

//Play some games
var numberOfGames = 1000;     //Change this value to simulate a lot of games
var tieGames = 0;
for(let i = 0; i < numberOfGames; i++){
    
    var gameWon = false;
    
    //Deal initial hand
    player1.addCard(mainDeck.dealCard());
    player1.addCard(mainDeck.dealCard());
    
    player2.addCard(mainDeck.dealCard());
    player2.addCard(mainDeck.dealCard());
    
    //Keep drawing cards until someone wins or goes over 21
    while(gameWon == false){

        if(player1.getHandTotal() < 17){
            player1.addCard(mainDeck.dealCard());
        }

        if(player2.getHandTotal() < 17){
            player2.addCard(mainDeck.dealCard());
        }

        let playerPoints1 = player1.getHandTotal();
        let playerPoints2 = player2.getHandTotal();

        if(playerPoints1 > 21 && playerPoints2 > 21){
            tieGames++;
            gameWon = true;
            break;
        }
        else if(playerPoints1 > 21){
            //console.log(`${player1.name} lost! Over 21.  ${player2.name} won!`);
            player2.score++;
            gameWon = true;
            break;
        }
        else if(playerPoints2 > 21){
            //console.log(`${player2.name} lost! Over 21.  ${player1.name} won!`);
            player1.score++;
            gameWon = true;
            break;
        }

        if(gameWon == false){
            if(playerPoints1 >= 17 && playerPoints2 >= 17){
                //Determine winner
                if(playerPoints1 == playerPoints2){
                    //console.log("Tie game!");
                    tieGames++;
                    gameWon = true;
                    break;
                }
                if(playerPoints1 > playerPoints2){
                    //console.log(`${player1.name} won!`);
                    player1.score++;
                    gameWon = true;
                }
                else {
                    //console.log(`${player2.name} won!`);
                    player2.score++;
                    gameWon = true;
                }
            }
        }
    }

    //Discard hand
    player1.discardHand();
    player2.discardHand();
}

//Display Results
console.log("----------------------------------------------------------")
console.log(`Final Score: ${player1.name} - ${player1.score} : ${player2.name} - ${player2.score} : Tie Games - ${tieGames}`);
let percentage1 = 100*(player1.score/numberOfGames);
let percentage2 = 100*(player2.score/numberOfGames);
console.log(`Win Percentage:  ${player1.name} - ${percentage1}% : ${player2.name} - ${percentage2}% : Total Games ${numberOfGames}`);
console.log("----------------------------------------------------------");