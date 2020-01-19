import isYes from "./isYes.js";

// export {question};

const button = document.getElementById('beginButton');

const results = document.getElementById('resultText');

const percentage = document.getElementById('percent');

let correctGuesses = 0;

let correctPercent = 100;

button.addEventListener('click', () => {

        const confirmation = confirm('Would you like to continue?');

        if (confirmation === false) {
            results.textContent = 'Good News! Have a nice day.';
            return;
        }

        const firstName = prompt('So what can I call you?');

const titleName = prompt('And your preferred title?');

let combinedName = firstName + " the " + titleName;

//question One
const isDog = prompt(`Nice to meet you ${combinedName}, the first question is: Are dogs my favorite animal?`);

if (isYes(isDog) === true) {
    correctGuesses++;
}

//if (isYes(isDog) === false) {
//    correctPercent = correctPercent - 25;
//};

//question Two
const isFantasy = prompt("The second question is: Is fantasy my favorite genre?");

if (isYes(isFantasy) === true) {
    correctGuesses++;
} 
//else if (isYes(isFantasy) === false) {
//    correctPercent = correctPercent - 25;
//};

//question Three
const isJazz = prompt("The third question is: Is jazz my favorite music?");

if (isYes(isJazz) === false) {
    correctGuesses++;
}
//else if (isYes(isJazz) === true) {
//    correctPercent = correctPercent - 25;
//};

//queston Four

const isGuitar = prompt("The fourth queston is: Is guitar my favorite instrument?");

if (isYes(isGuitar) === true) {
    correctGuesses++;
}
//else if (isYes(isGuitar) === false) {
//    correctPercent = correctPercent - 25;
//};

results.textContent = 'Hey! You got ' + correctGuesses + ' correct!';

//percentage.textContent = 'Your quiz grade is ' + correctPercent + '%';

//resultTest.textContent = isDog + isFantasy + isJazz;

});


    

//if (yourAnswer != null) {
  // document.write("This was your lousy answer " + yourAnswer);
   

//function checkAnswer () {
    
//    var yes = ["Yes", "yes", "Y", "y"];

//   for ( i = 0; i <= yes.length; i++) {

//        document.write("For Loop");

//        if (yourAnswer === yes[i]){

//            document.write("if yourAnswer");

//            function checkAnswer (yourAnswer) {

//                if (questionNumber === 1) {
//                    document.write("questionNumber 1");
//                    return (false); //dingo question
//                } 

//                else if (questionNumber === 2) {
//                    return (false); //genre question
//                }

//                else if (questionNumber === 3) {
//                    return (false); //music question
//                }
//                else if (return (false);
                
//            };
//        };   
//    };

//};
  




