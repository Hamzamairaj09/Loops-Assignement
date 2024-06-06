//1. Creating a Lesson Plan(Using for loop )
//Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate
//whether each lesson is running this year.
//Steps to Follow:
//1. Create a blank array: Start by setting up an empty array named myWork that will hold
//objects.
//2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
//o Create an object representing a lesson.
//o Each lesson should have a name property, which is a string like "Lesson 1",
//"Lesson 2", etc.
//o Each lesson should also have a status property, which alternates between true
//and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
//status: false, and so on.
//3. Add the lesson to the array: Push each lesson object into the myWork array.
//4. Print the result: Finally, log the myWork array to the console to see the list of lessons.
//let MyWork=[]
//for(let i=1; i<=10; i++){
//  let lesson={
//       name:`Lesson ${i}`,
//       status: i%2 === 1
//   };
//   MyWork.push(lesson);
//}
//console.log(MyWork);
//2. Guessing Game (Using while loop )
//Objective: Create a simple number guessing game where the user tries to guess a randomly
//generated number between 1 and a specified maximum value using a predefined set of guesses.
//Steps to Follow:
//1. Set a maximum value: Create a variable to store the maximum value for the number
//guessing game.
//2. Generate a random number: Use Math.random() and Math.floor() to generate a
//random number between 1 and the maximum value. Log this value to the console for
//development purposes.
//3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
//it to false initially.
//4. Simulate user guesses: Use an array to store a series of predefined guesses.
//5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
//correct guess is made.
//6. Check the user's guess: Inside the loop, check if the current guess matches the random
//number. Provide feedback if the guess is too high or too low.
//let MaxValue= 100
//const targetNumber= Math.floor(Math.random()*MaxValue)+1;
//console.log(`Target Number: ${targetNumber}`);
//let guessCorrect=false;
//const guesses=[12,20,30,40,50,60];
//let guessIndex=0;
//while(!guessCorrect && guessIndex < guesses.length){
//   const currentGuess = guesses[guessIndex];
//   console.log(`Guess: ${currentGuess}`);
//  if (currentGuess === targetNumber) {
//      console.log("Yay, You are correct!!!")
//      guessCorrect= true;
//  }
//  else if(currentGuess<targetNumber){
//  console.log("Too low, Sorry, Better luck nect time :(");
//   }else{
//  console.log("Too high, Sorry, Better Luck next time :(")
//}
//guessIndex++;
//}
//if(!guessCorrect) {
//console.log("No more guesses left")
//}
//3. Counter Incrementer (Using do while loop )
//Objective: Create a program that increments a counter by a specified step value using a
//do...while loop and prints the counter value to the console until it reaches or exceeds 100.
//Steps to Follow:
//1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
//2. Create a variable, step, to increase your counter by: Define a variable step to hold
//the value by which the counter will be incremented.
//3. Add a do...while loop: In the loop, print the counter to the console and increment it by
//the step amount each iteration.
//4. Continue to loop until the counter is equal to or more than 100: The loop should run
//as long as the counter is less than 100.
//let num=0;
//const step= 10;
//do{
//   console.log(`Number: ${num}`);
//    num += step;
//}while (num < 10);
//console.log(`Final Number Values: ${num}`);
//4.Exploring Objects with for...in Loop
//Objective: Practice working with objects in TypeScript and iterating over their properties using
//a for...in loop.
//Instructions:
//1. Create a simple object with three items:
//o Define an object called myObject with three properties: item1, item2, and item3,
//each with corresponding string values.
//2. Use a for...in loop to get properties' names and values from the object:
//o Iterate through the properties of myObject using a for...in loop.
//o Inside the loop, print each property's name and its corresponding value to the
//console.
var myobj = {
    firstitem: "Value 1",
    Seconditem: "Value 2",
    Thirditem: "Value 3"
};
for (var key in myobj) {
    if (myobj.hasOwnProperty(key)) {
        console.log("Property name: ".concat(key, ", Property value: ").concat(myobj[key]));
    }
}
