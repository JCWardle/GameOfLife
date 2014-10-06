var grid = [];
var game;
var cellHeight;
var cellWidth;

window.onload = function()
{
    game = document.getElementById("game");
    
    x = 8;
    y = 6;
    
    cellWidth = game.width/x;
    cellHeight = game.height/y;
    
    for(var i = 0; i < game.width/cellWidth; i++){
        grid[i] = [];
        for(var j = 0; j < game.height/cellHeight; j++){
            grid[i][j] = {};
        }
    }
    
    drawBorder();
    drawGrid();
}

function drawBorder(){
    var context = game.getContext("2d");
    context.lineWidth = 1;
    context.strokeStyle = "Grey";
    context.rect(0,0, game.width, 1);
    context.rect(0,0, 1, game.height);
    context.rect(game.height, 0, game.width, 1);
    context.rect(game.width, 0, 1, game.height);
}

function drawGrid(){
    var context = game.getContext("2d");
    context.strokeStyle = "Black";
    context.lineWidth = 3;
    for(var i = 0; i <= grid.length; i++){
        context.rect(0, (i + 1) * cellHeight, game.width, 2);
        context.rect((i + 1) * cellWidth, 0, 2, game.height);
    }
    context.stroke();
}