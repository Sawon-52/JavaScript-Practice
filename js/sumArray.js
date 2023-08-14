var arr=[1,2,3,4];

var sumArrayElemnt = function(value){
    var sum =0;
    for(var i = 0; i<arr.length; i++){
        sum=sum+arr[i];

    }

    return sum;

}

var total=sumArrayElemnt(arr);
console.log(total);
