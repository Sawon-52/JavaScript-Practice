
// function matchFinder(string1, string2) {

//     if( typeof string1 !== 'string' || typeof string2 !== 'string'){
//         return('Input Must be a String');
//     }

//     else if(string1.includes(string2)){
//         return true;
//     }
//     else 
//     return false;
// }

// var name1 = 'mehedi';
// var name2= 'me';


// var ans = matchFinder(name1, name2);
// console.log(ans);

function printDetails(person){
    if(typeof person !== "object"){
        return "please provide me a valid object"
    }else{
        const name = person.name || "nai";
        const age = person.age || "nai";
        const email = person.email || "nai";
        const bou = person.bou || "nai";
        return "amar nam "+name+". amar boyos "+age+". amar email "+email+". amr bou "+bou;
    }

}

const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}

console.log(printDetails(obj));