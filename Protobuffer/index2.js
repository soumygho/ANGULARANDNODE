const Schema = require("./employees_pb");
const fs = require('fs');


const soumya = new Schema.Employee();
soumya.setId(1000);
soumya.setName("Soumya");
soumya.setSalary(1000);

const pinki = new Schema.Employee();
pinki.setId(1001);
pinki.setName("Priyanka");
pinki.setSalary(2000);


const rick = new Schema.Employee();
rick.setId(1001);
rick.setName("Priyanka");
rick.setSalary(2000);


const employees = new Schema.Employees();
employees.addEmployees(soumya);
employees.addEmployees(pinki);
employees.addEmployees(rick);

const bytes = employees.serializeBinary();

fs.writeFileSync("employeesbinary",bytes);
console.log("binary "+bytes);


