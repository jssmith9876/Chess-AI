var allPieces = makePieces();

//Main function
function initialize() {

    //Game loop
    var loop = function() {
        //Draw the board and pieces
        makeBoard();
        showPieces();

        //If we're holding a piece, then pick that piece up
        if (holdingPiece) {
            allPieces[pieceIndex].pickUp(mouseX, mouseY);
        }
    }

    //Start the game loop
    var interval = setInterval(loop, 10);
}
//When the page loads, start the initialize function
document.onload = initialize();


//Function to track the mouse position
canvas.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}, false);

//Function to track the mouse clicks
canvas.addEventListener('click', function(event){

    //Get which square the user clicked on
    var xPos = Math.floor(mouseX / squareSize);
    var yPos = Math.floor(mouseY / squareSize);

    //If we are not holding a piece right now
    if (!holdingPiece) {
        //For all of the pieces
        for (var i = 0; i < allPieces.length; i++){
            //if the piece doesn't exist, move on
            if (!allPieces[i].exists){
                continue;
            }
            //Otherwise, if the piece's position has been clicked on
            var piecePos = allPieces[i].getSquare();
            if (piecePos[0] == xPos && piecePos[1] == yPos){
                //console.log("Clicked on a piece at position " + xPos + ", " + yPos);
                //Say we're holding a piece and keep track of which piece we're holding
                pieceIndex = i;
                holdingPiece = true;
            }
        }
    }
    else {
        //Set the piece down at the correct position
        allPieces[pieceIndex].setDown(xPos, yPos);

        //Say that we are no longer holding a piece and reset the index
        holdingPiece = false;
        pieceIndex = -1;
    }

}, false);


//Creates the board and draws it
function makeBoard(){
    //Makes the background
    ctx.fillStyle = "rgb(51, 51, 51)";
    ctx.fillRect(0, 0, WIDTH, WIDTH);

    //Creates the checker grid
    for (var i = 0; i < numSquare; i++){
        for (var j = 0; j < numSquare; j++){
            // ctx.fillStyle = BLACK;
            // if ((i + j) % 2 == 0){
            //     ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize);
            // }
            if ((i + j) % 2 == 0) {
                ctx.fillStyle = BLACK;
            }
            else {
                ctx.fillStyle = WHITE;
            }
            ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize);
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
function showPieces(){
    for (var i = 0; i < allPieces.length; i++){
        if (allPieces[i].exists){
            allPieces[i].show();
        }
    }
}

