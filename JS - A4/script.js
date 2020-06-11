(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          // variable to store the list of possible answers
          const answers = [];
          // and for each available answer...
          for(letter in currentQuestion.answers){
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
    function showResults(){
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
      // keep track of user's answers
      let numCorrect = 0;
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          // color the answers green
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'rgb(221, 65, 65)';
        }
      });
      var v=numCorrect/myQuestions.length*100;
      // show number of correct answers out of total
      document.getElementById("results").innerHTML = `Result : ${numCorrect} out of ${myQuestions.length} `;
      document.getElementById("results1").innerHTML = `Percentage : `+v+` % `;
      if(v<=36 & v>=0){
        document.getElementById("results2").style.color = `red`;
        document.getElementById("results2").innerHTML = `Fail !`;
      }
      if(v<=50 & v>=37){
        document.getElementById("results2").style.color = `orange`;
        document.getElementById("results2").innerHTML = `You are Average !`;
      }
      if(v<=70 & v>=51){
        document.getElementById("results2").style.color = `green`;
        document.getElementById("results2").innerHTML = `Good !`;
      }
      if(v<=90 & v>=71){
        document.getElementById("results2").style.color = `darkgreen`;
        document.getElementById("results2").innerHTML = `Very Good !`;
      }
      if(v<=100 & v>=91){
        document.getElementById("results2").style.color = `yellow`;
        document.getElementById("results2").innerHTML = `Excellent !`;
      }
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
   
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
   
    // Variables
    const quizContainer = document.getElementById('quiz');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {  
    
        question: "1. To make clean breast of",
        answers: {
          a: "To gain prominence",
          b: "To praise oneself",
          c: "To preserve ones energy"
        },
        correctAnswer: "c"
      },
      {
        question: "2. To keeps one's temper",
        answers: {
            a: "To become hungry",
            b: "To be in good mood",
            c: "To preserve ones energy"
        },
        correctAnswer: "b"
      },
      {
        question: "3. To catch a tartar",
        answers: {
          a: "ATo trap wanted criminal with great difficulty",
          b: "To catch a dangerous person",
          c: "To meet with disaster",
        },
        correctAnswer: "b"
      },
      {
        question: "4. To drive home",
        answers: {
          a: "To return to place of rest",
          b: "To find one's roots",
          c: "To emphasise"
        },
        correctAnswer: "c"
      },    {
        question: "5. To have an axe to grind",
        answers: {
          a: "A private end to serve",
          b: "To fail to arouse interest",
          c: "To have no result"
        },
        correctAnswer: "a"
      },
      {  
    
        question: "6. To make clean breast of",
        answers: {
          a: "To gain prominence",
          b: "To praise oneself",
          c: "To preserve ones energy"
        },
        correctAnswer: "c"
      },
      {
        question: "7. To keeps one's temper",
        answers: {
            a: "To become hungry",
            b: "To be in good mood",
            c: "To preserve ones energy"
        },
        correctAnswer: "b"
      },
      {
        question: "8. To catch a tartar",
        answers: {
          a: "ATo trap wanted criminal with great difficulty",
          b: "To catch a dangerous person",
          c: "To meet with disaster",
        },
        correctAnswer: "b"
      },
      {
        question: "9. To drive home",
        answers: {
          a: "To return to place of rest",
          b: "To find one's roots",
          c: "To emphasise"
        },
        correctAnswer: "c"
      },    {
        question: "10. To have an axe to grind",
        answers: {
          a: "A private end to serve",
          b: "To fail to arouse interest",
          c: "To have no result"
        },
        correctAnswer: "a"
      },
      {  
    
        question: "11. To make clean breast of",
        answers: {
          a: "To gain prominence",
          b: "To praise oneself",
          c: "To preserve ones energy"
        },
        correctAnswer: "c"
      },
      {
        question: "12. To keeps one's temper",
        answers: {
            a: "To become hungry",
            b: "To be in good mood",
            c: "To preserve ones energy"
        },
        correctAnswer: "b"
      },
      {
        question: "13. To catch a tartar",
        answers: {
          a: "ATo trap wanted criminal with great difficulty",
          b: "To catch a dangerous person",
          c: "To meet with disaster",
        },
        correctAnswer: "b"
      },
      {
        question: "14. To drive home",
        answers: {
          a: "To return to place of rest",
          b: "To find one's roots",
          c: "To emphasise"
        },
        correctAnswer: "c"
      },    {
        question: "15. To have an axe to grind",
        answers: {
          a: "A private end to serve",
          b: "To fail to arouse interest",
          c: "To have no result"
        },
        correctAnswer: "a"
      },
      {  
    
        question: "16. To make clean breast of",
        answers: {
          a: "To gain prominence",
          b: "To praise oneself",
          c: "To preserve ones energy"
        },
        correctAnswer: "c"
      },
      {
        question: "17. To keeps one's temper",
        answers: {
            a: "To become hungry",
            b: "To be in good mood",
            c: "To preserve ones energy"
        },
        correctAnswer: "b"
      },
      {
        question: "18. To catch a tartar",
        answers: {
          a: "ATo trap wanted criminal with great difficulty",
          b: "To catch a dangerous person",
          c: "To meet with disaster",
        },
        correctAnswer: "b"
      },
      {
        question: "19. To drive home",
        answers: {
          a: "To return to place of rest",
          b: "To find one's roots",
          c: "To emphasise"
        },
        correctAnswer: "c"
      },    {
        question: "20. To have an axe to grind",
        answers: {
          a: "A private end to serve",
          b: "To fail to arouse interest",
          c: "To have no result"
        },
        correctAnswer: "a"
      },
      {  
    
        question: "21. To make clean breast of",
        answers: {
          a: "To gain prominence",
          b: "To praise oneself",
          c: "To preserve ones energy"
        },
        correctAnswer: "c"
      },
      {
        question: "22. To keeps one's temper",
        answers: {
            a: "To become hungry",
            b: "To be in good mood",
            c: "To preserve ones energy"
        },
        correctAnswer: "b"
      },
      {
        question: "23. To catch a tartar",
        answers: {
          a: "ATo trap wanted criminal with great difficulty",
          b: "To catch a dangerous person",
          c: "To meet with disaster",
        },
        correctAnswer: "b"
      },
      {
        question: "24. To drive home",
        answers: {
          a: "To return to place of rest",
          b: "To find one's roots",
          c: "To emphasise"
        },
        correctAnswer: "c"
      },    {
        question: "25. To have an axe to grind",
        answers: {
          a: "A private end to serve",
          b: "To fail to arouse interest",
          c: "To have no result"
        },
        correctAnswer: "a"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();

  function myff(){
    var str = document.getElementById('a').style.width;
    var matches = str.match(/(\d+)/); 
    var v;   
    if (matches) { 
    
        v= matches[0]; 
    } 
  var g=++v;
  var   h=++g;
  var   i=++h;
  var  k=++i;
  document.getElementById('a').style.width=k+'%'; 
 }
   
   function myfv(){
    var str = document.getElementById('a').style.width;
    var matches = str.match(/(\d+)/); 
    var v;   
    if (matches) {  
        v= matches[0]; 
    } 
 var g=v-4;
  document.getElementById('a').style.width=g+'%';
 }
