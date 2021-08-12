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

function reverseString(string) {

    const reversedString = string.split('').reverse().join('');
    return reversedString;
    
}

function displayString(reversedString) {

    let templateRow = "";

    templateRow += `<p>${reversedString}</p>`;
    
    document.getElementById("results").innerHTML = templateRow;
}