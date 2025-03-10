<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Math Homework</title>
</head>
<body>
    <h1>Math Homework</h1>
    <p id="question"></p>
    <input type="text" id="answer" />
    <button id="submit">Submit</button>
    <script>
        const questionEl = document.getElementById("question");
        const answerEl = document.getElementById("answer");
        const submitEl = document.getElementById("submit");

        // Generate a random math problem
        const generateMathProblem = () => {
            const num1 = Math.floor(Math.random() * 10 + 1);
            const num2 = Math.floor(Math.random() * 10 + 1);
            const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
            let problem;

            switch (operator) {
                case "+":
                    problem = `${num1} + ${num2}`;
                    break;
                case "-":
                    problem = `${num1} - ${num2}`;
                    break;
                case "*":
                    problem = `${num1} * ${num2}`;
                    break;
                case "/":
                    problem = `${num1} / ${num2}`;
                    break;
            }

            questionEl.innerText = `What is ${problem}?`;
        };

        // Check the answer and generate a new problem if necessary
        const checkAnswer = () => {
            let answer = parseInt(answerEl.value);
            let correct = false;

            switch (operator) {
                case "+":
                    correct = num1 + num2 === answer;
                    break;
                case "-":
                    correct = num1 - num2 === answer;
                    break;
                case "*":
                    correct = num1 * num2 === answer;
                    break;
                case "/":
                    correct = Math.floor(num1 / num2) === answer;
                    break;
            }

            if (correct) {
                generateMathProblem();
                answerEl.value = "";
                alert("Correct!");
            } else {
                answerEl.value = "";
                alert("Incorrect. Try again.");
            }
        };

        // Event listeners for the buttons
        submitEl.addEventListener("click", checkAnswer);
        generateMathProblem();
    </script>
</body>
</html>