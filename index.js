document.getElementById('radioBox1').addEventListener('change', function(event) {
    if (event.target.name === 'query_type') {
        document.getElementById('radioBox1').style.backgroundColor = "var(--primaryLighterColor)";
        document.getElementById('radioBox2').style.backgroundColor = "var(--defaultColor)";
        document.getElementById('radioBox1').style.borderColor = "var(--primaryMediumColor)";
        document.getElementById('radioBox2').style.borderColor = "var(--naturalMediumColor)";
    }
});

document.getElementById('radioBox2').addEventListener('change', function(event) {
    if (event.target.name === 'query_type') {
        document.getElementById('radioBox2').style.backgroundColor = "var(--primaryLighterColor)";
        document.getElementById('radioBox1').style.backgroundColor = "var(--defaultColor)";
        document.getElementById('radioBox2').style.borderColor = "var(--primaryMediumColor)";
        document.getElementById('radioBox1').style.borderColor = "var(--naturalMediumColor)";
    }
});

document.getElementById("submitBtn").addEventListener("click", function() {
    let inputText = document.querySelectorAll("input[type=text]");
    let error = document.querySelectorAll(".enter");
    let inputTextValue = [];
    let allValid = true;

    for (let i = 0; i < inputText.length; i++) {
        inputTextValue[i] = inputText[i].value;

        if (inputTextValue[i].length == 0) {
            error[i].style.display = "block";
            allValid = false;
        } else {
            error[i].style.display = "none";
        }

        // Check if it's the specific text input to validate email ending
        if (i == 2) {
            if (!inputTextValue[i].endsWith('@gmail.com')) {
                error[i].style.display = "block";
                allValid = false;
            } else {
                error[i].style.display = "none";
            }
        }

        // Hiding the error again
        inputText[i].addEventListener("input", function() {
            error[i].style.display = "none";
        });
    }

    // Displaying error if message box is empty
    if ((document.getElementById("message").value).length == 0) {
        document.getElementById("messageError").style.display = "block";
        allValid = false;
    } else {
        document.getElementById("messageError").style.display = "none";
    }

    // Hiding the error again
    document.getElementById("message").addEventListener("input", function() {
        document.getElementById("messageError").style.display = "none";
    });

    // Displaying error if input type = radio / checkbox is off
    let radios = document.getElementsByName('query_type');
    let checkbox = document.getElementById('consent');
    let radioSelected = false;

    for (let radio of radios) {
        if (radio.checked) {
            radioSelected = true;
            break;
        }
    }

    if (!radioSelected) {
        document.getElementById('radioError').style.display = 'block';
        allValid = false;
    } else {
        document.getElementById('radioError').style.display = 'none';
    }

    if (!checkbox.checked) {
        document.getElementById('checkboxError').style.display = 'block';
        allValid = false;
    } else {
        document.getElementById('checkboxError').style.display = 'none';
    }

    // Hiding radio / checkbox errors again
    document.getElementById('radioBox1').addEventListener("click", hideError);
    document.getElementById('radioBox2').addEventListener("click", hideError);
    document.getElementById('checkboxGroup').addEventListener("click", function() {
        document.getElementById('checkboxError').style.display = 'none';
    });

    function hideError() {
        document.getElementById('radioError').style.display = 'none';
    }

    if (allValid) {
        alert('Form submitted successfully!');
    }
});