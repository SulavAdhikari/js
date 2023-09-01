function positiveSum(inpVar) {
    // initializing the sum variable
    var sum=0;

    //adding the positive values in the array to the sum variable
    inpVar.forEach(element => {
        if (element>0){
            sum += element;
        }
    });
    return sum
}

//testing

//case 1
console.log("\nCase 1:\narray is [1,2,1,-1]");
result = positiveSum([1,2,1,-1]);
console.log(result);
console.log('Pass:', (result==4));


//case 2
console.log("\nCase 2:\narray is[-1,-7,-9]");
result = positiveSum([-1,-7,-9]);
console.log(result);
console.log('Pass:', (result==0));

//case 3
console.log("\nCase3:\narray is[0]");
result = positiveSum([0]);
console.log(result);
console.log('Pass:', (result==0));