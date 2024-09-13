function validateQuizForm() {
    let q1Answered = false;
    let q2Answered = false;
    let q1Correct = false;
    let q2Correct = false;

    let q1Options = document.getElementsByName("q1");
    for (let i = 0; i < q1Options.length; i++) {
        if (q1Options[i].checked) {
            q1Answered = true;
            if (q1Options[i].value === "a") {
                q1Correct = true;
            }
            break;
        }
    }

    let q2Options = document.getElementsByName("q2");
    for (let i = 0; i < q2Options.length; i++) {
        if (q2Options[i].checked) {
            q2Answered = true;
            if (q2Options[i].value === "b") {
                q2Correct = true;
            }
            break;
        }
    }

    // If either question is unanswered, show an alert and prevent form submission
    if (!q1Answered || !q2Answered) {
        alert("Please answer all questions before submitting the quiz.");
        return false;
    }

    // Check correctness of answers
    if (q1Correct) {
        alert("Correct answer for question 1: " + q1Options[i].nextElementSibling.innerHTML);
    } else {
        alert("Incorrect answer for question 1: " + q1Options[i].nextElementSibling.innerHTML);
    }

    if (q2Correct) {
        alert("Correct answer for question 2: " + q2Options[i].nextElementSibling.innerHTML);
    } else {
        alert("Incorrect answer for question 2: " + q2Options[i].nextElementSibling.innerHTML);
    }

    // If all questions are answered, allow form submission
    alert("Quiz submitted successfully!");
    return true;
}