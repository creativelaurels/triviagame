// Example HTML
// <div id="wrapper">
//   <h1>Totally Trivial Trivia!</h1>
//   <div id="subwrapper">
//     <div id="quiz-area">
//       <button id="start">Start</button>
//     </div>
//   </div>
// </div>

// button hover styling
// $("#start").mouseenter(function() {
// 	$(this).fadeTo('fast',0.25);
// });
// $("#start").mouseleave(function() {
// 	$(this).fadeTo('fast', 1);
// });

//button click styling
// $(".clear").on('click', function() {
// 	$(this).fadeTo('fast', 0);

​
​
var panel = $('#quiz-area'); // Panel we will write and append all of the HTML to from this JS file
var countStartNumber = 30; // Global variable,
​
// This function handles events where one button is clicked
// Start On Click
$(document).on('click', '#start', function() {
    game.loadQuestion();
})
​
// Submit On Click
$(document).on('click', '.check-guess', function(e) {
    // game.checkGuess(e)
})
​
// Start Over On Click
$(document).on('click', '#start-over', function() {
     game.loadQuestion();
});
​
​
var questionsArray = [{
    question: "This is the first question",
    choices: ["one", "two", "three", "four"],
    choiceimages: ["one", "two", "three", "four"],
    correctChoice: "two",
    image: ""
}, {
    question: "This is the second question",
    choices: ["one", "two", "three", "four"],
    correctChoice: "one",
    image:
}, {
    question: "This is the third question",
    choices: ["", "", "", ""],
    correctChoice: "",
    image: ""
}]
​
// Array of Question Objects [0,1,2,3]

// var question1 = questionsArray[0].question
​
var game = {
​
    // Variables
    questions: questionsArray, // Import QuestionsArray into the Game Object
    correctAnswers: 0,
    wrongAnswers: 0,
    unAnswered: 0,
    currentQuestionNumber: 0,
​
// Functions
    // this will count down the timer and display into the panel
    //recursive



    countdown: function() {
​
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter === 0{
          console.log('Time Up!');
          game.timeUp();
        })
        countStartNumber--
        $('#counter-number').html(game.counter);

​
    },
​
    timeUp: function() {
​
        // What happens when the timer runs out
        console.log('done');
        //$('#time-left').html('<h2>')


        ​clearInterval(timer);
        $('#counter-number').html(game.counter);

        panel.html
    },
​
    reset: function() {
​
​
    },
​
    // this will execute whenever you click on a guess button
    checkGuess: function(e) {


​
        // Is this the correct answer for the Question
        console.log(this.questions[questionNumber].correctChoice)
​
        // Yes
​
        // No
​
        // Is this the last Question?
        if (this.questionNumber === questionsArray.length - 1) {
​
            // Game Over!!
​
        } else {
​
          if ($(e.target).data("name") === questions[this.currentQuestionNumber].correctAnswers){
          this.answeredCorrectly();
          this.nextQuestion();
        } else {
          this.answeredIncorrectly();
          this.nextQuestion();
        }
            // Continue Game
        }
​
​
    },
​
    finalResults: function() {
​
​     // what happens when the timer hits zero

    },
​
    loadQuestion: function() {
​
        // start timer
        $('#start').remove();

        timer = setInterval(game.countdown, 1000);

        panel.html('<h2>' + questions[this.currentQuestion].question + '<h2');

        for (var i =0; i <questions[this.currentQuestion].answers.length; i++){

          panel.append('<button>' class="answer-button" id="button" + 'data-name="')
          + questions[this.currentQuestion.answers[i] + '">']
          + questions[this.currentQuestions.answers[i] + '</button>')];
        }
​
        // Print Question
        console.log(this.questions[questionNumber].question)
​
        // Print Choices as buttons (for loop needed)
        console.log(this.questions[questionNumber].choices[0])
        console.log(this.questions[questionNumber].choices[1])
        console.log(this.questions[questionNumber].choices[2])
        console.log(this.questions[questionNumber].choices[3])
        console.log(this.questions[questionNumber].correctChoice)
​
    },
​
    nextQuestion: function() {
        game.counter = countStartNumber;
        $('#counter-number').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
​
        // start timer
        this.timer()
​
        // Advance Question Number
        this.questionNumber++
​
        // Call loadQuestion() Function
​
    }
​
}
