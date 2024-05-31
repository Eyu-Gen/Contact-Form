let button = document.getElementById("submitBtn");
let enter = document.getElementsByClassName("error");
let reEnter = document.getElementById("reEnter");

button.addEventListener("click", function() {
    let input = document.getElementsByClassName("enterInput");
    let inputValue;
    
    for(let i = 0; i < input.length; i++) {
        inputValue[i] = input[i].value;

        console.log(inputValue[i]);
        
        // if(inputValue[i].length == 0) {
        //     input[i].style.borderColor = "var(--primaryColor)";
        //     enter[i].style.display = "block";
        // }
    }
});
