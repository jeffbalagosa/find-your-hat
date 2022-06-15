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
    }
    console.log(newArr);
  }
}

// test
const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);

myField.print();
