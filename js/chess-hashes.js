// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either a space or a “#” character. The characters should form a chess board.

let str = ' ';
for(let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((i+j) % 2 == 0) {
      str += '#';
    } else {
      str += ' ';
    }
  }
  str += '\n';
}

console.log(str);
