let array = [];
let gameStatus = 1;
let player;

reset = () => {
    array = ["-", "-", "-", "-", "-", "-","-", "-", "-" ];
    gameStatus = 1;
    player = 1;
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