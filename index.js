function writeCards(names,event) {
    let array = []
        for (let i = 0; i < names.length; i++) {
        
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        }
   return array;
    
  }

function countDown(start){
    let i = start;
    while (i >= 0){
        console.log(i)
        i--
    }
}
