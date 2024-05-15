document.getElementById("OrignalString").innerHTML = 25.12345

const inputValue = () => {
    return document.getElementById("inputText").value
}


// Round A Number
function round() {
    let value = inputValue()
    if (!value) {
        alert("Please enter float value to round")
        return
    }
    roundANumber = Math.round(value)
    let html = '<h1 class="text-primarytheme mb-0">' + roundANumber + '</h1>'
    document.getElementById("Output").innerHTML = html
}

// Ceil A Number
function ceil() {
    let value = inputValue()
    if (!value) {
        alert("Please enter float value to Ceil")
        return
    }
    ceilANumber = Math.ceil(value)
    let html = '<h1 class="text-primarytheme mb-0">' + ceilANumber + '</h1>'
    document.getElementById("Output").innerHTML = html
}

// Floor A Number
function floor() {
    let value = inputValue()
    if (!value) {
        alert("Please enter float value to floor")
        return
    }
    floorANumber = Math.floor(value)
    let html = '<h1 class="text-primarytheme mb-0">' + floorANumber + '</h1>'
    document.getElementById("Output").innerHTML = html
}

// Random Number
function randomNumber() {
    let randomNumber = Math.random()
    let html = '<h1 class="text-primarytheme mb-0">' + randomNumber + '</h1>'
    document.getElementById("Output").innerHTML = html
}

// Throw A Dice
function throwADice() {
    let value = Math.random()
    value = (value * 6) + 1
    let dice = Math.floor(value)
    let html = '<h1 class="text-primarytheme mb-0">' + dice + '</h1>'
    document.getElementById("Output").innerHTML = html

}

// Strong Password
function strongPassword() {

    let length = inputValue()
    if (!length) {
        alert("Please Enter Length")
        return;
    }
    let randomString = ""
    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let symbols = "`~!@#$%^&*-_=+?/,."
    let possibleString = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols
    let limit = length
    for (let i = 0; i < limit; i++) {
        let randomNumber = Math.random()
        randomString += possibleString.charAt(Math.round(randomNumber * possibleString.length))
    }
    html = "<h5><b>The Strong Password For You<br></b></h5>" + "<h3 style='color:red;'>" + randomString + "</h3>"
    document.getElementById("Output").innerHTML = html
}


// converting strings
function convertingStrings() {
    let num = Math.random()

    // console.log(typeof num);
    // num = parseInt(num)           // Provide value in integer, eg 23    [old]
    // num = parseFloat(num)         //  Provide value in Float, eg 23.2444    [old]

    // num = Number(num)
    num = num.toFixed(2)
    num = Number(num)

    // console.log(num);
    let html = '<h1 class="text-primarytheme mb-0">' + num + '</h1>'
    document.getElementById("Output").innerHTML = html
}

// Controlling Lenght
function controllingLenght() {
    let num = Math.random()
    num = num.toFixed(2)
    num = Number(num)
    let html = '<h1 class="text-primarytheme mb-0">' + num + '</h1>'
    document.getElementById("Output").innerHTML = html
}

// Calculate GST
function calculateGst() {
    let cost = inputValue()
    if (!cost) {
        alert("please type something to calculate")
        return
    }
    cost = Number(cost)
    let taxInput = +prompt("Enter your tax rate")
    let tax = cost * (taxInput / 100)
    let totalCost = cost + tax
    document.getElementById("Output").innerHTML = 'Your bill = <span class="test-primaryTheme fw-bold fw-18">' + cost + '</span>'
    document.getElementById("Output").innerHTML += '<br> Tax ' + taxInput + '% = <span class="text-danger fw-bold fw-18">' + tax + '</span>'
    document.getElementById("Output").innerHTML += '<br> Total amount including tax = <span class="text-success fw-bold fw-18">' + totalCost + '</span>'
}


document.getElementById("inputBtn").onclick = function () {
    document.getElementById("inputText").value = ""
}
function clr() {
    document.getElementById("Output").innerHTML = ""
}