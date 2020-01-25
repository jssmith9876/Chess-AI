var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const WIDTH = canvas.width;
const numSquare = 8;
const BLACK = "black";
const WHITE = "white";
const squareSize = WIDTH / 10;
const pieceSize = 60;
const canvasLeft = canvas.offsetLeft;
const canvasTop = canvas.offsetTop;

//Make the position matrix
const positions = [];
for (var i = 0; i < numSquare; i++){
    positions.push([])
    for (var j = 0; j < numSquare; j++){
        var pos = {
            x: i * squareSize + squareSize / 2,
            y: j * squareSize + squareSize / 2 + pieceSize / 2
        };
        positions[i].push(pos);
    }
}