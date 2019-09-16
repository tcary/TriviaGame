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
    function gameStart() {
        var resetButton = $("<button>Start Game</button>").attr("id", "Reset");
        questionNum = 0;
        $("#startRow").append(resetButton);
        $("#question").empty();
        $(".scoreBox").empty();
    }
    gameStart();

    $("#startRow").on("click", nextQ);

    function startTimer() {
        clearInterval(intervalId)
        // console.log("started timer")
        // if (!clockRunning) {
        intervalId = setInterval(countTime, 1000);
        // }
        $("#startRow").empty();
        $("#picDiv").empty();
        //displays new buttons for next question
        renderButtons();
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
        clearInterval(countTime);
        time = 15;
    }
    function nextQ() {
        $("#timer").html("<h4><span id='timer'> 15</span></h4>");
        $("#outOfTime").empty();
        $("#correctAnswer").empty();
        $("#picDiv").empty()
        $(".scoreBox").empty();
        //if its the last question or not
        if (questionNum === questions.length) {
            //if its the last question, the end function is called
            theEnd();
        } else if (questionNum < questions.length) {
            //if there are more questions, calls the function displays new question
            startTimer();
            $("#question").text(questions[questionNum].question);
        } else {
            //out of questions, game over
            theEnd();
        }
    }
    function ifCorrect() {
        //empty the div
        $("#correctAnswer").empty();
        //display correct answer
        $("#timer").empty();
        //delete the buttons
        $(".buttonsDiv").empty();
        //displays correct answer with image
        $("#correctAnswer").text("The answer is: " + questions[questionNum].correctAnswer + "!");
        $("#picDiv").append("<img src='" + questions[questionNum].image + "' />");
        //increases questionNumber to move to next array
        questionNum++;
    }
    function ifWrong() {
        clearInterval(intervalId);
        incorrect++;
        displayCorrectAnswer();
        $("#question").empty();
        $(".buttonsDiv").empty();
        $("#picDiv").append("<h3 id='userWrong'> You are wrong! </h3>");
        setTimeout(nextQ, 1000 * 2);
    }
    function displayCorrectAnswer() {
        $("#correctAnswer").empty();
        $(".timer").empty();
        $(".buttonsDiv").empty();
        $("#correctAnswer").text("The answer is: " + questions[questionNum].correctAnswer + "!");
        $("#picDiv").append("<img src='" + questions[questionNum].image + "' />");
        questionNum++;
    }
    //renders answer buttons
    function renderButtons() {
        // Deletes the buttons prior to adding new answers
        $(".buttonsDiv").empty();

        if (questionNum < questions.length) {
            //shuffles the array of answers
            shuffle(questions[questionNum].answers);
            console.log(questions[questionNum].answers)

            // creates new buttons, with choices randomized
            for (var i = 0; i < questions[questionNum].answers.length; i++) {

                var a = $("<button class='btn'>");

                a.addClass("choice");
                // Added a data-attribute to identify answer
                a.attr("data-name", questions[questionNum].answers[i]);
                // Provided the initial button text
                a.text(questions[questionNum].answers[i]);
                // Added the button to the answers div
                $(".buttonsDiv").append(a);


            }



        } else {
            //if no more questions, end the game
            theEnd();
        }
    }
    // Function Ends the game
    function theEnd() {
        clearInterval(intervalId);
        $("#timer").empty();
        //display wrong answers
        $("#picDiv", ".buttons", "#question").empty();
        score();
        $("#timer").empty();
        correct = 0;
        incorrect = 0;
        gameStart();

    }
    //Function to shuffle answer array so buttons display in different order
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function checkAnswer() {
        event.preventDefault();
        clearInterval(intervalId);
        stopTimer();

        var answer = $(this).attr("data-name");
        console.log("answer: " + answer);

        if ((answer === questions[questionNum].correctAnswer) && (questionNum <= questions.length)) {
            console.log("correct");
            $("#picDiv").append("<h3 id='userCorrect'> You are correct! </h3>");
            correct++;
            displayCorrectAnswer();
            setTimeout(nextQ, 1000 * 5);

        } else if (answer !== questions[questionNum].correctAnswer) {
            console.log("wrong");
            ifWrong();
        }
    }
    //WATCHES for a click in the answer div, calls back checkAnswer
    $(".buttonsDiv").on("click", ".choice", checkAnswer);

    //writes score to the box
    function score() {
        $(".scoreBox").append("<h3>Correct Answers: <span id='correct'></span></h3>")
        $(".scoreBox").append("<h3>Incorrect Answers: <span id='incorrect'></span></h3>")

        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
    }

    function reset() {

        time = 15;
        correct = 0;
        incorrect = 0;

    }


}