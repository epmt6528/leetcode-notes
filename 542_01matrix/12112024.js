/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// My solution (It was wrong because I didn't consider all cells)
// 0O0OOO
// 00OOOO
// 000000   ex. O is not covered
// var updateMatrix = function(mat) {
//   // iterate thru the matrix
//   // if cell is 0, put 0 [O(m,n)] 
//   // if cell is not 0, run 0 searcher util 
//   // 0 searcher util checks surrounding concentrically 

//   let answer = [...mat]

//   const matHeight = mat.length
//   const matWidth = mat[0].length

//   const searchZero = (y, x) => {
//       let counter = 1

//       while(true){
//           const up = mat[y - counter] ? mat[y - counter][x] : null
//           const right = mat[counter] ? mat[y][x + counter] : null
//           const down = mat[y + counter] ? mat[y + counter][x] : null
//           const left = mat[y] ? mat[y][x - counter] : null
//           const upRight = mat[y - counter] ? mat[y - counter][x + counter] : null
//           const downRight = mat[y + counter] ? mat[y + counter][x + counter] : null
//           const downLeft = mat[y + counter] ? mat[y + counter][x - counter] : null
//           const upLeft = mat[y - counter] ? mat[y - counter][x - counter] : null

//           if([up, right, down, left].includes(0)){          
//               return counter
//           } 

//           if([upRight, downRight, downLeft, upLeft].includes(0)) {
//               return counter * 2
//           }

//           counter++
//       }
//   }

//   for(let i = 0; i < matHeight; i++){
//       for(let j = 0; j < matWidth; j++){
//           if(mat[i][j] !== 0) {
//               answer[i][j] = searchZero(i,j)
//           }
//       }
//   }

//   return answer
// };


// Correct solution Dijkstra's or the Floyd-Warshall algorithm
// 1. Breadth First Search (BFS) O(mn) O(mn)
function updateMatrix(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const distances = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  const queue = [];
  
  // Initialize the queue with all 0's and set their distances to 0
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (mat[i][j] === 0) {
              distances[i][j] = 0;
              queue.push([i, j]);
          }
      }
  }
  
  // Directions for moving up, down, left, right
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
  // BFS traversal
  while (queue.length > 0) {
      const [currRow, currCol] = queue.shift();
      
      for (const [dx, dy] of directions) {
          const newRow = currRow + dx;
          const newCol = currCol + dy;
          
          if (
              newRow >= 0 && newRow < rows &&
              newCol >= 0 && newCol < cols &&
              distances[newRow][newCol] > distances[currRow][currCol] + 1
          ) {
              distances[newRow][newCol] = distances[currRow][currCol] + 1;
              queue.push([newRow, newCol]);
          }
      }
  }
  
  return distances;
}
