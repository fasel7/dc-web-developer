// Einführung Arrays
let noten = [88, 70, 40, 23, 34];

//Ausgabe der einzelnen Elemente
console.log('Noten: ');
for (let i = 0; i < noten.length; i++) {
  console.log(noten[i]);
}

//Durchschnitt berechnen
let Avgmarks = 0;

for (let i = 0; i < noten.length; i++) {
  Avgmarks += noten[i];
}

let avg = Avgmarks / noten.length;

console.log('Notendurchschnitt: ' + avg);

//Ausgabe der Durchschnittsnote
if (avg < 60) {
  console.log('Grade : F');
} else if (avg < 70) {
  console.log('Grade : D');
} else if (avg < 80) {
  console.log('Grade : C');
} else if (avg < 90) {
  console.log('Grade : B');
} else if (avg < 100) {
  console.log('Grade : A');
}

//fubonacci

console.log('---------------------------------------');
console.log('Fibonacci: ');
let fibonacci = [];
fibonacci[0] = 0; //die ersten beiden Stellen werden vorgegeben
fibonacci[1] = 1;
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci); // 0 1 1 2 3 5 8 ...

//even numbers
console.log('---------------------------------------');
console.log('Gerade Zahlen: ');

function printEven(arr) {
  for (const element of arr) {
    if (element % 2 == 0) {
      console.log(element); //es werden alle geraden Zahlen ausgegeben
    }
  }
}

let arr = [13, 23, 12, 45, 22, 48, 66, 100];
printEven(arr);

//Im Kurs andes gelöst. Auch eine Variante mit Sprungmarken.
console.log('---------------------------------------');
console.log('Doppelgänger finden: ');
let numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
outerLoop: for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  innerLoop: for (let j = i + 1; j < numbers.length; j++) {
    let number2 = numbers[j];
    console.log('Vergleiche ' + number + ' mit ' + number2);
    if (number == number2) {
      console.log('Gleiche Zahlen gefunden');
      continue outerLoop;
    }
  }
}

//find min
console.log('---------------------------------------');
console.log('Minimum finden: ');

let minarr = [23, 34, 65, 687, 2, 4564];
function min(arr) {
  let minValue = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }

  return minValue;
}

console.log(min(minarr));

//palindrome
console.log('---------------------------------------');
console.log('Palindrom erkennen: ');
function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[word.length - i - 1]) return false;
  }
  return true;
}

let word = 'beeb';
if (isPalindrome(word)) {
  console.log("Yes, '" + word + "' is a palindrome.");
} else {
  console.log("No, '" + word + "' is not a palindrome.");
}

//multiply all elements
console.log('---------------------------------------');
console.log('Elemente Multiplizieren: ');
let multarr = [1, 2, 3, 4, 5];
function multiplyAll(arr) {
  if (arr.length === 0) {
    return null;
  }

  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}
console.log(multiplyAll(multarr));
// find gcd
console.log('---------------------------------------');
console.log('Größter gemeinsamer Teiler: ');

function gcd(a, b) {
  if (a === 0 && b === 0) {
    return Infinity;
  }

  if (a === 0 || b === 0) {
    return a + b;
  }

  let limit = Math.min(a, b); //größter gemeinsamer Teiler kann max kleinere Zahl sein
  let commonDivisor = 1; //immer gemeinsamer Teiler

  for (let i = 2; i <= limit; i++) {
    if (a % i === 0 && b % i === 0) {
      //wenn beide Berechnungen 0 Rest ergeben, ist es ein gemeinsamer Teiler und wird abgespeichert
      commonDivisor = i;
    }
  }

  return commonDivisor;
}
console.log(gcd(12, 24));

//Weihnachtsbaum
console.log('---------------------------------------');
console.log('Weihnachtsbaum: ');
let txt = '';
for (let i = 1; i <= 10; i++) {
  txt = '';
  for (let j = i; j < 10; j++) {
    txt += '_';
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    txt += '*';
  }
  console.log(txt);
}

// Im Kurs mit Bubblesort gelöst.
console.log('---------------------------------------');
console.log('Selectionsort: ');
function selectionSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Nimmt ersten Wert und setzt diesen als Minimum.
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
        //Überprüft welcher Wert am kleinsten ist.
      }
    }
    //Wurde ein kleinerer Wert gefunden wird getauscht.
    if (min != i) {
      // Tauschen der Elemente
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
}

console.log(selectionSort([6, 5, 3, 7, 2, 8]));
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

console.log('---------------------------------------');
console.log('Subarrays bilden: ');

function subset(arra, arra_size) {
  let result_set = [];
  let result;

  for (let x = 0; x < Math.pow(2, arra.length); x++) {
    result = [];
    let i = arra.length - 1;
    do {
      if ((x & (1 << i)) !== 0) {
        result.push(arra[i]);
      }
    } while (i--);

    if (result.length >= arra_size) {
      result_set.push(result);
    }
  }

  return result_set;
}

console.log(subset([1, 2, 3], 2));

console.log('---------------------------------------');
console.log('In Fibonacci enthalten: ');

function findFibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  let count = 2;
  let n3;
  while (true) {
    n3 = n1 + n2;
    if (n3 == num) {
      console.log(`Element ${num} is present in index ${count}`);
      break;
    } else if (n3 > num) {
      console.log('Element not present');
      break;
    }
    n1 = n2;
    n2 = n3;
    count++;
  }
}

findFibonacci(13); //"Element 13 is present in index 7"
findFibonacci(144); //"Element 144 is present in index 12"

console.log('---------------------------------------');
console.log('Koordinaten: ');

let coordinates = [
  [50.69, 8.94],
  [54.29, 11.97],
  [55.38, 12.88],
  [60.78, 9.94],
  [62.78, 7.69],
  [70.34, 8.24],
  [72.59, 11.29],
  [80.69, 8.56],
];

for (let i = 0; i < coordinates.length; i++) {
  const coordinate = coordinates[i];
  console.log(coordinate);
  for (let j = 0; j < coordinate.length; j++) {
    console.log(coordinate[j]);
  }
}
