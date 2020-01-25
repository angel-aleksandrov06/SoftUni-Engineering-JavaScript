function usernames(input) {
    let arr = [];

    for (const currentInputValue of input) {
        if (!arr.includes(currentInputValue)) {
            arr.push(currentInputValue);
        }
    }

    arr.sort((a, b) => {
        if(a.length != b.length){
            return (a.length - b.length);
        }
        return a.localeCompare(b);
    });

    console.log(arr.join("\n"));
}

usernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);