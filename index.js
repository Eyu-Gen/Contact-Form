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
let inputText = document.querySelectorAll("input[type=text]");
let error = document.querySelectorAll(".enter");
let inputTextValue = [];

document.getElementById("submitBtn").addEventListener("click", function() {
    // Displaying Error if input type = text is empty
    for(let i = 0; i < inputText.length; i++){
        inputTextValue[i] = inputText[i].value;

        if(inputTextValue[i].length == 0){
            error[i].style.display = "block";
        }
    };
    
    // Displaing Error is Message Box is empty
    if((document.getElementById("message").value).length == 0) {
        document.getElementById("messageError").style.display = "block";
    } else {
        document.getElementById("messageError").style.display = "none";
    }

    // Displaying Error if input type = radio / checkbox is off
    let radioboxClicked1 = 0;
    let radioboxClicked2 = 0;
    let checkboxClicked = 0;

    document.getElementById("general-enquiry").addEventListener("click", function() {
        radioboxClicked1 = 1;
    });

    document.getElementById("support-request").addEventListener("click", function() {
        radioboxClicked2 = 1;
    });
    
    document.getElementById("checkboxGroup").addEventListener("click", function() {
        radioboxClicked2 = 1;
    });

 
    if (radioboxClicked1 === 0 || radioboxClicked2 === 0) {
        document.getElementById("radioError").style.display = "block";
    } else {
        document.getElementById("radioError").style.display = "none";
    }

    if(checkboxClicked === 0) {
        document.getElementById("checkboxError").style.display = "block";
    } else {
        document.getElementById("checkboxError").style.display = "none";
    }
});