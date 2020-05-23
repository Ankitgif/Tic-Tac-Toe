let input = require('readline-sync');
let array = [];
let gameStatus = 1;
let player;
let symbol = "";


reset = () => {
    array = ["-", "-", "-", "-", "-", "-","-", "-", "-" ];
    gameStatus = 1;
    player = 1;
}
//print the game board
print = () => {                                         
    console.log("r/c  0 1 2");
    console.log("0", array[0], array[1], array[2]);
    console.log("1", array[3], array[4], array[5]);
    console.log("2", array[6], array[7], array[8]);
}
tictactoe = () => {             //function to validate game
    reset();                    //reset the game

    while(true){                   //infinite loop 
        console.log();
        if(player == 1){
            symbol = "O";               //symbol for computer
            console.log("Computer turns : ",symbol);
        }
        else{
            symbol = "X";               //symbol for player
            console.log("Player turn : ",symbol);
        }
        print();                            //print the game board
        console.log();
        console.log("1.For set row and coloumn ");
        console.log("2.For Restart ");


    }
}