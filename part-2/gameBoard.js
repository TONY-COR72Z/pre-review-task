class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    // напишите этот метод сами
    const convertList = this.terrainList.map(this.terrainHelper.letterToTerrain);
    const gBoard = [];
    for (let i = 0; i < this.size; i += 1) {
      const row = [];
      for (let j = 0; j < this.size; j += 1) {
        row.push(convertList[i * this.size + j]);
      }
      gBoard.push(row);
    }
    return gBoard;
  }

  difficultyOfJourney(way) {
    // напишите этод метод сами
    let score = 0;
    for (let i = 0; i < way.length; i += 1) {
      const w = this.terrainMap()[way[i][0]][way[i][1]];
      // console.log(w);
      score += this.terrainHelper.scoreDifficulty(w);
    }
    return score;
  }
}

module.exports = GameBoard;
