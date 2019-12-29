function mazeandcolor(maze, colors) {
    Button();
    let template = document.getElementById('app');
    let size = 50;
    let mazecanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    mazecanvas.setAttribute('width', maze[0].length * size);
    mazecanvas.setAttribute('height', maze.length * size);

    let appendElement = (mazecanvas, node, maze) => {
        let blockRef = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        blockRef.setAttribute('height', size);
        blockRef.setAttribute('width', size);
        blockRef.setAttribute('x', node.x * size);
        blockRef.setAttribute('y', node.y * size);
        if (maze[node.y][node.x] === '1') {
            blockRef.setAttribute('fill', colors.first);
        }
        if (maze[node.y][node.x] === '*') {
            blockRef.setAttribute('fill', colors.second);
        }
        if (maze[node.y][node.x] === '0') {
            blockRef.setAttribute('fill', colors.third);
            blockRef.onclick = function () {
                blockClick(node, maze, size, mazecanvas);
            };
        }
        mazecanvas.appendChild(blockRef);
    }

    maze.map((row, y) => {
        row.map((col, x) => {
            appendElement(mazecanvas, { x, y }, maze);
        })
    })
    template.appendChild(mazecanvas);
}