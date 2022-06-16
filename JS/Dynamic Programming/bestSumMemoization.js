const bestSum = (targetsum, numbers, memo = {}) => {
    if(targetsum in memo) return memo[targetsum]
    if(targetsum == 0) return [];
    if(targetsum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers){
        const remainder = targetsum - num;
        const remainderCombination = bestSum(remainder, numbers, memo)
        if(remainderCombination != null){
           const combination = [ ...remainderCombination, num ];
           // if the combination is shorter than the current shortest , update it.
           if(shortestCombination === null ||combination.length < shortestCombination.length ){
               shortestCombination = combination;
           }
        }
    }

    memo[targetsum] = shortestCombination;
    return shortestCombination;

};

// m = target sum 
// n = numbers.length 
//
// BRUTE FORCE
// time: O(n^m * m)
// space: O(m^2)
//
// Memoized
// time: O(m^2 * n)
// space O(m^2)



console.log(bestSum(7, [5,3,4,7]));   //[7]  
console.log(bestSum(6, [2,3,5]));     //[3 5] 
console.log(bestSum(8, [1,4,5]));     //[4 4] 
console.log(bestSum(100, [1,2,5,25]));//[25 25 25 25]