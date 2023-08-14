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

var num = -1;
var cube = cubeNumber(num);
console.log(cube);