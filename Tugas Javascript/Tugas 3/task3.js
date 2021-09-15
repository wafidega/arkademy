//Promise 1
// let janji = new Promise((resolve, reject) => {
//     let x = 0;
//     let y = 12;
//     if (x < y) {
//         resolve('x kurang dari z');
//     } else {
//         reject('x lebih besar dari y');
//     }
// });

// janji.then(function(response) {
//     console.log(response)
// }).catch(function(reason) {
//     console.log(reason);
// })

//Promise 2
const hitungLuas = (panjang, lebar) =>
new Promise((resolve, reject) => {
  if (typeof panjang !== "number" && typeof lebar !== "number") {
    reject(new Error("Tipe data harus bernilai number"));
  }
  let luas;
  setTimeout(() => {
    luas = panjang * lebar;
    console.log("hasil luas = ", luas);
    resolve(luas);
  }, 3000);
});

const output = (luas) => {
    setTimeout(() => {
      console.log("output hasil = ", luas);
    }, 2000);
  };

//Output
panjang = 7
lebar = 8

  hitungLuas(panjang,lebar)
  .then((luas) => output(luas))
  .catch((error) => {
    console.log(error);
  });