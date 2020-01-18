function solve(input = []) {

    let result = input.reduce((acc, curr) =>{
        if(curr >= Math.max(...acc)){
            acc.push(curr);
        }
        return acc;
    },[])

    return result.join("\n");
}