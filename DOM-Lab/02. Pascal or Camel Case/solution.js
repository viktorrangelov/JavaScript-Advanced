function solve() {
  let text = (document.getElementById('text').value).toLowerCase();
  let naming = document.getElementById('naming-convention').value;

  console.log(text);
  let result = '';
  if (naming == 'Camel Case') {
    let textArr = text.split(' ');
    result +=textArr[0];

    for (let index = 1; index < textArr.length; index++) {
      let currentWord  = textArr[index];
      currentWord = currentWord.replace(currentWord[0], currentWord[0].toUpperCase())
      result+=currentWord;
    }
    

    
  }else if(naming == 'Pascal Case'){
    let textArr = text.split(' ');
    for (let index = 0; index < textArr.length; index++) {
      let currentWord  = textArr[index];
      currentWord = currentWord.replace(currentWord[0], currentWord[0].toUpperCase())
      result+=currentWord;
    }
    console.log(result);
  }else{
    result += 'Error!'
  }

  document.getElementById('result').textContent = result;
}