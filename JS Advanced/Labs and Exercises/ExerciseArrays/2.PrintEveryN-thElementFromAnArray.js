function solution(input) {
    let step = +input.pop();

    for (let index = 0; index < input.length; index+=step) {
        console.log(input[index])
        
    }
}

solution(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);