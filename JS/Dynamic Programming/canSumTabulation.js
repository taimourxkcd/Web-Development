const canSumTabulation = (targetsum, numbers) => {
    const table = Array(targetsum+1).fill(false);
    table[0] = true;
    
    for(let i = 0; i <= targetsum ; i++ ){
        if(table[i] === true){
            for(let num of numbers){
                table[i + num] = true;
            }
        }
    }
return table[targetsum];
};

console.log(canSumTabulation(7,[2,3])); //true 
console.log(canSumTabulation(7,[5,3,4,7])); //true 
console.log(canSumTabulation(7,[2,4])); //false 
console.log(canSumTabulation(8,[2,3,5])); //true 
console.log(canSumTabulation(300,[7,14])); //false 
