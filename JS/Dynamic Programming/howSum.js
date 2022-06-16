const howSum = (targetsum, numbers) => {
   
    if(targetsum === 0) return [];
    if(targetsum < 0) return null;

    for(let num of numbers){
        const remainder = targetsum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult != null){
            return [ ...remainderResult, num ];
        }
    }
    return null;
};

// m = target sum 
// n = numbers.lenght 
// 
// BRUTE FORCE
// time: O(n^m + m)
// space O(m)




console.log(howSum(7,[2,3]));     // [3 2 2]
console.log(howSum(7,[5,3,4,7])); // [4 3]
console.log(howSum(7,[2,4]));     // null
console.log(howSum(8,[2,3,5]));   // [2 2 2 2]
console.log(howSum(300,[7,14]));  // null
