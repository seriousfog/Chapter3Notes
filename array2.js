
// let nums = [5, 4, 3, 2, 1]
// let newNums = nums
// newNums[0] = 12
// console.log('nums: ' + nums)
// console.log('newNums: ' + newNums)


//option 1: Use a for loop to push individual items
//allows you to manipulate individual items as you
//add them into the new array
// let vals = [5, 4, 3, 2, 1]
// let newVals = []//empty array
// for (let i=0; i<vals.length; i++){
//     newVals.push(vals[i]);
// }
// newVals[0]=12
// console.log('vals: ' + vals)
// console.log('newVals: ' + newVals)


//option 2: make a shallow copy
//(only works for 1d arrays)
//does not allow you to manipulate each item as you
//add it to the new list, but is faster
// let ages = [5, 4, 3, 2, 1]
// let newAges = [...ages]
// newAges[0] = 12
// console.log('ages: ' + ages)
// console.log('newAges: ' + newAges)



// function compareArrays(arr) {
//     let newVals = [];
//     for (let i = 0; i < arr.length; i++) {
//         newVals.push(arr[i]);
//     }
//     newVals[0] = 12;
//     console.log('originalArray: ' + arr)
//     console.log('newVals: ' + newVals)
// }


for (let i=0; i<highScores.length; i++){
    if (highScores[i]>= newScore){
        newHighScores.push(highScores[i])
    } else{
        newHighScores.push(newScore)
        newScore=0
    }
}
console.log(newHighScores)