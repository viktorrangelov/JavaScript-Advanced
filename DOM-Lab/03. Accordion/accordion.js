function toggle() {
 
    let button = document.getElementsByClassName('button')[0];
    let divExtra = document.getElementById('extra');
       

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        divExtra.style.display = 'block';
    }else{
        button.textContent = 'More';
        divExtra.style.display = 'none';
    }
       
    

    


   
    
    
    



}