
function matchFinder(string1, string2) {
    
    if( typeof string1 !== 'string' || typeof string2 !== 'string'){
        return('Input Must be a String');
    }

    else if(string1.includes(string2)){
        return true;
    }
    else 
    return false;
}


var name1 = 'mehedi';
var name2= 'me';


var ans = matchFinder(name1, name2);
console.log(ans);