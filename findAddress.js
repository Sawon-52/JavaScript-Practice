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

const address ={
    street : 10 
}

var result = findAddress(address)
console.log(result);
