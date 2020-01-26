function solve(inputArr) {
    let sortedArrays = [];
    
    for (const line of inputArr) {
        let currentArr = JSON.parse(line);
        sortedArrays.push(currentArr.map(Number).sort((a, b) => b - a));
    }

    // console.log(sortedArrays);

    for (let i = 0; i < sortedArrays.length; i++) {
        for (let j = i+1; j < sortedArrays.length; j++) {
            if(compareArrays(sortedArrays[i], sortedArrays[j])){
                sortedArrays.splice(j,1);
                j--;
            }
        }
    }

    sortedArrays.sort((a,b) => a.length - b.length);
    sortedArrays.forEach(a => console.log("[" + a.join(", ") + "]"));

    function compareArrays(arr1, arr2) {
        if(arr1.length != arr2.length){
            return false;
        }
        else{
            for (let i = 0; i < arr1.length; i++) {
                if(arr1[i] != arr2[i]){
                    return false;
                }
            }
            return true;
        }
    }
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
);