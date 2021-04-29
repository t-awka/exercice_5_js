// 1
let phrase = "Bonjour tout le monde ";
// 2
console.log(phrase.length);
// 3
phrase = phrase.trim();
console.log(phrase);
// 4
console.log(phrase.length);
// 5
console.log(phrase.charAt(phrase.length -1));
// 6
phrase = phrase.replace('Bonjour', '');
console.log(phrase);
// 7
phrase = phrase.replace('', 'Bonjour');
console.log(phrase);
// 8
phrase = phrase.replace(' tout le monde', '');
console.log(phrase);
// 9
phrase = phrase.replace('Bonjour', 'string');
console.log(phrase);
// 10
console.log(Math.round(Math.random() * 34));
let chiffre = Math.random() * 34;
console.log(chiffre.toFixed(2));
