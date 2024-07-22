const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
console.log(ctx.canvas.width, ctx.canvas.height);
// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
