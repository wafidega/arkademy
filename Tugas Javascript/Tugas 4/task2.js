let kalimat = "saya belajar javascript";
let arrKalimat = kalimat.split(" ");
let hasil = "";
let x = arrKalimat.length - 1;

while (x >= 0) {
    hasil = hasil + arrKalimat[x] + " ";
    x = x - 1;
  }

console.log(hasil);