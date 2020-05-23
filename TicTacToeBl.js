let input = require('readline-sync');
let board = [];
let gameStatus = 1;
let player;
let symbol = "";
let row;
let coloumn;
let input1;
let index;

//reset the game board
reset = () => {
    board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    gameStatus = 1;
    player = 1;
}
//print the game board
print = () => {
    console.log("r/c  0 1 2");
    console.log("0", board[0], board[1], board[2]);
    console.log("1", board[3], board[4], board[5]);
    console.log("2", board[6], board[7], board[8]);
}
//check row and coloumn if empty or symbol is equal or not
checkMatch = (num1, num2, num3) => {
    if (board[num1] != "-" && board[num1] == board[num2] && board[num2] == board[num3])
        gameStatus = 0;
}
//check row and coloumn with same value "X" or "O"
checkGame = () => {
    checkMatch(0, 1, 2);
    checkMatch(3, 4, 5);
    checkMatch(6, 7, 8);
    checkMatch(0, 3, 6);
    checkMatch(1, 4, 7);
    checkMatch(2, 5, 8);
    checkMatch(0, 4, 8);
    checkMatch(2, 4, 6);
}

//putting random value for row and coloumn by computer
computer = () => {
    row = Math.random() * 3 | 0;
    coloumn = Math.random() * 3 | 0;
}
//set the value in board
set = (row, coloumn, symbol) => {
    index = row * 3 + coloumn;
    if (board[index] == "-") {            //if index value is empty
        board[index] = symbol;          //set symbol
        player = player % 2 + 1;        //changing player
    }
    else {
        console.log("Position is occupied")
    }
}
tictactoe = () => {             //function to validate game
    reset();                    //reset the game

    while (true) {                   //infinite loop 
        console.log();
        if (player == 1) {
            symbol = "O";               //symbol for computer
            console.log("Computer turns : ", symbol);
        }
        else {
            symbol = "X";               //symbol for player
            console.log("Player turn : ", symbol);
        }
        print();                            //print the game board
        console.log();
        console.log("1.For set row and coloumn ");
        console.log("2.For Restart ");

        while (true) {                        //infinite loop
            if (player == 1) {
                computer();                 //function call computer for row and coloumn value
                input1 = 1;
            }
            else if (player == 2) {
                input1 = input.questionInt("Enter 1 or 2 : ");          //input from the user
                row = input.questionInt("Enter row value : ");          //row value
                coloumn = input.questionInt("Enter coloumn value: ");   //coloumn value
            }
            if (input1 == 1) {
                set(row, coloumn, symbol); //function call set for putting the value in board
                break;
            }
            else if (input1 == 2) {
                reset();                    //for resetting the game
                break;
            }
            else {
                console.log("Enter 1 or 2");
            }

        }
        checkGame();

        if (gameStatus != 1) {
            print();
            console.log("Game Over");
            player = player % 2 + 1;
            console.log("Player", player, symbol, "Wins");
            let newGame = input.questionInt("Enter 1 for new match : ");
            newGame == 1 ? reset() : console.log();
        }
    }
}