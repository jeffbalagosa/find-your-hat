const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(twoDimenstionalArray) {
    this._twoDimenstionalArray = twoDimenstionalArray;
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
}

// test
const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);

myField.print();

const getPlayerMove = () => {
  console.log("Controls:");
  console.log('"w" moves up');
  console.log('"a" moves left');
  console.log('"s" moves down');
  console.log('"d" moves right');
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
      break;

    default:
      console.log("Invalid key.  Please use WASD to move.");
      break;
  }
};

getPlayerMove();
