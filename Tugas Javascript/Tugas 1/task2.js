const mtk = "Tujuh puluh lima"
const bahasaIndonesia = 90
const bahasaInggris = 85
const ipa = 80

let rataRata = 0

//Validasi
if (mtk == "Tujuh puluh lima") {
    console.log("Data bukan angka")
} else if (bahasaIndonesia == "sembilan puluj") {
    console.log("Data bukan angka")
} else if (bahasaInggris == "delapan puluh lima") {
    console.log("Data bukan angka")
} else if (ipa == "delapan puluh") {
    console.log("Data bukan angka")
} else {
    console.log("Data tidak disi")
}

rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4

console.log(rataRata)

if (rataRata => 90 && rataRata <= 100) {
    console.log("Grade A")
} else if (rataRata => 80 && rataRata <= 89){
    console.log("Grade B")
} else if(rataRata => 70 && rataRata <= 79) {
    console.log("Grade C")
} else if(rataRata => 60 && rataRata <= 69 ) {
    console.log("Grade D")
} else {
    console.log("Grade E")
}