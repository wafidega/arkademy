let kata = "malam";
let hasil = "";
let x = kata.length - 1;

while (x >= 0) {
  hasil = hasil + kata[x];
  x = x - 1;
}

if (hasil == kata) {
  console.log("kara adalah palindrom");
} else {
  console.log("kata bukan palindrom");
}