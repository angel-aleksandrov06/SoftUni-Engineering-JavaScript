function sortAnArray(input = []) {
    return [...input].sort((a,b) => {
        return a.length-b.length || a.localeCompare(b);
    }).join("\n");
}

console.log(sortAnArray(['alpha', 
'beta', 
'gamma']
))