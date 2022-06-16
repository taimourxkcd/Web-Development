const countConstruct = (target , wordBank ) => {
    if(target === '') return 1;

    let totalCount = 0;

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const numWayForRest = countConstruct(target.slice(word.length ,  wordBank));
            totalCount += numWayForRest;
        }
    }
    return totalCount;
};



console.log(countConstruct("purple",["purp","p","ur","le","purpl"]));               //2
console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"]));               //1
console.log(countConstruct("skateboard",["bo","rd","ate","t","sk","boar"]));        //0
console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","t"]));    //4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[                 
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"])); //false
