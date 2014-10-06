var grid = [];
var game;
var cellHeight;
var cellWidth;

window.onload = function()
{
    game = document.getElementById("game");
    
    game.addEventListener("mousedown", click, false);
    
    var x = 2;
    var y = 2;
    
    cellWidth = game.width/x;
    cellHeight = game.height/y;
    
    for(var i = 0; i < game.width/cellWidth; i++){
        grid[i] = [];
        for(var j = 0; j < game.height/cellHeight; j++){
            grid[i][j] = false;
        }
    }
    
    drawBorder();
    drawGrid();
}

function drawBorder(){
    var context = game.getContext("2d");
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "Grey";
    context.rect(1,1, game.width, 1);
    context.rect(1,1, 1, game.height);
    context.rect(game.height, 0, game.width, 1);
    context.rect(game.width, 0, 1, game.height);
    context.stroke();
    context.closePath();
}

function drawGrid(){
    var context = game.getContext("2d");
    context.beginPath();
    context.strokeStyle = "Black";
    context.fillStyle = "Yellow";
    context.lineWidth = 2;
    
    for(var i = 0; i < grid.length; i++){
        context.rect(0, (i + 1) * cellHeight, game.width, 2);
        context.rect((i + 1) * cellWidth, 0, 2, game.height);
        
        for(var j = 0; j < grid[i].length; j++){
            if(grid[i][j] === true){
                context.rect(i * cellWidth + 10, j * cellHeight + 10, cellWidth - 20, cellHeight - 20);
            } else {
                context.clearRect(i * cellWidth + 5, j * cellHeight + 5, cellWidth - 5, cellHeight - 5);
            }
        }        
    }
    
    context.fill();
    context.stroke();
    context.closePath();
}

function click(event){
    var column = Math.floor(event.pageX/cellWidth);
    var row = Math.floor(event.pageY/cellHeight);
    
    grid[column][row] = !grid[column][row];
    drawGrid();
}