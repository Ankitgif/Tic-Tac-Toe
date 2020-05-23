let input = require('readline-sync');
let array = [];
let gameStatus = 1;
let player;
let symbol = "";
let row;
let coloumn;
let input1;


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
//putting random value for row and coloumn by computer
computer = () => {
    row = Math.random() * 3 | 0;
    coloumn = Math.random() * 3 | 0;
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

        while(true){                        //infinite loop
            if(player == 1){
                computer();                 //function call computer for row and coloumn value
                input1 = 1;
            }
            else if(player == 2){
                input1 = input.questionInt("Enter 1 or 2 : ");          //input from the user
                row = input.questionInt("Enter row value : ");          //row value
                coloumn = input.questionInt("Enter coloumn value: ");   //coloumn value
            }
            if(input1 == 1){
                set(row, coloumn, symbol); //function call set for putting the value in board
                break;
            }
            else if(input1 == 2){
                reset();                    //for resetting the game
                break;
            }
            else{
                console.log("Enter 1 or 2");
            }

        }


    }
}