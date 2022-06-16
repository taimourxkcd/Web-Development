const allConstructTabulation = (target, wordBank ) => {
    const table = Array(target.length + 1)
    .fill()
    .map(() => []);

    table[0] = [[]];

    for(let i = 0; i <= target.length; i++){
        for(let word of wordBank){
            if(target.slice(i, i+word.length) === word){
                const newCombinations = table[i].map(subArray => [ ...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }
    return table[target.length];
};






console.log(allConstructTabulation("purple",["purp","p","ur","le","purpl"]));              
console.log(allConstructTabulation("abcdef",["ab","abc","cd","def","abcd"]));               
console.log(allConstructTabulation("skateboard",["bo","rd","ate","t","sk","boar"]));        
console.log(allConstructTabulation("enterapotentpot",["a","p","ent","enter","ot","t"]));    
console.log(allConstructTabulation("eeeeeeeeeeeeeeeeeef",[                 
    "e",
    "ee",
    "eee",
    "eeeeee"])); 