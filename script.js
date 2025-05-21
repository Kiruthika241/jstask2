// 1.
function divisible() {
    let num = document.getElementById("div5").value;
    if (num != null) {
        document.getElementById("result").innerHTML = "";
    }
    else if (num % 5 == 0) {
        document.getElementById("result").innerHTML = "High Five🙌🏻";
    }
    else {
        document.getElementById("result").innerHTML = "Not Divided by 5";

    }
}
divisible();
// 2.
function password() {
    let password = document.getElementById("second").value;
    if (password === "Open123") {
        document.getElementById("result1").innerHTML = "Access Granted";
    } else {
        document.getElementById("result1").innerHTML = "Access Denied";
    }
}
password();
// 3.
function score() {
let score = document.getElementById("third").value;
if (score < 0 || score > 100) {
  document.getElementById("result2").innerHTML ="Invalid score";
} else if (score < 50) {
  document.getElementById("result2").innerHTML ="Fail";
} else if (score < 65) {
  document.getElementById("result2").innerHTML ="Pass";
} else if (score < 80) {
  document.getElementById("result2").innerHTML ="Merit";
} else {
  document.getElementById("result2").innerHTML ="Distinction";
}
}
score();
// 4.
function day(){
let dayNumber =document.getElementById("fourth").value;
if (dayNumber == 1) {
  document.getElementById("result3").innerHTML="Monday";
} else if (dayNumber == 2) {
  document.getElementById("result3").innerHTML="Tuesday";
} else if (dayNumber == 3) {
  document.getElementById("result3").innerHTML="Wednesday";
} else if (dayNumber == 4) {
  document.getElementById("result3").innerHTML="Thursday";
} else if (dayNumber == 5) {
  document.getElementById("result3").innerHTML="Friday";
} else if (dayNumber == 6) {
  document.getElementById("result3").innerHTML="Saturday";
} else if (dayNumber == 7) {
  document.getElementById("result3").innerHTML="Sunday";
} else {
  document.getElementById("result3").innerHTML="Invalid day number";
}
}
day();
// 5.
function bmi(){
let weight = parseFloat(document.getElementById("fifth").value);
let heightCm = parseFloat(document.getElementById("sixth").value);
let heightM = heightCm / 100;

let bmi = weight / (heightM * heightM);
document.getElementById("result4").innerHTML=("Your BMI is: " + bmi.toFixed(2));

if (bmi < 18.5) {
  document.getElementById("result5").innerHTML=("Underweight");
} else if (bmi < 24.9) {
  document.getElementById("result5").innerHTML=("Normal weight");
} else if (bmi < 29.9) {
  document.getElementById("result5").innerHTML=("Overweight");
} else {
  document.getElementById("result5").innerHTML=("Obese");
}

}
bmi();
// 6.
function discount(){
  let amount = parseFloat(document.getElementById("seventh").value);
if (amount > 1000) {
  document.getElementById("result6").innerHTML=("Discount: 20%");
} else if (amount > 500) {
  document.getElementById("result6").innerHTML=("Discount: 10%");
} else {
  document.getElementById("result6").innerHTML=("No discount");
}
}
discount();
// 7.
function greeting(){
let hour = parseInt(document.getElementById("eighth").value);
if (hour >= 0 && hour < 12) {
  document.getElementById("result7").innerHTML=("Good Morning");
} else if (hour >= 12 && hour < 17) {
  document.getElementById("result7").innerHTML=("Good Afternoon");
} else if (hour >= 17 && hour <= 23) {
  document.getElementById("result7").innerHTML=("Good Evening");
} else {
  document.getElementById("result7").innerHTML=("Invalid time");
}
}
greeting();
// 8.
function year(){
let year = parseInt(document.getElementById("nighth").value);
if (year <= 0) {
  document.getElementById("result8").innerHTML=("Invalid year");
} else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  document.getElementById("result8").innerHTML=("Leap Year");
} else {
  document.getElementById("result8").innerHTML=("Common Year");
}
}
year();
// 9.
function language(){
let lang = parseInt(document.getElementById("tenth").value);
switch (lang) {
  case 1:
    document.getElementById("result9").innerHTML=("Hello");
    break;
  case 2:
    document.getElementById("result9").innerHTML=("Bonjour");
    break;
  case 3:
    document.getElementById("result9").innerHTML=("Hola");
    break;
  default:
    document.getElementById("result9").innerHTML=("Invalid selection");
}
}
language();
// 10.
function month(){
  let month = parseInt(document.getElementById("eleventh").value);
switch (month) {
  case 1:
    document.getElementById("result10").innerHTML=("January");
    break;
  case 2:
    document.getElementById("result10").innerHTML=("February");
    break;
  case 3:
    document.getElementById("result10").innerHTML=("March");
    break;
  case 4:
    document.getElementById("result10").innerHTML=("April");
    break;
  case 5:
    document.getElementById("result10").innerHTML=("May");
    break;
  case 6:
    document.getElementById("result10").innerHTML=("June");
    break;
  case 7:
    document.getElementById("result10").innerHTML=("July");
    break;
  case 8:
    document.getElementById("result10").innerHTML=("August");
    break;
  case 9:
    document.getElementById("result10").innerHTML=("September");
    break;
  case 10:
    document.getElementById("result10").innerHTML=("October");
    break;
  case 11:
    document.getElementById("result10").innerHTML=("November");
    break;
  case 12:
    document.getElementById("result10").innerHTML=("December");
    break;
  default:
    document.getElementById("result10").innerHTML=("Invalid month number");
}
}
month();
