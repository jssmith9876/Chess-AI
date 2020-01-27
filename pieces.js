
//Parent class for the chess pieces
class Piece {
    //Includes the pieces position and color
    constructor(xpos, ypos, color){
        this.xpos = xpos;
        this.ypos = ypos;
        this.color = color;
        this.exists = true;
        this.image = null;
    }
    //Shows the piece
    show() {
        ctx.drawImage(this.image, this.xpos, this.ypos, pieceSize, pieceSize);
    }

    //Returns what square the piece is located at
    getSquare() {
        return [Math.floor(this.xpos / squareSize), Math.floor(this.ypos / squareSize)];
    }

    //Picks the piece up so it can be moved
    pickUp(mouseX, mouseY){
        //The coordinates need to account for the size of the piece
        this.xpos = mouseX - pieceSize / 2;
        this.ypos = mouseY - pieceSize / 2;
    }

    //Puts the piece down in the correct space
    setDown(gridX, gridY){
        this.xpos = positions[gridX][gridY].x;
        this.ypos = positions[gridX][gridY].y;
    }

}

//King piece
class King extends Piece {
    //override the parent constructor to add correct piece image
    constructor(xpos, ypos, color) {
        //Send the info needed to the parent constructor
        super(xpos, ypos, color);
        //Create and set the image
        var image = new Image();
        if (color == BLACK) {
            image.src = "images/king_black.png";
        }
        else {
            image.src = "images/king_white.png";
        }
        
        super.image = image;
    }
    

}

//Queen Piece
class Queen extends Piece {
    //override the parent constructor to add correct piece image
    constructor(xpos, ypos, color) {
        //Send the info needed to the parent constructor
        super(xpos, ypos, color);
        //Create and set the image
        var image = new Image();
        if (color == BLACK) {
            image.src = "images/queen_black.png";
        }
        else {
            image.src = "images/queen_white.png";
        }
        
        super.image = image;
    }
}

//Rook Piece
class Rook extends Piece {
    //override the parent constructor to add correct piece image
    constructor(xpos, ypos, color) {
        //Send the info needed to the parent constructor
        super(xpos, ypos, color);
        //Create and set the image
        var image = new Image();
        if (color === BLACK) {
            image.src = "images/rook_black.png";
        }
        else {
            image.src = "images/rook_white.png";
        }
        
        super.image = image;
    }
}

//Bishop Piece
class Bishop extends Piece {
    //override the parent constructor to add correct piece image
    constructor(xpos, ypos, color) {
        //Send the info needed to the parent constructor
        super(xpos, ypos, color);
        //Create and set the image
        var image = new Image();
        if (color == BLACK) {
            image.src = "images/bishop_black.png";
        }
        else {
            image.src = "images/bishop_white.png";
        }
        
        super.image = image;
    }
}

//Knight Piece
class Knight extends Piece {
    //override the parent constructor to add correct piece image
    constructor(xpos, ypos, color) {
        //Send the info needed to the parent constructor
        super(xpos, ypos, color);
        //Create and set the image
        var image = new Image();
        if (color == BLACK) {
            image.src = "images/knight_black.png";
        }
        else {
            image.src = "images/knight_white.png";
        }
        
        super.image = image;
    }
}

//Pawn Piece
class Pawn extends Piece {
    //override the parent constructor to add correct piece image
    constructor(xpos, ypos, color) {
        //Send the info needed to the parent constructor
        super(xpos, ypos, color);
        //Create and set the image
        var image = new Image();
        if (color == BLACK) {
            image.src = "images/pawn_black.png";
        }
        else {
            image.src = "images/pawn_white.png";
        }
        
        super.image = image;
    }
}