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

  playerMove = () => {
    const userInput = prompt("where do you want to move?");

    switch (userInput.toLowerCase()) {
      case "w":
        console.log("You pressed up.");
        break;

      case "a":
        console.log("You pressed left.");
        break;

      case "s":
        console.log("You pressed down.");
        break;

      case "d":
        console.log("You pressed right.");
        // add 1 to the second number of the index.
        // example:  this._playerPosition[0, 0] turns into this._playerPosition[0, 1] when the player presses 'd'.
        break;

      case "help":
        console.log("Controls:");
        console.log('"w" moves up');
        console.log('"a" moves left');
        console.log('"s" moves down');
        console.log('"d" moves right');
        break;

      default:
        console.log(
          "Invalid key.  Please use keys 'w, a, s, d' to move.  You can also type 'help' for more info."
        );
        break;
    }
  };
}

// test
const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);

console.log(myField.playerPosition);
