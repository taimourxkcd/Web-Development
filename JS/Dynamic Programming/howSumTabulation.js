const howSum = (targetsum, numbers) => {
   const table = Array(targetsum + 1).fill(null);
   table[0] = [];

   for(let i = 0; i <= targetsum; i++){
       if(table[i] !== null){
           for(let num of numbers){
               table[i+num] = [ ...table[i], num];
           }
       }
   }

   return table[targetsum];

};



console.log(howSum(7,[2,3]));     // [3 2 2]
console.log(howSum(7,[5,3,4,7])); // [4 3]
console.log(howSum(7,[2,4]));     // null
console.log(howSum(8,[2,3,5]));   // [2 2 2 2]
console.log(howSum(300,[7,14]));  // null
