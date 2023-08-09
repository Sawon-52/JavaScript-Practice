function sortMaker(arr){

    if(arr.length >1 && arr.length <= 2){
        for(let i= 0; i<2; i++){
            if(arr[i] < 0 || arr[i+1] <0){
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
        return('all time take 2 element');
       
    }
        
}

var arr =[1];
var result = sortMaker(arr);
console.log(result);
