const checkTypeNumber = (givenNumber) => {
    //validasi apakah givenNumber bertype angka
    if(typeof givenNumber === 'undefined'){ //jika parameter tidak berisi atau kosong
        return 'Error: Bro where is the parameter ?' //return tipe data string
    }else if(typeof givenNumber !== 'number'){ //jika parameter memiliki tipe selain angka
        return 'Error: Invalid data type'//return tipe data string
    }
    
    //angka nya genap apa ganjil
    if(givenNumber % 2 === 0){
        return 'GENAP';    //return tipe data string
    }else{
        return 'GANJIL';   //return tipe data string
    }
};
console.log(checkTypeNumber(10))   // parameter angka genap
console.log(checkTypeNumber(3))    // parameter angka ganjil
console.log(checkTypeNumber("3"))  // parameter string
console.log(checkTypeNumber({}))   // parameter sebuah simbol bukan angka
console.log(checkTypeNumber([]))   // parameter sebuah simbol bukan angka
console.log(checkTypeNumber())     // parameter yang tida di definisikan
