document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const answers = {
            question1: document.querySelector('input[name="question1"]:checked'),
            question2: document.querySelector('input[name="question2"]:checked')
        };
        
        let score = 0;
        let feedback = '';
        
        if (answers.question1 && answers.question1.value === 'lower_emissions') {
            score++;
            feedback += 'Question 1: Correct! Lower emissions is the primary benefit of electric vehicles.\n';
        } else {
            feedback += 'Question 1: Incorrect. The primary benefit of electric vehicles is lower emissions.\n';
        }
        
        if (answers.question2 && answers.question2.value === 'engine') {
            score++;
            feedback += 'Question 2: Correct! The engine (or motor) in electric vehicles typically requires less maintenance.\n';
        } else {
            feedback += 'Question 2: Incorrect. The engine (or motor) in electric vehicles typically requires less maintenance.\n';
        }
        
        alert(`Your score: ${score}/2\n\n${feedback}`);
    });
});