class Scramble {
  constructor(type = '3x3x3') {
    this.faceGroups = {
      U: ['U', 'D'], D: ['U', 'D'],
      L: ['L', 'R'], R: ['L', 'R'],
      F: ['F', 'B'], B: ['F', 'B']
    };
    this.faceList = ['U', 'D', 'L', 'R', 'F', 'B'];
    this.type = type;
  }

  getAngle() {
    const angles = ["", "2", "'"];
    return angles[Math.floor(Math.random() * angles.length)];
  }

  getStepCount() {
    const stepMap = {
      "2x2x2": 10,
      "3x3x3": 20,
      "4x4x4": 41,
      "5x5x5": 62
    };
    return stepMap[this.type] || 10;
  }

  randomSteps() {
    const steps = [];
    let lastFace = null;

    for (let i = 0; i < this.getStepCount(); i++) {
      let newFace;
      while (true) {
        newFace = this.faceList[Math.floor(Math.random() * this.faceList.length)];
        if (!lastFace || !this.faceGroups[lastFace].includes(newFace)) {
          lastFace = newFace;
          break;
        }
      }

      steps.push(newFace + this.getAngle());
    }

    return steps.join(' ');
  }
}

// Tạo đối tượng và in kết quả
const scramble = new Scramble('3x3x3');
document.getElementById('scramble').innerText = scramble.randomSteps();