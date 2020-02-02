function filter(data, criteria) {
  let criteriaArgs = criteria.split("-");

    let parsedData = JSON.parse(data);

    let resultArray = [];
    let counter = 0;

    // for (const obj of parsedData) {
    //   if( obj[criteriaArgs[0]] === criteriaArgs[1]){
    //       let currentObjAsString = `${counter}. ${obj["first_name"]} ${obj["last_name"]} - ${obj["email"]}`;
    //       resultArray.push(currentObjAsString)
    //       counter++;
    //   }
    // }

    resultArray = parsedData.reduce((acc, cur) => {
      if (cur[criteriaArgs[0]] === criteriaArgs[1]) {
        acc.push(`${counter}. ${cur["first_name"]} ${cur["last_name"]} - ${cur["email"]}`);
        counter++;
      }
      return acc;
    }, [])

    return resultArray.join("\n");
}

console.log(filter(`[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`,
  'last_name-Johnson'
));