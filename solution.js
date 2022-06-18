var a = [
    [0, 0, 0, 0, 0],
    [0, 0, 8, 0, 6],
    [0, 0, 9, 0, 5]];

/*Below Pattern elements stored as 1d array */
var p1 = a[0]; // Pattern1
var p2 = a[1];
var p3 = a[2];
var p4 = [a[0][0], a[1][1], a[2][2], a[1][3], a[0][4]];
var p5 = [a[1][0], a[1][1], a[0][2], a[1][3], a[1][4]];
var patterns=[p1,p2,p3,p4,p5];

// Traversing matrix
let arrText = "";
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < a[i].length; j++) {
                arrText = arrText + a[i][j] + ' ';
            }
            console.log(arrText);
            arrText = '';
        }

/* Moore algorithm to find the majority element in an array  */
function mooreAlgorithm(arr, callback) {
    var count = 0;
    var candidate = 0;
    for (var i = 0; i < arr.length; i++) {
        if (count == 0) {
            candidate = arr[i];
        }
        if (arr[i] == candidate)
            count += 1;
        else
            count -= 1;
    }
    //Below check function called as callback to confirm whether any number is occured >= 3   
    var [element, counter] = callback(candidate, arr);

    if (counter > 2) {

        console.log("\nNumber:", element)
        console.log("\Count:", counter)
        if (a[0] == arr)
            console.log("Pattern 1 \n");
        else if (a[1] == arr)
            console.log("Pattern 2 \n");
        else if (a[2] == arr)
            console.log("Pattern 3 \n");
        else if (p4 == arr)
            console.log("Pattern 4 \n");
        else if (p5 == arr)
            console.log("Pattern 5 \n");

    }

}

// Check function having two paramters canditate i.e majority element and 
//  array (it can be any p1 or p2 ..etc) 
function check(candidate, array) {
    let counter = 0;
    for (let e of array) {
        if (e == candidate)
            counter++;
    }
    if (counter > 2)
        return [candidate, counter]; //returns element if the no. repeated  >=3 with its occurence value!

    else
        return [0, 0]; // if not repeated ,returns 0
}

// Matrix - 3x5 ,checking patterns 1 to 5
patterns.forEach(function(args) {  mooreAlgorithm(args,check) });