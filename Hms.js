const str = 'guvi zeno aeron';
const inputArr = str.split(' ')
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let output = [];
function findVowels(value = '') {
   let temp = '';
    for (let i = 0; i < value.length; i++) {
      if(vowels.includes(value[i])) {
         temp+=value[i];
       }
    }
   return temp;
}

inputArr.forEach((e) => {
  output.push(findVowels(e));
})

console.log(output.join(' '))


