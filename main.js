const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

let gameStillGoing = true;

class Field {
  constructor(field) {
    this._field = field;
    this.yAxis = 0;
    this.xAxis = 0;
  }

  get field() {
    return this._field;
  }

  // remove the comma separating each inner array and use a blank space as a separator
  // replace the comma separating each outer array with a line break.
  print() {
    return this.field.map((row) => row.join("")).join("\n");
  }

  // get the move from te player and move pathCharacter axis's where they specify.
  playerMove() {
    let move = prompt(
      "Which direction do you want to move to? (w for Up, s for down, a for left and d for right)"
    );
    switch (move.toLowerCase()) {
      case "w":
        console.log("Moving up");
        this.yAxis -= 1;
        break;
      case "s":
        console.log("Moving down");
        this.yAxis += 1;
        break;
      case "a":
        console.log("Moving left");
        this.xAxis -= 1;
        break;
      case "d":
        console.log("Moving right");
        this.xAxis += 1;
        break;
      default:
        break;
    }
  }

  // check the game status.  Win/Lose/Game Still going.
  gameStatusCheck() {
    // The out of bounds only work with if statements.  And not with switch.
    if (this.field[this.yAxis] == undefined) {
      console.log("Game Over!");
      console.log("You went out of bounds!");
      return (gameStillGoing = false);
    }

    if (this.field[this.xAxis] == undefined) {
      console.log("Game Over!");
      console.log("You went out of bounds!");
      return (gameStillGoing = false);
    }

    // Switch statments to check other conditions.
    switch (this.field[this.yAxis][this.xAxis]) {
      case hole:
        console.log("Game Over!");
        console.log("You fell into a hole.");
        gameStillGoing = false;
        break;
      case hat:
        console.log("You win!");
        console.log("You found your hat!");
        gameStillGoing = false;
        break;
      case fieldCharacter:
        this.field[this.yAxis][this.xAxis] = pathCharacter;
        break;
      case pathCharacter:
        console.log("You stepped back into your path.");
        break;
    }
  }

  // specify field size
  // populate holes
  static generateField(height, width, percentage) {
    const fieldOrHole = (percentage) => {
      if (percentage >= 0 && percentage <= 100) {
        const ranNum = Math.random() * 100;
        if (ranNum < percentage) {
          return hole;
        } else {
          return fieldCharacter;
        }
      } else {
        console.log("Please enter a percentage between 0 - 100");
      }
    };

    // Generate a blank empty field.
    const emptyField = () => {
      function makeWidthArray() {
        let widthArray = [];
        for (let i = 0; i < width; i++) {
          widthArray.push(fieldOrHole(percentage));
        }
        return widthArray;
      }
      let emptyField = [];
      for (let i = 0; i < height; i++) {
        emptyField.push(makeWidthArray());
      }
      return emptyField;
    };

    const completeField = emptyField();

    // Add hat to completeField,
    // Do while loop ensures hat isn't placed on player start.
    do {
      completeField[Math.floor(Math.random() * height)][
        Math.floor(Math.random() * width)
      ] = hat;
    } while (completeField[0][0] == hat);

    //Adding pathCharacter to left-upper corner
    completeField[0][0] = pathCharacter;

    return completeField;
  }
}

const myField = new Field(Field.generateField(10, 10, 30));

function playGame() {
  while (gameStillGoing) {
    console.log(myField.print());
    myField.playerMove();
    myField.gameStatusCheck();
  }
  console.log("Play again?");
}

playGame();
