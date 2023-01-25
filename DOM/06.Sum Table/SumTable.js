function sumTable() {
    let sum = 0;
    let rows = document.querySelectorAll('td:nth-child(2)');
    for (let index = 0; index < rows.length -1; index++) {
        
        sum+= Number(rows[index].textContent);
    }
    document.getElementById('sum').textContent = sum;
}