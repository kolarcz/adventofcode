class Lights {

  run(data, steps = 100) {
    let matrix = this.inputToMatrix(data);

    for (let i=0; i<steps; i++) {
      matrix = this.toNextStep(matrix);
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

  toNextStep(matrix) {
    let newMatrix = [];

    matrix.forEach((row, y) => {
      newMatrix[y] = [];

      row.forEach((cell, x) => {
        let neighOn = this.getNeighboursCntLightOn(matrix, x, y);

        if (cell) {
          newMatrix[y][x] = neighOn == 2 || neighOn == 3;
        } else {
          newMatrix[y][x] = neighOn == 3;
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

}


module.exports = new Lights();
