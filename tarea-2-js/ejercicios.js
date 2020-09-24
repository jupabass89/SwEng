// Execrcice 1 Pangrama (test: abcdefghijklmnñopqrstuvwxyz)
let isPangram = () => {
  let  word = document.getElementById('pangram').value;
  let alf = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
  let letters = word.split("");
  let ans = true;
  alf.forEach(letter => {
    if (!letters.find(item => item === letter)) {
      ans = false;
    }
  });
  console.log('Response: ', ans);
  document.getElementById('response').innerHTML = ans ? 'Es Pangrama' : 'No es Pangrama';
};

//Excercice 4 Bisiesto
let isLeap = () => {
  let year = document.getElementById('leap').value;
  document.getElementById('res_leap').innerHTML = 
    year % 4 === 0 && year % 100 === 0 && year % 400 === 0 ? 'Es bisiesto' : 'No es bisiesto';
};

// Excercise 5 Repetidos
let nonUnique = () => {
  let currentNumbers = document.getElementById('number_list').value.split('');
  let ans = [];
  currentNumbers.forEach((element, index) => {
		if (currentNumbers.find((item, i) => item === element && index !== i && !ans.find(res => res === element))){ 
			 ans.push(element);
		}
  });
  document.getElementById('res_number_list').innerHTML = ans.join();
};

// Excercise 6 Romanos
let toRoman = () => {
  let arabicNumber = document.getElementById('roman_number').value;
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
  document.getElementById('res_roman_number').innerHTML = roman.join("");
  return roman.join("");
};
