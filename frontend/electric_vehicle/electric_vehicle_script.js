function validateQuizForm() {
    let q1Answered = false;
    let q2Answered = false;

    // Check if question 1 is answered
    let q1Options = document.getElementsByName("q1");
    for (let i = 0; i < q1Options.length; i++) {
        if (q1Options[i].checked) {
            q1Answered = true;
            break;
        }
    }

    // Check if question 2 is answered
    let q2Options = document.getElementsByName("q2");
    for (let i = 0; i < q2Options.length; i++) {
        if (q2Options[i].checked) {
            q2Answered = true;
            break;
        }
    }

    // If either question is unanswered, show an alert and prevent form submission
    if (!q1Answered || !q2Answered) {
        alert("Please answer all questions before submitting the quiz.");
        return false;
    }

    // If all questions are answered, allow form submission
    return true;
}