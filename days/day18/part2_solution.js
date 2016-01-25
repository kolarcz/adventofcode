class Lights {

  run(data, steps = 100) {
    let matrix = this.inputToMatrix(data);

    matrix = this.turnOnCorners(matrix);
    for (let i=0; i<steps; i++) {
      matrix = this.toNextStep(matrix);
      matrix = this.turnOnCorners(matrix);
    }

    return this.getCntLightOn(matrix);
  }

  getCntLightOn(matrix) {
    const cnt = matrix.map(row => row.reduce((a, b) => a + b)).reduce((a, b) => a + b);
    return cnt;
  }

  getNeighboursCntLightOn(matrix, x, y) {
    const neighOn = (matrix[y-1] ? (matrix[y-1][x-1] || false) : false)
                + (matrix[y-1] ? (matrix[y-1][x] || false) : false)
                + (matrix[y-1] ? (matrix[y-1][x+1] || false) : false)
                + (matrix[y] ? (matrix[y][x-1] || false) : false)
                + (matrix[y] ? (matrix[y][x+1] || false) : false)
                + (matrix[y+1] ? (matrix[y+1][x-1] || false) : false)
                + (matrix[y+1] ? (matrix[y+1][x] || false) : false)
                + (matrix[y+1] ? (matrix[y+1][x+1] || false) : false);
    return neighOn;
  }

  turnOnCorners(matrix) {
    const maxX = matrix[0].length-1;
    const maxY = matrix.length-1;

    matrix[0][0] = true;
    matrix[0][maxX] = true;
    matrix[maxY][0] = true;
    matrix[maxY][maxX] = true;

    return matrix;
  }

  toNextStep(matrix) {
    let newMatrix = [];

    matrix.forEach((row, y) => {
      newMatrix[y] = [];

      row.forEach((cell, x) => {
        const neighOn = this.getNeighboursCntLightOn(matrix, x, y);

        if (cell && neighOn < 2) {
          newMatrix[y][x] = false;
        } else if (cell && (neighOn == 2 || neighOn == 3)) {
          newMatrix[y][x] = true;
        } else if (cell && neighOn > 3) {
          newMatrix[y][x] = false;
        } else if (!cell && neighOn == 3) {
          newMatrix[y][x] = true;
        } else {
          newMatrix[y][x] = cell;
        }
      });
    });

    return newMatrix;
  }

  inputToMatrix(data) {
    const matrix = data
      .split(/[\r\n]+/)
      .filter(row => row.length)
      .map(row => row.split('').map(cell => cell == '#'));
    return matrix;
  }

  visualize(matrix) {
    const string = matrix.map(row => row.map(cell => cell ? '#' : '.').join('')).join('\n') + '\n\n';
    console.log(string);
  }

}


module.exports = new Lights();
