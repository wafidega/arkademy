//seleksi
//menggunakan if untuk kondisi nilai akhir kurang dari nilai awal
// menggunakan if untuk kondisi array
//menggunakan menthod map untuk memasukan array baru
//mengurutkan
function seleksi(nilaiAwal, nilaiAkhir, jumlahArray) {
    if (nilaiAkhir <= nilaiAwal) {
        return "nilai akhir harus lebih besar dari nilai awal"
    }

    if (jumlahArray.length < 5 ) {
        return "Panjang array harus lebih dari 5"
    }

    let hasil = []; 
    jumlahArray.map((nilai) => {
        if(nilai >= nilaiAwal && nilai <= nilaiAkhir){
            hasil.push(nilai)
        }
    })// untuk proses

    if(hasil.length === 0){
        return "Nilai tidak ditemukan"
    }
    //mengurutkan dari kecil ke terbesar (asc)
    hasil.sort((a, b) => a > b ? 1 : -1);
    return hasil;
}

console.log(seleksi(1, 20, [5, 15, 20, 25, 30]))