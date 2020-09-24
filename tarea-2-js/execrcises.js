// execrcice 1

let alf = ["a", "b", "c"];
let isPangram = (word, alf) => {
  let letters = word.split("");
  let ans = true;
  alf.forEach(letter => {
    if (!letters.find(item => item === letter)) {
      ans = false;
    }
  });
  return ans;
};
console.log(isPangram("zaaabccc", alf));

//excercice 4

let isLeap = year => year % 4 === 0 && year % 100 === 0 && year % 400 === 0;

console.log(isLeap(2400));

//excercise 5

let nonUnique = currentNumbers => {
  let ans = [];
  currentNumbers.forEach((element, index) => {
    if (
      currentNumbers.find(
        (item, i) =>
          item === element && index !== i && !ans.find(res => res === element)
      )
    ) {
      ans.push(element);
    }
  });
  return ans;
};

console.log(nonUnique([1, 2, 4, 4, 1]));

//excercise 6

let toRoman = arabicNumber => {
  let num, letter, val, index, insert;
  let values = [1, 5, 10, 50, 100, 500, 1000];
  let letters = ["I", "V", "X", "L", "C", "D", "M"];
  let roman = [];

  for (let i = 6; (letter = letters[i]); i--) {
    num = values[i];
    if (arabicNumber >= num) {
      let unit = Math.floor(arabicNumber / num);
      arabicNumber -= unit * num;
      if (unit < 4) {
        while (unit--) {
          roman.push(letter);
        }
      } else {
        val = roman.pop();
        index = (val ? letters.indexOf(val) : i) + 1;
        insert = letter + (letters[index] || "M");
        roman.push(insert);
      }
    } else {
      roman.push("");
    }
  }
  return roman.join("");
};

console.log(toRoman(3999));
