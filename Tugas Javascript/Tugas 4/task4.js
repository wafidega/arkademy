const divideAndSort = (nilai) => {
    let ubahNilai = nilai.toString()
    let prosesNilai = ubahNilai.split("0")
    let urutNilai = prosesNilai.map((x) => x.split("").sort().join("")).join("")
    let hasil = parseInt(urutNilai)
    console.log(hasil)

  };
  divideAndSort(5956560159466056);