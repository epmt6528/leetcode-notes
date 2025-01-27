/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const getDistance = (x, y) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}

var kClosest = function(points, k) {
  let distanceList = []

  for(let i = 0; i < points.length; i++) {
      const [x, y] = points[i]
      const distance = getDistance(x, y)
      distanceList.push({i, distance})
  }
  
  distanceList.sort((a, b) => a.distance - b.distance)

  let answerList = []
  let pointer = 0

  while(answerList.length < k) {
      answerList.push(points[distanceList[pointer].i])
      pointer++
  }

  return answerList
};