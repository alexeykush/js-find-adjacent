const adjacent = 2;
const process = new Array(10).fill(0);
const activeY = Math.floor(Math.random() * process.length);
const activeX = Math.floor(Math.random() * process.length);
const matrix = process.map((_, i) => process.map((_, j) => ({row: i, col: j})));

const routes = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1]
];

const activeColumns = [];

for (let i = 1; i <= adjacent; i++) {
    for (let j = 1; j <= adjacent; j++) {
        routes
            .forEach(([rowMultiplier, colMultiplier]) => {
                const currY = activeY + (i * rowMultiplier);
                const currX = activeX + (j * colMultiplier);
                const row = matrix[currY];
                if (!row) return;
                const col = row[currX];
                if (col && !activeColumns.find(({ row, col }) => row === currY && col === currX)) activeColumns.push(col);
            })
    }
}