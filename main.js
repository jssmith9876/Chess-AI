
//Main function
function run(){
    makeBoard();

    allPieces = makePieces();

    showPieces(allPieces);
    
}


//Creates the board and draws it
function makeBoard(){
    //Creates the checker grid
    for (var i = 0; i < numSquare; i++){
        for (var j = 0; j < numSquare; j++){
            ctx.fillStyle = BLACK;
            if ((i + j) % 2 == 0){
                ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize);
            }
        }
    }
    
    //Outlines the grid with a line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(squareSize * numSquare, 0);
    ctx.lineTo(squareSize * numSquare, squareSize * numSquare);
    ctx.lineTo(0, squareSize * numSquare);
    ctx.lineTo(0, 0);
    ctx.stroke();
}

//Makes all of the individual pieces
function makePieces(){
    pieces = []

    //Make the black pieces
    pieces.push(new Rook(positions[0][0].x, positions[0][0].y, BLACK));
    pieces.push(new Knight(positions[1][0].x, positions[1][0].y, BLACK));
    pieces.push(new Bishop(positions[2][0].x, positions[2][0].y, BLACK));
    pieces.push(new King(positions[3][0].x, positions[3][0].y, BLACK));
    pieces.push(new Queen(positions[4][0].x, positions[4][0].y, BLACK));
    pieces.push(new Bishop(positions[5][0].x, positions[5][0].y, BLACK));
    pieces.push(new Knight(positions[6][0].x, positions[6][0].y, BLACK));
    pieces.push(new Rook(positions[7][0].x, positions[7][0].y, BLACK));
    for (var i = 0; i < numSquare; i++){
        pieces.push(new Pawn(positions[i][1].x, positions[i][1].y, BLACK));
    }
    
    //Make the white pieces
    pieces.push(new Rook(positions[0][7].x, positions[0][7].y, WHITE));
    pieces.push(new Knight(positions[1][7].x, positions[1][7].y, WHITE));
    pieces.push(new Bishop(positions[2][7].x, positions[2][7].y, WHITE));
    pieces.push(new King(positions[3][7].x, positions[3][7].y, WHITE));
    pieces.push(new Queen(positions[4][7].x, positions[4][7].y, WHITE));
    pieces.push(new Bishop(positions[5][7].x, positions[5][7].y, WHITE));
    pieces.push(new Knight(positions[6][7].x, positions[6][7].y, WHITE));
    pieces.push(new Rook(positions[7][7].x, positions[7][7].y, WHITE));
    for (var i = 0; i < numSquare; i++){
        pieces.push(new Pawn(positions[i][6].x, positions[i][6].y, WHITE));
    }
    
    return pieces;
}

//Shows all of the pieces if they exists in the gamestate
function showPieces(pieces){
    for (var i = 0; i < pieces.length; i++){
        if (pieces[i].exists){
            pieces[i].show();
        }
    }
}

run();