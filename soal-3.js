function getAngkaTerbesarKedua(dataNumbers) {
    if (!Array.isArray(dataNumbers) || dataNumbers.length < 3) {
      throw new Error('ERROR : (Kamu Jelasin ini error nya apa dan kenapa)');
    }
  
    const sortedNumbers = dataNumbers.sort((a, b) => b - a);
    console.log(sortedNumbers)
    return sortedNumbers[1];
  }

  const dataAngka = [9,4,7,7,4,3,2,2,8];
  console.log(getAngkaTerbesarKedua(dataAngka))
  console.log(getAngkaTerbesarKedua(0))
//   console.log(getAngkaTerbesarKedua())
 
  