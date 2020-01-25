var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerHeight;
ctx.canvas.height = window.innerHeight;

const WIDTH = canvas.width;
const numSquare = 8;
const BLACK = "black";
const WHITE = "white";
const squareSize = WIDTH / 10;
const pieceSize = squareSize - 20;
// const pieceSize = 200;
const canvasLeft = canvas.offsetLeft;
const canvasTop = canvas.offsetTop;

//Make the position matrix
const positions = [];
for (var i = 0; i < numSquare; i++){
    positions.push([])
    for (var j = 0; j < numSquare; j++){
        var pos = {
            x: i * squareSize + squareSize / 2 - pieceSize / 2,
            y: j * squareSize + squareSize / 2 - pieceSize / 2
        };
        positions[i].push(pos);
    }
}

//For moving pieces
var holdingPiece = false;
var pieceIndex = -1;
var mouseX, mouseY;