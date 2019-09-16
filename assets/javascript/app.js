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
var time = 15;
var correct = 0;
var incorrect = 0;
var intervalId;
var questionNum = 0;

var questions = [
    {
        question: "What is the capital of Ukraine?",
        answers: ["Lviv", "Odessa", "Kiev", "Dnipro"],
        correctAnswer: "Kiev",
        image: "assets/images/toystory.gif"
    },
    {
        question: "What is the capital of Uganda?",
        answers: ["Jinja", "Entebbe", "Kampala", "Mbarara"],
        correctAnswer: "Kiev",
        image: "assets/images/toystory.gif"
    },
    {
        question: "What is the capital of France?",
        answers: ["Paris", "Marseille", "Lyon", "Strasbourg"],
        correctAnswer: "Kiev",
        image: "assets/images/toystory.gif"
    },
    {
        question: "What is the capital of USA?",
        answers: ["Denver", "New York", "Chicago", "Washington, D.C."],
        correctAnswer: "Kiev",
        image: "assets/images/toystory.gif"
    },
    {
        question: "What is the capital of Mexico?",
        answers: ["Guadalajara", "Puebla", "Cancun", "Mexico City"],
        correctAnswer: "Kiev",
        image: "assets/images/toystory.gif"
    },
    {
        question: "What is the capital of Georgia?",
        answers: ["Tbilisi", "Batumi", "Poti", "Kutaisi"],
        correctAnswer: "Kiev",
        image: "assets/images/toystory.gif"
    },
    {
        question: "What is the capital of China?",
        answers: ["Shanghai", "Beijing", "Tianjin", "Wuhan"],
        correctAnswer: "Kiev",
        image: "assets/images/toystory.gif"
    },
    {
        question: "What is the capital of India?",
        answers: ["Mumbai", "New Delhi", "Jaipur", "Lucknow"],
        correctAnswer: "Kiev",
        image: "assets/images/toystory.gif"
    },
    {
        question: "What is the capital of Australia?",
        answers: ["Brisbane", "Sydney", "Canberra", "Darwin"],
        correctAnswer: "Kiev",
        image: "assets/images/toystory.gif"
    },
    {
        question: "What is the capital of Kazakhstan?",
        answers: ["Taraz", "Almaty", "Nur-Sultan", "Shymkent"],
        correctAnswer: "Kiev",
        image: "assets/images/toystory.gif"
    },
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
            time = 15;
        }
    }
    function stopTimer() {
        clearInterval(decrement);
        time = 15;
    }
    function nextQ() {
        questionNum++;
        $("#questions").text(questions[questionNum].question)
        // add the questions & the answers in the for loop
    }
    function ifCorrect() {
    }
    function ifWrong() {
        clearInterval(intervalId);
        incorrect++;
        displayCorrectAnswer();
        $("#question").empty();
        $(".buttonsDiv").empty();
        $("#picDiv").append("<h3 id='userWrong'> You are wrong! </h3>");
        setTimeout(nextQuestion, 1000 * 2);
    }
    function displayCorrectAnswer() {
        $("#correctAnswer").empty();
        $(".timer").empty();
        $(".buttonsDiv").empty();
        $("#correctAnswer").text("The answer is: " + trivia[questionNumber].correct + "!");
        $("#picDiv").append("<img src='" + trivia[questionNumber].image + "' />");
        questionNum++;
    }
    function theEnd() {
        $("#start").show()
    }
    function gameStart() {
        var resetButton = $("<button>").attr("id", "Reset");

    }

    function reset() {

        time = 15;
        correct = 0;
        incorrect = 0;

    }


}