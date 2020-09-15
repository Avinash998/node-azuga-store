function checkPrime(num){
    let flag =1;
    num = Math.mod(num);
    for(let i=2; i<num/2; i++){
        if(num%i == 0){
            console.log("not a prime");
            flag = 0;
            break;
        }
    }
    if(flag){
        console.log("prime number");
    }
}
checkPrime(-1777);