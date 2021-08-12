function getString() {
    
    let userInput = document.getElementById("userInput").value;

    if(typeof userInput === "string") {
        let reversedString = userInput.split('').reverse().join('');
        displayString(reversedString);
    } 
    else {
        alert("Error: Please enter a string");
    }
}

function displayString(reversedString) {

    let templateRow = "";

    templateRow += `<p>${reversedString}</p>`;
    
    document.getElementById("results").innerHTML = templateRow;
}