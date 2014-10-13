var grid = [];
var game;
var cellHeight;
var cellWidth;

window.onload = function()
{
    game = document.getElementById("game");
    
    game.addEventListener("mousedown", click, false);
    
    var x = 8;
    var y = 6;
    
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
        context.rect(0, (i + 1) * cellHeight - 1, game.width, 2);
        context.rect((i + 1) * cellWidth - 1, 0, 2, game.height);
        
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
    var column = Math.floor(event.offsetX/cellWidth);
    var row = Math.floor(event.offsetY/cellHeight);

    grid[column][row] = !grid[column][row];
    drawGrid();
}

function update(){
    var gridWidth = grid.length;
    var gridHeight = grid[0].length;
    var gridCopy = JSON.parse(JSON.stringify(grid));

    for(var i = 0; i < gridWidth; i++){
        for(var j = 0; j < gridHeight; j++){
            var neighbours = getNeighbours(gridCopy, i, j);
            
            if(gridCopy[i][j] === true && (neighbours < 2 || neighbours > 3)){
                grid[i][j] = false;
            } else if (gridCopy[i][j] === false && neighbours == 3){
                grid[i][j] = true;
            }
        }
    }
}

function getNeighbours(gridCopy, x, y){
    result = 0;
    
    for(var i = -1; i < 2; i++){
        if(x + i < 0 || x + i >= gridCopy.length)
            continue;
        for(var j = -1; j < 2; j++){
            if(y + j < 0 || y + j >= gridCopy[0].length || (i == 0 && j == 0))
                continue;
            
            if(gridCopy[x + i][y + j] === true)
                result++;
        }        
    }
    return result;
}

function start(){
    update();
    drawGrid();
}

function stop (){

}