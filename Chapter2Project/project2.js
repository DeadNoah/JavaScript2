/*Noah Sanchez Oct. 23 */
let myName = 'Noah';
let para1 = document.getElementById("p1");

para1.textContent = myName;

let n1 = 16;
let n2 = 28;
let numberSum = n1 + n2;

document.getElementById("p2").textContent = numberSum;

let numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

let myNameAddNum = myName + numberSum;
document.getElementById("p4").textContent = myNameAddNum

let myNameMultNum = myName * numberMult;
document.getElementById("p5").textContent = myNameMultNum

let myAge = 28
let ageCompare = myAge > (n1 * n2);

document.getElementById("p6").textContent = ageCompare;

