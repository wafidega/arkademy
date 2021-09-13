const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']
    
//cariKata = "abi"
//fungsu cari dan batas
//menggunakan find
//menggunakan slice untuk memisahkan array

const searchName = (cariKata, batas, callback) => {
    let namaFilter = name.filter((kata) => {
      return kata.toLowerCase().includes(cariKata);
    }); //method 
    
    callback(namaFilter, batas);
  };
  
  const batasNama = (hasil, num) => {
    console.log(hasil.slice(0, num));
  };
  

  console.log(searchName("eli", 5, batasNama))
