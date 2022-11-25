
// changing case in javascript   Q1


// var collegeToCheck = prompt("enter your college");

// collegeToCheck =  collegeToCheck.toLowerCase();


// console.log(collegeToCheck)



// var countryToCheck = prompt("enter your country");

// countryToCheck =  countryToCheck.toUpperCase();


// console.log(countryToCheck)



/* Write a program to take a user input about his favorite mobile 
phone model. Find and display the length of user input in your 
browser.*/


// var favoritePhone = prompt("enter your favorit phone model")


// favoritePhone = favoritePhone.length

// console.log(favoritePhone)




 /* 2. Write a program to display the last character of a user input. */



//  var lastCharacter = "Find and display the length of user input in your "

//  lastCharacter = lastCharacter.charAt.length

// console.log(lastCharacter)




/*Write a program to find the index of letter “n” in the word “Pakistani” 
and display the result in your browser. */



// var latterFinding = "pakistani"

// latterFinding = latterFinding.indexOf("n")
// document.write(latterFinding)

// console.log(latterFinding)


// var firstName = "pakistani"

// part = firstName.slice(3)

// document.write(firstName)
// document.write("<br />")   

// document.write(part) 

// console.log(firstName)



// ***************Strings: replacing characters************


// var city = "hyderabad"
// newCity =  city.replace("hyder", "islam")  
// document.write(newCity);



// Write a program to replace all occurrences of “and” in the string 
// with “&” and display the result in your browsera


// var message =" “Ali and Sami are best friends. They play cricket and football together.” " ;


// newMessage =  message.replaceAll("and", "&")  

// document.write(newMessage)


// ********************Rounding numbers******************

// check if the number is positive, negative or zero
// const number = prompt("Enter a number: ");

// if (number >= 0) {
//     if (number == 0) {
//         console.log("The number is zero");
//     } else {
//         console.log("The number is positive");
//     }
// } else {
//     console.log("The number is negative");
// }


// alert(number)


// var hello = prompt("enter a number");

// hello = Math.round(hello)

// console.log(+hello)




// ******************** Generating random numbers**************
// Q1


// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);


// Q2

// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }

// Q3


/*Write a program that stores a random secret number from 1 to 10 in a 
variable. Ask the user to input a number between 1 and 10. If the user input 
equals the secret number, congratulate the user.*/


// var secretNumber = 5; 

// var userInput = +prompt("input a number between 1 and 10");

// if( userInput === secretNumber ){
//     console.log("mubarak hooo jani")
// }

// else{
//     console.log("try again")
// }


/*Write a program that asks the user about his weight. Parse the user 
 input and display his weight in your browser*/


// var weight = prompt("enter your weight");
// console.log(weight)

// var newWeight = 


// Converting strings to numbers, numbers to strings   Q  SSQQ



// var integerString = "24"
// var num = Number(integerString);

// console.log(num)


// var floatingNumString = "24.9876";
// var num = Number(floatingNumString);

// console.log(num)

// var numberAsNumber = 1234;
// var numberAsString = numberAsNumber.toString();

// console.log(numberAsString)



/*Write a program to control the length of decimals to 2.
var percentage = 30 / 45 * 100; -> 66.66666666666666*/




// var percentage = 30 / 45 * 100; 

// var newValue = percentage .toFixed(2)


// console.log(newValue)





// var weight = prompt("What is your weight?", "50");

// if (weight.includes("kg")) {
//   console.log("Your weight is " + weight);
// } else {
//   console.log("Your weight is " + weight + " kg");
// }




// var a=prompt("Enter Your Weight ","50")
// if(a.includes("kg")){
//     console.log("Your Weight Is "+ a)
// }else{
//     console.log("Your Weight is"+a+"Kg")
// }




// var dt=new Date()
// document.write(dt)

// var a=dt.getDay()
// var a=dt.getDate()
// var a=dt.getMonth()
// var a=dt.getFullYear()
// var a=dt.getHours()
// var a=dt.getMinutes()
// var a=dt.getSeconds()




