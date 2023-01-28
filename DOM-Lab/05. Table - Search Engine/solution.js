function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let input = document.getElementById('searchField');
     
     let students = Array.from(document.querySelectorAll('tbody tr'));
     
     students.forEach(student => {
      if (student.textContent.toLowerCase().includes(input.value.toLowerCase().trim())) {
         student.classList.add('select');
      }else{
         student.classList.remove('select');
      }
     });
     input.value = '';

   }
}