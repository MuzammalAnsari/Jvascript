function clr() {
    document.getElementById("Output").innerHTML = ""
}

function showOutput(output) {
    document.getElementById("Output").innerHTML = output
}

// if else
function ifElse() {
    let now = new Date()
    let today = now.getDay()

    if (today === 0) {
        alert("It's Sunday")
        html = "<span style='color:green'>Today is<h1 style='color:red'>Sunday</h1></span>"
        showOutput(html)
    }
    else if (today === 1) {
        alert("It's Monday")
        html = "<span style='color:green'>Today is<h1 style='color:red'>Monday</h1></span>"
        showOutput(html)
    }
    else if (today === 2) {
        alert("It's Tuesday")
        html = "<span style='color:green'>Today is<h1 style='color:red'>Tuesday</h1></span>"
        showOutput(html)
    }
    else if (today === 3) {
        alert("It's Wednesday")
        html = "<span style='color:green'>Today is<h1 style='color:red'>Wednesday</h1></span>"
        showOutput(html)
    }
    else if (today === 4) {
        alert("It's Thursday")
        html = "<span style='color:green'>Today is<h1 style='color:red'>Thursday</h1></span>"
        showOutput(html)
    }
    else if (today === 5) {
        alert("It's Friday")
        html = "<span style='color:green'>Today is<h1 style='color:red'>Friday</h1></span>"
        showOutput(html)
    }
    else {
        alert("It's Saturday")
        html = "<span style='color:green'>Today is<h1 style='color:red'>Saturday</h1></span>"
        showOutput(html)
    }
}

// Switch
function swt() {
    var now = new Date()
    var today = now.getDay()
    // console.log(today);
    switch (today) {
        case 0:
            alert("It's Sunday")
            html = "<span style='color:green'>Today is<h1 style='color:red'>Sunday</h1></span>"
            showOutput(html)
            break
        case 1:
            alert("Its Monday")
            html = "<span style='color:green'>Today is<h1 style='color:red'>Monday</h1></span>"
            showOutput(html)
            break
        case 2:
            alert("Its Tuesday")
            html = "<span style='color:green'>Today is<h1 style='color:red'>Tuesday</h1></span>"
            showOutput(html)
            break
        case 3:
            alert("Its Wednesday")
            html = "<span style='color:green'>Today is<h1 style='color:red'>Wednesday</h1></span>"
            showOutput(html)
            break
        case 4:
            alert("It's Thursday")
            html = "<span style='color:green'>Today is<h1 style='color:red'>Thursday</h1></span>"
            showOutput(html)
            break
        case 5:
            alert("It's Friday")
            html = "<span style='color:green'>Today is<h1 style='color:red'>Friday</h1></span>"
            showOutput(html)
            break
        default:
            alert("It's Saturday")
            html = "<span style='color:green'>Today is<h1 style='color:red'>Saturday</h1></span>"
            showOutput(html)
    }
}

// keep Asking the Name
function keepAsking() {
    do {
        var name = prompt("Enter Your Name")

        if (name != null)
            name = name.trim()
        html = "<span style='color:green'><h3>Your Name is</h3> <h1 style='color:red'>" + name + "</h1></span>"
        console.log(html);
    }
    while (name === null || name.length < 3)
    showOutput(html)
}