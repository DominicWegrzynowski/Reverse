function getString() {
    
    let userInput = document.getElementById("userInput").value;

    if(typeof userInput === "string") {
        let reversedString = reverseString(userInput);
        displayString(reversedString);
    } 
    else {
        alert("Error: Please enter a string");
    }
}

function reverseString(userString) {

    let reversedString = [];

    for(let i = userString.length - 1; i >= 0; i--) {
        reversedString += userString[i];
    }
    
    return reversedString;
    
}

function displayString(reversedString) {

    let templateRow = "";

    templateRow += `<p>${reversedString}</p>`;
    
    document.getElementById("results").innerHTML = templateRow;
}