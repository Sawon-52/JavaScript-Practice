/*<=========Problem-01 Solution======>*/
function cubeNumber(number){

    if(number < 0){
        return('Input Must be a Positive Number');
    }
    else if(typeof number !== 'number'){
        return('Input Must be a Number');
    }

    else{
        var numCube = number ** 3;
        return numCube;
    }
}


/*<=========Problem-02 Solution======>*/
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


/*<=========Problem-03 Solution======>*/
function sortMaker(arr){
    if(arr.length >1 && arr.length <= 2){
        for(let i= 0; i<2; i++){
            if(arr[i] < 0 || arr[i+1] < 0){
                return ('Invalid Input');
            }
            else if(arr[i]==arr[i+1]){
                return ('equal');
            }

            else if(arr[i]<arr[i+1]){
                var box = arr[i]
                arr[i] = arr[i+1];
                arr[i+1] = box;
            }
            else 
              return arr;
            
        }
        return arr;

    }
    else{
        return('The Array Must contain Two elements');
       
    }     
}


/*<=========Problem-04 Solution======>*/
function findAddress(obj) {
    if(typeof obj !== "object"){
        return "Please Provide Valid Object";
    }else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street +', '+house + ', '+society;
    }
}


/*<=========Problem-05 Solution======>*/
function canPay(changeArray, totalDue) {
    if(changeArray.length == 0){
        return ('Some elements must be placed in the Array');
    }
    else{
        var total =0;
        for(let i = 0; i<changeArray.length; i++){
            total = total + changeArray[i];
        }

        if(total >= totalDue){
            return true;
        }
        else
        return false;
    }

}







