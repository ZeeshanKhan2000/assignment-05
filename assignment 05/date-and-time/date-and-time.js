// Q no 1       /*  Write a program that displays current date and time in your browser.*/

// program to display the date
// get local machine date time
// const date = new Date();

// get the date as a string
// const n = date.toDateString();

// get the time as a string
// const time = date.toLocaleTimeString();

// display date
// console.log('Date: ' + n);

// display time
// console.log('Time: ' + time);

// document.write(date)

// document.write(time)

// Q no 2    Write a program that alerts the current month in words. For example December


// const date = new Date();  
// const month = date.toLocaleString('default', { month: 'long' });
// document.write(month);

// alert(month)


/*3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show 
Sun.*/



// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0,4);
// document.write( "Today is" + c);
// alert(c)







/*Qno4. Write a program that displays a message “It’s Fun day” if 
its Saturday or Sunday today.*/

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write()
// }else if(c === "Tue"){
//     document.write()
// }else if(c === "Wed"){
//     document.write()
// }else if(c === "Thr"){
//     document.write()
// }else if(c === "Fri"){
//     document.write()
// }

// console.log(c)

// document.write(c)
// alert(c)

/*Q no 5. Write a program that shows the message “First fifteen 
days of the month” if the date is less than 16th of the month 
else shows “Last days of the month”.*/

// // program to display the date
// // get local machine date time
// const date = new Date();

// // get the date as a string
// const n = date.toDateString();

// // get the time as a string
// // const time = date.toLocaleTimeString();

// // display date
// console.log('Date: ' + n);


// if(n <=15){
//     document.write("first DAtes of month")
// }
// else {
//     document.write("last Dates of month")
// }

// console.log(n)

// alert(n)
                        
        //    Q no 6 


       
// var dt = new Date();
// dt.setDate(18);
// dt.setMonth(11);
// dt.setFullYear(1999);
// dt.setHours(8);
// dt.setMinutes(30);
// dt.setSeconds(00);
// dt.setMilliseconds(00);

// console.log(dt);




/*Q no 7  . Write a program that tests whether it's before noon and 
alert “Its AM” else “its PM”.*/


// const date =  new Date();

// const time = date.toLocaleTimeString();

// console.log(time)

// if(time <=11.59 ){
//     document.write("its am")

// }

// else{
//     document.write("its PM")
// }



/* Q no 8   Write a program that creates a Date object for the last day 
of the last month of 2020 and assigns it to variable named 
laterDate.*/



// const d = new Date(31);
//  var  latterDate = d.setFullYear(2020);

// console.log(d)


// document.write(d)



/*Create a date object of the starting date of this Ramadan 
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015*/ 





// let date_1 = new Date('6/18/2022');
// let date_2 = new Date();

// let difference = date_2.getTime() - date_1.getTime();
// let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

// var MyObject = {
//     ramdan : "6-18-2022",
//     passedTime : TotalDays,
// }

// document.write(`${MyObject.passedTime} days passed on 1st ramdan`)

// // console.log(MyObject.ramdan , MyObject.passedTime );





/*Q No 13 Write a program to ask the user about his age. Calculate 
and show his birth year in your browser.*/


// // var d = prompt("enter your age") 

// var dob = new Date ("06/24/2008");

// //calculate month difference from current date in time
// var month_diff = Date.now() - dob.getTime();

// //convert the calculated difference in date format
// var age_dt = new Date(month_diff); 

// //extract year from date    
// var year = age_dt.getUTCFullYear();

// //now calculate the age of the user
// var age = Math.abs(year - 1970);

// console.log(age)

// var age = prompt("enter the age")

// //display the calculated age
// document.write("Age of the date entered: " + age + " years");





/*Q no 14 Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2 
decimal places. Display the following fields*/


// units = 1000
// bill = 0
// if(units<=50){
//   bill  = units*1
// }
// else if(units <=150){
//   bill = 50*1 + (units-50)*2
// }
// else if(units <=250){
//   bill = 50*1 + 100*2 + (units-150)*3
// }
// else if(units>250){
//   bill = 50*1 + 100*2 + 150*3 + (units-250) *4
// }

// if(bill>150){
//   bill = bill + bill*0.2
// }

// console.log(bill)

// document.write("the current bill "+ bill + "PKR" )


