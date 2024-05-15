document.getElementById("inputBtn").onclick = function() {
    document.getElementById("inputText").value = ""
}

function clr(){
    document.getElementById("Output").innerHTML = ""
}

const inputValue = () => {
    return document.getElementById("inputText").value
}

// const showOutput = (html) => {
//     document.getElementById("Output").innerHTML = html
// }
function showOutput(output){
    document.getElementById("Output").innerHTML = output
}
document.getElementById("OrignalString").innerHTML = "Wed Mar 08 2023 15:02:36 GMT+0500 (Pakistan Standard Time)"

var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


// Get Name of Today
function nameOfToday(){
    let rightNow = new Date()
    // console.log(rightNow);
    let theDay = rightNow.getDay()
    // console.log(theDay)
    let nameOfToday = daysName[theDay]
    // console.log(nameOfToday);
    document.getElementById("OrignalString").innerHTML = rightNow
    nameOfToday = '<h4>Today is <span class= "text-success fw-bold"><br>'+ nameOfToday + '</span></h4>'
    // showOutput(nameOfToday)
    showOutput(nameOfToday)
    document.getElementById("navBox").innerHTML = nameOfToday

    // tellTime()
}

// Calculate Days since I born
function calDaysBorn(){
    let dob = inputValue()
    if (!dob){
        alert("Please enter your date of birth")
        return
    }
    let date = new Date()
    dob = new Date(dob)
    date = date.getTime()
    dob = dob.getTime()
    let diff = date-dob
    let age = diff/(1000*60*60*24)
    age = Math.floor(age)
    msg = "<span style='color:green'><h6> You Spend " + age + " Days of Your Life on this Earth 🎉✨ </h6></span> "
    showOutput(msg);
}

// When is your next Birthday?
function nextBirthday(){
    let dob = inputValue()
    if(!dob){
        alert("Please Enter Your Next Birthday Date")
        return;
    }
    let date = new Date()
    let dateofbirth = new Date(dob)
    dateofbirth = dateofbirth
    let diff = dateofbirth.getTime()-date.getTime()
    let age = diff/(1000*60*60*24)
    age = Math.floor(age)
    age = "<span class= 'text-success fw-bold'> Your next birthday is after <br><h4 style= 'color: blue '>" + age + " Days</h4> </span>"
    showOutput(age)
}



// Greet User
// function greetUserButton(){
//     showOutput(msg)
// }
function greetUser(){
    let username = prompt("Enter your Good name")
    let now = new Date()
    let hour = now.getHours()
    // console.log(hour);
    
    let greetingMessage = "Good  "
    if( hour >= 4 && hour < 12){
        greetingMessage += " Morning 🤩"
    }
    else if( hour >= 12 && hour < 17){
        greetingMessage += " Afternoon 😎"
    }
    else{
        greetingMessage += " Night 😴"
    }
    let msg = '<span class= "text-success fw-bold">' + greetingMessage + '</span>' + " " + '<br><span class= "text-info fw-bold">' + username + '</span>'
    showOutput(msg)

    document.getElementById("navBox").innerHTML = msg
    // tellTime()
    // greetUser(msg)
}

// Tell time
function tellTime(){
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let time = "<br>You clicked on this button @ " +hour + ":" + minute + ":" + second +":"
    // console.log(time);
    showOutput(time)
    return
}

function tellTimeOne(){
    tellTime()
}
function tellTimeTwo(){
    tellTime()
}
function tellTimeThree(){
    tellTime()
}

// Calculate Tax
function Tax(){
    let price = +prompt("Enter Price")
    let taxRate = 17
    let tax = price * taxRate / 100
    // console.log(tax);
    let total = price + taxRate
    html = '<span class= "text-success fw-bold"> Total Price ='  + total +'</span>' +'<br><span class= "text-info fw-bold"> Tax is ='+ tax +'</span>'
    showOutput(html)
}

// calculateTotal
function calculateTotal(){
    let price = +prompt ("please enter price")
    if (price < 1000){
        taxRate = 8
    }
    else{
        taxRate = 17
    }
    let total = price + taxRate
    total = Math.round(total)
    html = '<span class= "text-success fw-bold"> Total Price ='  + total +'</span>' +'<br><span class= "text-info fw-bold"> Tax %='+ taxRate +'</span>'
    showOutput(html)
}