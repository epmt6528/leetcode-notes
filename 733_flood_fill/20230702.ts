/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const rows = image.length;
  const cols = image[0].length;
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;

  function dfs(row, col) {
    if (
      row < 0 ||
      rows <= row ||
      col < 0 ||
      cols <= col ||
      image[row][col] !== originalColor
    )
      return;
    image[row][col] = color;
    dfs(row - 1, col); // Up
    dfs(row + 1, col); // Down
    dfs(row, col - 1); // Left
    dfs(row, col + 1); // Right
  }

  dfs(sr, sc);

  return image;
};
