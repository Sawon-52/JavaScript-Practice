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

const arr =[1,5,5];
const price =10;

var result = canPay(arr,price);
console.log(result);