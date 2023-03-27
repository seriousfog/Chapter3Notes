

function positive(n){
    let newVals = [];
    for (let i = 0; i < n.length; i++) {
        newVals.push(n[i]);
    }
    newVals[0] = 12;
    console.log('originalArray: ' + n)
    console.log('newVals: ' + newVals)
}