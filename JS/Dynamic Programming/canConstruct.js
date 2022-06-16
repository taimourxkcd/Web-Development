const canConstruct = (target , wordBank) => {
    if(target === ''){
        return true;
    }

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
         const suffix = target.slice(word.length);
         if(canConstruct(suffix, wordBank) === true ){
             return true;
         }
        }
    }
    return false;
};


console.log(canConstruct("abcdef",["ab","abc","ac","def","abcd"]));               //true
console.log(canConstruct("skateboard",["bo","rd","ate","t","sk","boar"]));        //false
console.log(canConstruct("enterapotentpot",["a","p","ent","enter","ot","t"]));    //true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[                 
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"])); //false
