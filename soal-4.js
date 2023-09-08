const dataPenjualanPakAldi = [
    {
      namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori: 'Sepatu Sport',
      totalTerjual: 90,
    },
    {
      namaProduct: 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori: 'Sepatu Sneaker',
      totalTerjual: 37,
    },
    {
      namaProduct: 'Sepatu Warrior Tristan Maroon High',
      hargaSatuan: 360000,
      kategori: 'Sepatu Sneaker',
      totalTerjual: 90,
    },
    {
      namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori: 'Sepatu Sneaker',
      totalTerjual: 90,
    }
  ];  

const getTotalPenjualan = (dataPenjualan) => {
    //validasi 
    if(!Array.isArray(dataPenjualan)){
        throw new Error("Prameter  harus berupa array")
    }
    let totalPenjualan = 0;

    //perulangan
    for(let i = 0; i < dataPenjualan.length; i++){
        const product = dataPenjualan[i];

        //validasi tipe data 
        if(typeof product.totalTerjual !== "number"){
            throw new Error("Properti totalTerjual harus berupa number")
        }
        totalPenjualan += product.totalTerjual;
    }
    return totalPenjualan;
  };
  console.log(getTotalPenjualan(dataPenjualanPakAldi))