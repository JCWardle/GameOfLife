var grid = [];
var game;

window.onload = function()
{
    game = document.getElementById("game");
    
    cellColumns= game.width/100;
    cellRows = game.height/100;
    
    for(var i = 0; i < cellRows; i++){
        grid[i] = [];
        for(var j = 0; j < cellColumns; j++){
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
        context.rect(0, (i + 1) * 100, game.width, 2);
        context.rect((i + 1) * 100, 0, 2, game.height);
    }
    context.stroke();
}