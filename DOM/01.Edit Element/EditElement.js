function editElement(ref, match, replacer) {
    const content = ref.textContent;
    const mathcer = new RegExp(match, 'g');
   const edited = content.replace(mathcer, replacer)
    ref.textContent = edited;
    
}