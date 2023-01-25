function extract(content) {
    let pattern = /\(\w+(\s?)\w+\s?\w+\)/gm;
    let textStart = document.getElementById('content').textContent;
    
    let matches = textStart.match(pattern);
    let exactMatches = [];
    for (let index = 0; index < matches.length; index++) {
        let current = matches[index];
        let sliced = current.slice(1,current.length-1);
        exactMatches.push(sliced);
        
    }
    let text = exactMatches.join('; ');
    document.getElementById('content').textContent = text;
   
    

   
}