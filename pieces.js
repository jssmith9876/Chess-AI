
//initialize the font for the pieces
ctx.font = pieceSize + "px Times New Roman";

//Parent class for the chess pieces
class Piece {
    //Includes the pieces position and color
    constructor(xpos, ypos, color){
        this.xpos = xpos;
        this.ypos = ypos;
        this.color = color;
        this.exists = true;
        this.text;
    }
    //Shows the piece
    show() {
        //Outlines and fills with the correct color
        if (this.color == BLACK){
            ctx.fillStyle = BLACK;
            ctx.strokeStyle = WHITE;
        }
        else {
            ctx.fillStyle = WHITE;
            ctx.strokeStyle = BLACK;
        }
        ctx.textAlign = "center";
        ctx.lineWidth = pieceSize / 40;
        ctx.fillText(this.text, this.xpos, this.ypos);
        ctx.strokeText(this.text, this.xpos, this.ypos);
    }

    getSquare() {
        return [Math.floor(this.xpos / squareSize), Math.floor(this.ypos / squareSize)];
    }
}

//King piece
class King extends Piece {
    show(){
        super.text = "K";
        super.show();
    }
}

//Queen Piece
class Queen extends Piece {
    show() {
        super.text = "Q";
        super.show();
    }
}

//Rook Piece
class Rook extends Piece {
    show() {
        super.text = "R";
        super.show();
    }
}

//Bishop Piece
class Bishop extends Piece {
    show() {
        super.text = "B";
        super.show();
    }
}

//Knight Piece
class Knight extends Piece {
    show() {
        super.text = "N";
        super.show();
    }
}

//Pawn Piece
class Pawn extends Piece {
    show() {
        super.text = "P";
        super.show();
    }
}