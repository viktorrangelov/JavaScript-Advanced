function print(side) {
    let line = '';
   for (let index = 1; index <= side; index++) {
    line +=' ' + '*';
    
   }
   for (let j = 1; j <= side; j++) {
    console.log(line);
    
   }
}

print(2);