function findMaxRec(A, n)
{
     
    // If size = 0 means whole array
    // has been traversed
    if (n == 1)
        return A[0];
     
    return Math.max(A[n - 1],
        findMaxRec(A, n - 1));
}
 
// Driver code
var A = [];
var size = 5; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	A[i] = prompt('Enter Subject ' + (i+1) + ' marks:');
}

//Print the array in the console.
console.log(A);
let n = A.length;
 
// Function calling
document.write(findMaxRec(A, n));
