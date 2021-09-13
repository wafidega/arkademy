//METODE-METODE DI JAVASCRIPT


// 1. Filter : mengambil elemen dari array
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const filteredArray = angka.filter(item => item % 2 === 0);

console.log(filteredArray) 

//2. Map : berfungsi untuk mengecek array
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mapedArray = angka.map(item => item % 2 === 0);
console.log(mapedArray); // output: [false, true, false, true, false, true, false, true, false]

//3. Some : digunakan untuk satu elemen dari array
const angka = [1, 2, 3, 4, 5]

const some = angka.some(item => item % 2);
console.log(some); // Output: true

//4. Every : sama dengan some tetapi every mngecek setiap nilai array
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cekNilai = angka.every(item => item > 4);
console.log(cekNilai); // Output: false

//5. Sort : Digunakan untuk mengurutkan angka
const angka = [20, 10, 3, 30, 58, 42, 6, 9]
const huruf = ['z', 'a', 'c', 'g', 'p']

// ascending order
const descOrder = angka.sort((a, b) => a > b ? 1 : -1);
console.log(descOrder); // Output: [3, 6, 9, 10, 20, 30, 42, 58]

// descending order
const ascOrder = huruf.sort((a, b) => a > b ? -1 : 1);
console.log(ascOrder); // Output: ['z', 'p', 'g', 'c', 'a']

//6. Reduce : untuk mengurangi array menjadi single value
const angka = [1, 2, 3, 4, 5];
const sum = angka.reduce((total, value) => total + value, 0);
console.log(sum); // Output: 15

//7. Concat : menggabungkan 2 array menjadi 1 array
const fruits = ['apel', 'banana', 'mango']
const number = [1, 2, 3]

const newArray = fruits.concat(number);
console.log(newArray); 

//8. toLowerCase : Untuk mengubah string menjadi huruf kecil semua
const kata = "SAYA MAU BELAJAR"
kata.toLowerCase()
console.log(kata)

//9. toupperCase : Untuk mengubah string menjadi huruf besar semua
let kata = "SAYA MAU BELAJAR"
let besar = kata.toUpperCase()
console.log(besar)
//10. Find : Fungsinya sama seperti Filter tetapi bedabnya find hanya bisa menemukan satu kata
var numbers = [4,7,10,25,30];
var result = numbers.find(function(num) {
    return num >=20
    });
console.log(result);

