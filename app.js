// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("");
// var lastName = prompt("");
// var comb =firstName+ " "+lastName;
// document.write(comb);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favorite = prompt("mobile daal ")

// var kuchbhiLenght = favorite.length;

// document.write("my favorite phone is : " + favorite + "<br>" + "length =" + kuchbhiLenght )

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var country = "pakistan";
// var ind = country.indexOf("n");
// document.write(ind)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.


// var country = "Hello world";
// var ind = country.lastIndexOf("l");
// document.write(ind)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var country = "pakistan";
// var ind = country[3];
// document.write(ind)

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "hyder";
// var both = "abad";
// var city2 = "islam";
// document.write(city+both+"<br>"+city2+both)

// method 2

//  var city = "hydrabad";
//  var copy =city.slice(4);
// var city2 = "islam"
//  document.write(city+"<br>"+city2+copy)


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
 

    // var message = "Ali and Sami are best friends. They play cricket and football together.";

    // var replacedMessage = message.replace(/and/g, "&");

    // document.write("<h2>Original Message:</h2>");
    // document.write(`<p>${message}</p>`);

    // document.write("<h2>Replaced Message:</h2>");
    // document.write(`<p>${replacedMessage}</p>`);

// 9. Write a program that converts a string “472” to a number
//  Display the values & types in your browser.

// var stinNU = "160";
// var NU = Number(stinNU);
// document.write(` value = ${stinNU} <br> type = ${typeof stinNU} <br>
// value = ${stinNU} <br> type = ${typeof NU}
// `)


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var peanut = prompt ( "peanite ");
// var cap = peanut.toUpperCase()

// document.write(` ${peanut} <br>  ${cap} `)

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var javaScript = prompt ("");
// var firstWord = (javaScript.slice(0,1).toUpperCase())
// var lastWord = (javaScript.slice(1).toLowerCase( ))

// document.write(firstWord + lastWord)

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 365.30 ;
// var numsting = num.toString() ;

// var remove = numsting.replace( ".", "" )

// document.write(` Number :  ${remove} `)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// var spc = ["!","@","#","$","%","^","&","*","*"];
// var nam = prompt ("ar!yw")
// var match = false
// for (i= 0; i<nam.length;i++){
// for(j=0;j<spc.length;j++){
//     if (nam[i] === spc[j]){
//         match = true
//         alert("please enter vald name without specail character ")
//     }
// }

// }

// if (!match){
//     alert(nam + "welcome")
// }
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// // should inform about its availability. Example:

// var products =["cake","apple pie"," cookie","chips","patties"];
// var userinput = prompt("");
// var converter = userinput.toLowerCase();
// var match= false
// for (i=0;i<products.length;i++){
// if (converter===products[i]){
//     match=true
// alert(products[i] + "is available at index of " + i)

// }
// }
// if (!match){
//     alert(converter+" "+"Not available")
// }

// var products =["cake","apple pie"," cookie","chips","patties"];

// var userInput = prompt("enter product")

// var check=false

// var converter = userInput.toLowerCase()

// for (i = 0 ; i < products.length ; i++  ){
//     if( converter === products[i]){
//         check=true
//         alert ("available")
//     }
    
    
// }
// if(!check){
//     alert("not available poka")
// }
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var userInput = prompt(" ");
// for (i = 0; i<10 ;i++){

//     if(userInput.length<6 || ){
//         console.log("sjdsj")
// }
// }

// 17. Write a program to display the last character of a user
// input.
// var userInput = prompt("")

// var lastWord = userInput.length-1

// document.write( userInput[lastWord])


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var paragraf = ("the quick brown fox jumps over the lazy dog the he she the ")

// var khali = 0;
// var the = "the";
// for( i = 0 ; i <paragraf.length ; i++){
//    var find =(paragraf.slice(i,i+3))
//    if (find===the){khali++
//     console.log(khali)
//    }
// }













// Assignment # 26-30
// JAVASCRIPT

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num = 3.45214;

// var round = Math.round(num);
// var ceil = Math.ceil(num)
// var float = Math.floor(num)

// document.write(` number ${num} <br> Round OF Value ${round} <br> ceil value ${ceil} <br> floor OF Value ${float} `)


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = +prompt("enter nagative valua ")
//  var round = Math.round(num);
//  var ceil = Math.ceil(num)
//  var float = Math.floor(num)

//  document.write(` number ${num} <br> Round OF Value ${round} <br> ceil value ${ceil} <br> floor OF Value ${float} `)


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// let number = -4;
// let absoluteValue = Math.abs(number);
// console.log(`Absolute value of ${number} is ${absoluteValue}`);

// number = 5;
// absoluteValue = Math.abs(number);
// console.log(`Absolute value of ${number} is ${absoluteValue}`);


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var dice = Math.random()*6
// var kuchi = Math.ceil(dice)
// console.log(kuchi   )

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var random = Math.random()*2;
// var dice = Math.ceil(random)
// if (dice===1){
//     alert("heads win")
// }
// else if (dice===2){
//     alert("tail win")
// }
// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var dice = Math.random()*100
// var kuchi = Math.ceil(dice)
// console.log(kuchi   )


// ?????????????????????????


// 8 Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// var userInput = +prompt(" enter num btw 1 to 10")
// var secreatNumber = 3;

// if (userInput===secreatNumber){
//     alert("you win")
// }
// else {alert("sorry its not correct number")}






