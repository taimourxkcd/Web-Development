const bestSum = (targetsum, numbers) => {
    const table = Array(targetsum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetsum; i++){
        if(table[i] !== null){
            for(let num of numbers){
                const combination = [ ...table[i], num]; 
                // if this current combination is shorter then what is already stored 
                if(  !table[i+num] || table[ i+num ].length > combination.length){
                    table[i + num] = combination;
                }
            }
        }
    }
    return table[targetsum];
};

console.log(bestSum(7, [5,3,4,7]));   //[7]  
console.log(bestSum(6, [2,3,5]));     //[3 5] 
console.log(bestSum(8, [1,4,5]));     //[4 4] 
console.log(bestSum(100, [1,2,5,25]));//[25 25 25 25]
console.log(bestSum(100, [25,1,2,5]));//[25 25 25 25]