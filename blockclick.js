function blockClick(node, maze, size, mazecanvas) {
    let queue = [];
    let startPos = [];
    queue.push(startPos);
    let exit = [];
    startPos.row = node.y;
    startPos.col = node.x;
    startPos.path = [{row:node.y, col:node.x}];

    while(queue.length > 0){
        let position = queue.shift();
        let steps = maze[position.row][position.col];
        addNeighbors({row:position.row + 1, col:position.col, path:position.path}, maze, queue, steps+1, exit);
        addNeighbors({row:position.row - 1, col:position.col, path:position.path}, maze, queue, steps+1, exit);
        addNeighbors({row:position.row, col:position.col + 1, path:position.path}, maze, queue, steps+1, exit);
        addNeighbors({row:position.row, col:position.col - 1, path:position.path}, maze, queue, steps+1, exit);
    }

    exit[0].forEach(point => {
        let blockRef = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        blockRef.setAttribute('height', 30);
        blockRef.setAttribute('width', 30);
        blockRef.setAttribute('fill', 'blue');
        blockRef.setAttribute('x', point.col*size + 10);
        blockRef.setAttribute('y', point.row*size + 10);
        mazecanvas.appendChild(blockRef);
    });
};