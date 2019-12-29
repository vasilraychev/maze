function addNeighbors(position, maze, queue, steps, exit){
    if(position.row < 0 || position.row >= maze.length || position.col < 0 || position.col >= maze[0].length || maze[position.row][position.col] === '*'){
        exit.push(position.path);
    }
    else if(maze[position.row][position.col] === '0'){
        let new_path = position.path.slice();
        new_path.push({row:position.row, col:position.col});
        queue.push({row:position.row, col:position.col, path:new_path});
        maze[position.row][position.col] = steps;
    }
}