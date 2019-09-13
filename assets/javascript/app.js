// Create a trivia game that shows only one question until the player answers it or their time runs out.
//If the player selects the correct answer, show a screen congratulating them for choosing the right option.After a few seconds, display the next question-- do this without user input.
//The scenario is similar for wrong answers and time - outs.
//If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer.Wait a few seconds, then show the next question.
//On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game(without reloading the page).

//Create a library of questions and answers and loop it through for random drawings
// Create an object for each question and answer
// Put these objects in an array
// Create a timer 
var clockRunning = true;
var time = 30;
var correct = 0;
var incorrect = 0;
var intervalId;
var questionNum = 0;

var questions = [{
    question: "What was the first full length CGI movie?",
    answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story",
    image: "assets/images/toystory.gif"
    // }, {
    //     questions:
    //     answers:
    //     correctAnswer:
    //     image:
}
]
window.onload = function () {
    $("#start").on("click", function () {
        startTimer()
        $(this).hide()
        nextQ();
    })
    function startTimer() {
        clearInterval(intervalId)
        console.log("started timer")
        $("#timer").text(time);
        // if (!clockRunning) {
        intervalId = setInterval(countTime, 1000);
        clockRunning = false;
        // }

    }
    function countTime() {
        time--;
        $("#timer").text(time);
        if (time === 0) {
            ifWrong();
            time = 30;
        }
    }
    function stopTimer() {
        clearInterval(intervalId);
        clockRunning = false;
    }
    function nextQ() {
        questionNum++;
        $("#questions").text(questions[questionNum].question)
        // add the questions & the answers in the for loop
    }
    function ifCorrect() {
    }
    function ifWrong() {

    }
    function theEnd() {
        $("#start").show()
    }
    function gameStart() {
        var resetButton = $("<button>").attr("id", "Reset");

    }

    function reset() {

        time = 30;
        correct = 0;
        incorrect = 0;

    }


}