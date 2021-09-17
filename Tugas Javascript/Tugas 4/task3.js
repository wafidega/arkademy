//voucher
/*
buat fungsi arkfood
tentukan potongan
ongkir
pajak
*/

//menentukan hagra potong berdasarkan kode
  let hitungPotongan = (harga, voucher) => {
      //voucher arka
    if (voucher === "ARKAFOOD5") {
      if (harga < 50000) {
        return "Total Belanja belum memenuhi";
      } else if (harga >= 50000) {
        let potong1 = harga * (50/100);
        if (potong1 > 50000) {
          return 50000;
        } else {
          return potong1;
        }
      } else {
        return 0;
      }
    }
    //vouncher ditrakir
    if (voucher === "DITRAKTIRDEMY") {
      if (harga < 25000) {
        return "Total Belanja belum memenuhi";
      } else if (harga >= 25000) {
        let potong2 = harga * (60/100);
        if (potong2 > 30000) {
          return 30000;
        } else {
          return potong2;
        }
      }
    } else {
      return 0;
    }
  };

//menghitung ongkir dimana 1-2 km = 5000 + perkilometer 3000
  let hitungOngkir = (jarak) => {
    if (jarak > 2) {
      return (jarak - 2) * 3000 + 5000;
    } else {
      return 5000;
    }
  };

//menghitung pajak jika true
  let hitungPajak = (harga, pajak) => {
    if (pajak === true) {
      return (harga * 5) / 100;
    } else {
      return 0;
    }
  };
//membuat fungsi output + total
  let arkFood = (harga, voucher, jarak, pajak) => {
    console.log("harga : "  + harga);
  
    let potongan = hitungPotongan(harga, voucher);
    console.log(`Potongan : ${potongan}`);
  
    let ongkir = hitungOngkir(jarak);
    console.log(`Biaya ongkir : ${ongkir}`);
  
    let totalPajak = hitungPajak(harga, pajak);
    console.log(`Pajak : ${totalPajak}`);
  
    let total = harga - potongan + ongkir + totalPajak;
    console.log(`Subtotal : ${total}`);
  };
  
  arkFood(75000, "ARKAFOOD5", 5, true);