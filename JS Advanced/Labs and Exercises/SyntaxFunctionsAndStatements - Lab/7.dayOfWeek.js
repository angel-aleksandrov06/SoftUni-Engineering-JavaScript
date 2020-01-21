function solve(day) {
    const daysMap = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7,
    }
    
    console.log(daysMap[day] ? daysMap[day] : "error");
}

solve("Monday");
solve("Invalid");