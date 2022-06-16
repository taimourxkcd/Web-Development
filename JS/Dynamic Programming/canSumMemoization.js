const canSum = (targetsum, numbers, memo = {}) => {
    if(targetsum in memo) return memo[targetsum];
    if(targetsum == 0) return true;
    if(targetsum < 0) return false;
    for(let num of numbers){
        const remainder = targetsum - num;
        if (canSum(remainder,numbers,memo) == true){
            memo[targetsum] = true;
            return true;
        }
    }
    memo[targetsum] = false;
    return memo[targetsum]
};

console.log(canSum(7,[2,3])); //true 
console.log(canSum(7,[5,3,4,7])); //true 
console.log(canSum(7,[2,4])); //false 
console.log(canSum(8,[2,3,5])); //true 
console.log(canSum(300,[7,14])); //false 
