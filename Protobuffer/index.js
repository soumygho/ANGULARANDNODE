const fs = require("fs");

const employees = [];

employees.push(
    {
        "name": "Soumya",
        "salary": 1000,
        "id": 1001
    },
    {
        "name": "Soumya",
        "salary": 90000,
        "id": 1002
    },
    {
        "name": "Soumya",
        "salary": 5000,
        "id": 1003
    }
);
fs.writeFileSync("jsondata.json",JSON.stringify(employees));
console.log(JSON.stringify(employees));