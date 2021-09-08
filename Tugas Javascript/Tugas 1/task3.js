let printSegitiga = 5;

if (printSegitiga === "enam") {
	console.log("Data Bukan Angka")
}


for (let i = printSegitiga; i >=1 ; i--) {
	let hasil = '';
	for (let j = 1; j <= i; j++) {
		hasil += j;
	}
	console.log(hasil);
}