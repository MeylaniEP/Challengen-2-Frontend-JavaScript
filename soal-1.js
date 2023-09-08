//membuat function untuk mengubah kata
function changeWord(selectedText, changedText, text) { //mengisikan dengan 3 parameter 
    let newStr = text.replaceAll(selectedText, changedText); //menggunakan method java script
    return newStr;
  }
  //membuat variable untuk menampung kalimat 1 dan 2
  const kalimat1 = "Andini sangat mencintai kamu selamanya";
  const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
  
  //Keluar di Console
  console.log(changeWord("mencintai", "membeci", kalimat1));
  console.log(changeWord("bromo", "semeru", kalimat2));