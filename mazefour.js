let mazefour = 
[
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '0', '0', '0', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '*', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1'],
    ['1', '0', '1', '*', '0', '0', '0', '1', '1', '0', '0', '0', '*', '0', '0', '0', '0', '1', '1', '0', '1', '1', '0', '*', '1'],
    ['1', '0', '1', '0', '1', '1', '0', '*', '1', '0', '1', '0', '0', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '1'],
    ['1', '*', '1', '0', '0', '1', '0', '0', '1', '0', '1', '1', '0', '0', '0', '0', '1', '1', '0', '1', '0', '0', '0', '0', '1'],
    ['1', '0', '1', '1', '0', '1', '1', '0', '0', '0', '0', '1', '1', '1', '1', '0', '1', '1', '0', '1', '0', '1', '1', '0', '1'],
    ['1', '0', '0', '1', '0', '1', '1', '0', '1', '1', '0', '0', '1', '*', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '1'],
    ['1', '1', '0', '1', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', '1', '0', '0', '1'],
    ['1', '1', '0', '0', '0', '1', '1', '0', '1', '1', '1', '1', '0', '1', '1', '*', '0', '1', '1', '1', '0', '0', '0', '1', '1'],
    ['1', '1', '1', '1', '0', '1', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '1', '1', '0', '1', '*', '1', '1'],
    ['1', '1', '1', '1', '0', '0', '0', '*', '1', '0', '0', '0', '0', '1', '*', '1', '1', '0', '0', '0', '0', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
]

let colorsfour = {
    first: 'black',
    second: 'blue',
    third: 'white'
}

function fOUrth() {
    mazeandcolor(mazefour, colorsfour);
}