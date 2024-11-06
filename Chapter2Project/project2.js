/*Noah Sanchez Nov. 6 */

let fullName = "Noah Sanchez";
console.log("Full Name:", fullName);
document.getElementById("p1").textContent = fullName;


let desiredAnnualSalary = 75000;
console.log("Desired Annual Salary:", desiredAnnualSalary);
document.getElementById("p2").textContent = desiredAnnualSalary;


let isVeteran = false;
console.log("Veteran Status:", isVeteran);
document.getElementById("p3").textContent = isVeteran;


let friends = ["Jake", " Andrew", " Jared"];
console.log("Friends' Names:", friends);
document.getElementById("p4").textContent = friends;

let friendsSalaries = [60000, 70000, 65000];
console.log("Friends' Desired Annual Salaries:", friendsSalaries);
document.getElementById("p5").textContent = friendsSalaries;


let anotherFriend = {
    firstName: "Cleo",
    lastName: "Sanchez",
    desiredSalary: 80000
};
console.log("Another Friend's Details:", anotherFriend);
let friendInfoElement = document.getElementById("p6");
friendInfoElement.textContent = 
`Name: ${anotherFriend.firstName} ${anotherFriend.lastName}, 
Desired Salary: $${anotherFriend.desiredSalary}`;
