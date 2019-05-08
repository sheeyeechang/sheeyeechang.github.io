

// 	let hoursWorked;
// 	let payRate;
// 	let grossPay;
// 	let standardWorkweek
// 	let overTimeMultiplier
// 	let totalOvertimePay

// 	hoursWorked = prompt("Please enter your hours worked");
// 	payRate = prompt("Please enter your pay rate");

// 	grossPay = hoursWorked * payRate;


// 	console.log("Your total pay for the week is: $" + grossPay);


// let hoursWorked = prompt("Please enter your hours worked");
// let payRate = prompt("Please enter your pay rate");
// let standardWorkweek = 40;
// let overTimeMultiplier = 1.5;
// let grossPay;
// if(hoursWorked > 40){
// 	let overTimeHour = hoursWorked - 40;
// 	let overTimePayRate = payRate * 1.5;
// 	let totalOvertimePay = overTimeHour * overTimePayRate;
// 	let regularPay = payRate + 40;
// 	grossPay = totalOvertimePay + regularPay;
// }else{
// 	grossPay = hoursWorked * payRate;
// }

// console.log(grossPay);



// for (let i = 1; i <= 100; i++){
// 	if (i%5 == 0 && i%3 == 0){
// 	console.log("FizzBuzz")
// 	}
// 	else if (i%3 == 0){
// 		console.log("Buzz")
// 	}
// 	else if (i%5 == 0){
// 		console.log("Fizz")
// 	}
// 	else{
// 		console.log(i);
// 	}
// }
		
let randomNumber = Math.random() * 6;
randomNumber = Math.floor(randomNumber) + 1;

console.log('test:', randomNumber),