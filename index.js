// Radio Box Color Changing
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

// Displaying Error if input is empty
let button = document.getElementById("submitBtn");
let inputText = document.querySelectorAll("input");
let error = document.getElementsByClassName("enter");
let inputTextValue = [];

button.addEventListener("click", function() {
    for(let i = 0; i < inputText.length; i++){
        inputTextValue[i] = inputText[i].value;

        if(inputTextValue[i].length == 0){
            error[i].style.display = "block";
        }
    }
});