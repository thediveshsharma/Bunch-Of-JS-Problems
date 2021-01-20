

let charRepeats = (str) => {
    for (let i=0; i<str.length; i++) {
      if (str[0] === str[i])  {
        return (str[0]); // repeats
      }
    }
  return null;
}
let example = 'heythere';
console.log('----------------New Question-------------')
console.log("Repeated First Alphabet :-" + "   "  +  charRepeats(example) ); 