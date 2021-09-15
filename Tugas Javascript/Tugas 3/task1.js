const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=> {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

day = 'sabtu'
cekHariKerja(day)
.then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

/*
Jadi try catch berfungsi untuk mengeluarkan hasil output dari promise,
kegunaan try untuk menjalankan proses dari fungsi jika bernilai true maka mengeluarkan outputnya
jika bernilai false maka digunakan catch untuk menampilkan pesan error tersebut.
*/
