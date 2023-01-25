function extractText() {

   let itemNodes = document.getElementById('items').children;
   let itemsArr = Array.from(itemNodes);
   let result = itemsArr.map(li => li.textContent).join('\n');

   document.getElementById('result').value = result;


   
}

