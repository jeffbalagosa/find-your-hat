const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(twoDimenstionalArray) {
    this._twoDimenstionalArray = twoDimenstionalArray;
    // player's starting position
    this.xAxis = 0;
    this.yAxis = 0;
  }

  print() {
    let arr = this._twoDimenstionalArray;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const e = arr[i];
      newArr.push(e.join(""));
      console.log(newArr[i]);
    }
  }

  askPlayerToMove = () => {
    const userInput = prompt(
      "where do you want to move? Press w for up, s for down, a for left, and d for right."
    );

    switch (userInput.toLowerCase()) {
      case "w":
        console.log("Going up 1 space.");
        this.yAxis -= 1;
        break;

      case "a":
        console.log("Going left 1 space.");
        this.xAxis -= 1;
        break;

      case "s":
        console.log("Going down 1 space.");
        this.yAxis += 1;
        break;

      case "d":
        console.log("Going right 1 space.");
        this.xAxis += 1;
        break;
    }
  };

  winLossOrMoveCheck() {
    // if this._twoDimenstionalArray[this.yAxis][this.xAxis] = fieldCharacter, move pathCharacter to that field.
    // if this._twoDimenstionalArray[this.yAxis][this.xAxis] = hole or out of bounds,Game Over!.
    // if this._twoDimenstionalArray[this.yAxis][this.xAxis] = hat,You Win!.
  }
}

// test
const myField = new Field([
  [
    pathCharacter,
    hole,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
  [
    hat,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
  [
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
  [
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
  [
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
  [
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
  [
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
  [
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
  [
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
  [
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
]);

myField.print();
myField.askPlayerToMove();
myField.extendPathCharacter();
myField.print();
