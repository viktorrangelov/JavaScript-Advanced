function search() {
   const listTowns = Array.from(document.querySelectorAll('#towns li'));
   let searchInput = document.getElementById('searchText'); 
   let counter = 0;
   listTowns.forEach(element => {
     
      
     if (element.textContent.includes(searchInput.value)) {
         counter++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
     }else{
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
     }

   });

   let result = document.getElementById('result');
   result.textContent = `${counter} matches found`;

   


  
   
   
   };

