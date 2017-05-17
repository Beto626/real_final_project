function checkAnswers() {
  var quizScore = 0
  var questionOneAnswer = document.querySelector("input[name='programmer']:checked").value
  if (questionOneAnswer == "bubblegumtrap") {
    quizScore = quizScore + 1
  } else {
    quizScore = quizScore
  }
  var questionTwoAnswer = document.querySelector("input[name='company']:checked").value
  if (questionTwoAnswer == "miles") {
    quizScore = quizScore + 1
  } else {
    quizScore = quizScore;
  }
   var questionThreeAnswer = document.querySelector("input[name='league']:checked").value
  if (questionThreeAnswer == "atlanta") {
    quizScore = quizScore + 1
  } else {
    quizScore = quizScore;
  }
   var questionFourAnswer = document.querySelector("input[name='ballon']:checked").value
  if (questionFourAnswer == "broccoli") {
    quizScore = quizScore + 1
  } else {
    quizScore = quizScore;
  }
   var questionFiveAnswer = document.querySelector("input[name='world']:checked").value
  if (questionFiveAnswer == "philadelpia") {
    quizScore = quizScore + 1
  }
  var questionSixAnswer = document.querySelector("input[name='sanchez']:checked").value
  if (questionSixAnswer == "doncannon") {
    quizScore = quizScore + 1
  }
   var questionSevenAnswer = document.querySelector("input[name='wenger']:checked").value
  if (questionSevenAnswer == "moneylonger") {
    quizScore = quizScore + 1
  }
     var questionEightAnswer = document.querySelector("input[name='kobe']:checked").value
  if (questionEightAnswer == "brokeboi") {
    quizScore = quizScore + 1
  }
   var questionNineAnswer = document.querySelector("input[name='bulls']:checked").value
  if (questionNineAnswer == "popstar") {
    quizScore = quizScore + 1
  }
   var questionTenAnswer = document.querySelector("input[name='pats']:checked").value
  if (questionTenAnswer == "liluzi") {
    quizScore = quizScore + 1
  }
  alert("Your score is...")
  alert(quizScore)
}
