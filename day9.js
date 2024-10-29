//1.  
const score = 85;
const grade = (score >= 90) ? 'A' :
(score >= 80) ? 'B' :
(score >= 70) ? 'C' :
(score >= 60) ? 'D' : 'F';
console.log(`Your grade is: ${grade}`);

 //2
 const Age = 48;
const isAdult = (Age >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);

//3
let day = "Saturday"; 
if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend");
} else {
    console.log("It's a weekday.");
}

//4
let age = 20; 
let citizenship = true; 
if (age >= 18 && citizenship) {
    console.log("The person is eligible to vote.");
} else {
    console.log("The person is not eligible to vote.");
}

//5
let u_name="Admin"
let password="12345"
let userNameByPrompt=prompt("enter your name")
let userPasswordByPrompt=prompt("enter your password")
if (u_name===userNameByPrompt && password === userPasswordByPrompt){
    alert("you are logged in sucessfully")
}else{
    alert("wrong credential entered....pls check...")
}
