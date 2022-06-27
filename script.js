var pacman = {
    x : 1,
    y : 1
};

var pacman2 = {
    x : 9,
    y : 1
};
var ghost = {
    x : 9,
    y : 9
}

var point = 0;

var maze = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,3,1,1,1,2],
    [2,1,3,1,1,2,1,1,1,1,1,1,2],
    [2,1,1,2,2,2,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,2,1,1,1,1,2],
    [2,1,1,2,2,1,1,2,3,1,1,1,2],
    [2,1,1,1,2,1,1,2,1,1,1,1,2],
    [2,1,1,1,2,2,2,2,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2]
]




window.setInterval(function(){
    displayGhost();
}, 500);


function displayMaze(){
    var output = "";
for(let i = 0; i < maze.length; i++){
    output += "<div class='row'>";
    for(let j = 0; j < maze[i].length; j++){
        if(maze[i][j] == 2){
            output += "<div class='brick'></div>"
        } else if (maze[i][j] == 1){
            output += "<div class='coin'></div>"
        } else if (maze[i][j] == 0){
            output += "<div class='empty'></div>"
        } else if (maze[i][j] == 3){
            output += "<div class='cherry'></div>"
        } else if (maze[i][j] == 4){
            output += "<div class='ghost'></div>"
        }
    }
    output += "</div>";
}
document.querySelector(".maze").innerHTML = output;
document.querySelector("#point").innerHTML = point;
//console.log(output);
}
function displayPacman(){
document.querySelector("#pacman").style.top = pacman.y*50+"px";
document.querySelector("#pacman").style.left = pacman.x*50+"px";
}
function displayGhost(){

var ghostRun = Math.floor(Math.random() * 4);
// console.log("ghost run : " + ghostRun);
if(ghostRun == 0){ //up
    if(maze[ghost.y - 1][ghost.x] != 2){
        ghost.y--;
        if(pacman.y == ghost.y && pacman.x == ghost.x){ //ghost
            maze=[];
            document.querySelector("#pacman").style.background = "none";
            document.querySelector("#ghost").style.background = "none";
            document.querySelector("body").innerHTML += "<div id='gameover'><p>Game Over</p></div>";
        }
    }
}else if(ghostRun == 1){ //right
    if(maze[ghost.y][ghost.x + 1] != 2){
        ghost.x++;
        if(pacman.y == ghost.y && pacman.x == ghost.x){ //ghost
            maze=[];
            document.querySelector("#pacman").style.background = "none";
            document.querySelector("#ghost").style.background = "none";
            document.querySelector("body").innerHTML += "<div id='gameover'><p>Game Over</p></div>";
        }
    }
}else if(ghostRun == 2){ //down
    if(maze[ghost.y + 1][ghost.x] != 2){
        ghost.y++;
        if(pacman.y == ghost.y && pacman.x == ghost.x){ //ghost
            maze=[];
            document.querySelector("#pacman").style.background = "none";
            document.querySelector("#ghost").style.background = "none";
            document.querySelector("body").innerHTML += "<div id='gameover'><p>Game Over</p></div>";
        }
    }
}else if(ghostRun == 3){ //left
    if(maze[ghost.y][ghost.x - 1] != 2){
        ghost.x--;
        if(pacman.y == ghost.y && pacman.x == ghost.x){ //ghost
            maze=[];
            document.querySelector("#pacman").style.background = "none";
            document.querySelector("#ghost").style.background = "none";
            document.querySelector("body").innerHTML += "<div id='gameover'><p>Game Over</p></div>";
        }
    }
}
//console.log("ghost x : " + ghost.x + "ghost y: " + ghost.y);
document.querySelector("#ghost").style.top = ghost.y*50+"px";
document.querySelector("#ghost").style.left = ghost.x*50+"px";
}


displayMaze();


document.onkeydown = function(e){
if(e.keyCode == 39 && maze[pacman.y][pacman.x+1] != 2){ //right
    
    
    if(maze[pacman.y][pacman.x+1] == 1){ //coin
        point++;
    } else if(maze[pacman.y][pacman.x+1] == 3){ //cherry
        point+= 50;
    }
    maze[pacman.y][pacman.x+1] = 0;
    pacman.x++;
    document.querySelector("#pacman").style.transform = "rotate(0deg)";
    //console.log("pacman x : " + pacman.x + "pacman y: " + pacman.y);
    if(pacman.y == ghost.y && pacman.x == ghost.x){ //ghost
        maze=[];
        document.querySelector("#pacman").style.background = "none";
        document.querySelector("#ghost").style.background = "none";
        document.querySelector("body").innerHTML += "<div id='gameover'><p>Game Over</p></div>";
    }
} else if(e.keyCode == 40 && maze[pacman.y+1][pacman.x] != 2 ){ //down
    
    //console.log("ghost x : " + ghost.x + "ghost y: " + ghost.y);
    if(maze[pacman.y+1][pacman.x] == 1){ //coin
        point++;
    } else if(maze[pacman.y+1][pacman.x] == 3){ //cherry
        point+= 50;
    }
    maze[pacman.y+1][pacman.x] = 0;
    pacman.y++;
    document.querySelector("#pacman").style.transform = "rotate(90deg)";
    //console.log("pacman x : " + pacman.x + "pacman y: " + pacman.y);
    if(pacman.y == ghost.y && pacman.x == ghost.x){ //ghost
        maze=[];
        document.querySelector("#pacman").style.background = "none";
        document.querySelector("#ghost").style.background = "none";
        document.querySelector("body").innerHTML += "<div id='gameover'><p>Game Over</p></div>";
    }
} else if(e.keyCode == 37 && maze[pacman.y][pacman.x-1] != 2){ //left
    
    //console.log("ghost x : " + ghost.x + "ghost y: " + ghost.y);
    if(maze[pacman.y][pacman.x - 1] == 1){ //coin
        point++;
    } else if(maze[pacman.y][pacman.x - 1] == 3){ //cherry
        point += 50;
    }
    maze[pacman.y][pacman.x-1] = 0;
    pacman.x--;
    document.querySelector("#pacman").style.transform = "rotate(180deg)";
    //console.log("pacman x : " + pacman.x + "pacman y: " + pacman.y);
    if(pacman.y == ghost.y && pacman.x == ghost.x){ //ghost
        maze=[];
        document.querySelector("#pacman").style.background = "none";
        document.querySelector("#ghost").style.background = "none";
        document.querySelector("body").innerHTML += "<div id='gameover'><p>Game Over</p></div>";
    }
} else if(e.keyCode == 38 && maze[pacman.y-1][pacman.x] != 2){ //up
    
    //console.log("ghost x : " + ghost.x + "ghost y: " + ghost.y);
    if(maze[pacman.y-1][pacman.x] == 1){ //coin
        point++;
    } else if(maze[pacman.y-1][pacman.x] == 3){ //cherry
        point += 50;
    }
    maze[pacman.y-1][pacman.x] = 0;
    pacman.y--;
    document.querySelector("#pacman").style.transform = "rotate(270deg)";
   // console.log("pacman x : " + pacman.x + "pacman y: " + pacman.y);
    if(pacman.y == ghost.y && pacman.x == ghost.x){ //ghost
        maze=[];
        document.querySelector("#pacman").style.background = "none";
        document.querySelector("#ghost").style.background = "none";
        document.querySelector("body").innerHTML += "<div id='gameover'><p>Game Over</p></div>";
    }
}
document.querySelector("#point").innerHTML = point;

displayPacman();     
displayMaze();
}