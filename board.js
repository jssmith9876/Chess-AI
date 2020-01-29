
//Essentially just a boolean for now
class Space {
    constructor() {
        this.hasPiece = false;
    }

    setPiece() {
        this.hasPiece = true;
    }

    takePiece() {
        this.hasPiece = false;
    }
}

class Board {
    constructor() {
        //Creates a 2d array of square objects
        this.spaces = []
        for (var i = 0; i < numSquare; i++){
            this.spaces.push([]);
            for (var j = 0; j < numSquare; j++) {
                this.spaces[i].push(new Space());
            }
        }
    }

    //Shows the state of the board (true -> piece on that space, false -> no piece)
    showBoardState() {
        var state = "";

        for (var i = 0; i < this.spaces.length; i++){
            for (var j = 0; j < this.spaces[i].length; j++){
                state += this.spaces[i][j].hasPiece.toString() + ", ";
            }
            state += "\n";
        }

        console.log(state);
    }

    pieceAt(gridX, gridY) {
        return this.spaces[gridX][gridY].hasPiece;
    }

    //Sets the piece down and changes the board state
    setPiece(gridX, gridY) {
        this.spaces[gridX][gridY].setPiece();
    }

    //Takes the piece off and changes the board state
    takePiece(gridX, gridY) {
        this.spaces[gridX][gridY].takePiece();
    }
}


var gameBoard = new Board();