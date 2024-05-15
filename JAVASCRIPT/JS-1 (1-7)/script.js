document.getElementById("AlertName").onclick = function () {
    alert("MUZAMMAL ANSARI")
    let statement = "Alert('MUZAMMAL ANSARI')"
    document.getElementById("statement1").innerHTML = statement
    // document.getElementById("ClearStatement").onclick = ''

}
document.getElementById("AlertNumber").onclick = function () {
    alert("125")
    let statement = "Alert('125')"
    document.getElementById("statement1").innerHTML = statement

}
document.getElementById("ShowcamelCaseExamples").onclick = function () {
    let html1 = "<h3>Example</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>"
    document.getElementById("statement2").innerHTML = html1;
}

document.getElementById("ShowVariableNames").onclick = function () {
    let html = "<ul><li>A variable name can't contain any space.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example,userAlert and myVar are legal</li><li>Capital letters are fine, but be careful Variable names  are case sensitive. A rose is not a Rose. If you assign the string to the variable rose and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul>"
    document.getElementById("statement2").innerHTML = html;

}
document.getElementById("Sum2Numbers").onclick = function () {
    let num1 = 10
    let num2 = 5
    let sum = num1 + num2
    document.getElementById("statement2").innerHTML = "<p class='text-center'>" + sum + "</p>"
    let statement = "let num1 = " + num1 + "; <br> let num2 =" + num2 + "; <br>Sum = num1 + num2;"
    document.getElementById("statement1").innerHTML = statement

}
document.getElementById("Subtract2Numbers").onclick = function () {
    let num1 = 10
    let num2 = 5
    let sub = num1 - num2
    document.getElementById("statement2").innerHTML = "<p class='text-center'>" + sub + "</p>"
    let statement = "let num1 = " + num1 + "; <br> let num2 =" + num2 + "; <br>Subtract = num1 - num2;"
    document.getElementById("statement1").innerHTML = statement
}
document.getElementById("Multiply2Numbers").onclick = function () {
    let num1 = 10
    let num2 = 5
    let mul = num1 * num2
    document.getElementById("statement2").innerHTML = "<p class='text-center'>" + mul + "</p>"
    let statement = "let num1 = " + num1 + "; <br> let num2 =" + num2 + "; <br>Multiply = num1 * num2;"
    document.getElementById("statement1").innerHTML = statement
}
document.getElementById("Divide2Numbers").onclick = function () {
    let num1 = 10
    let num2 = 5
    let divide = num1 / num2
    document.getElementById("statement2").innerHTML = "<p class='text-center'>" + divide + "</p>"
    let statement = "let num1 = " + num1 + "; <br> let num2 =" + num2 + "; <br>Divide = num1 / num2;"
    document.getElementById("statement1").innerHTML = statement
}

document.getElementById("CalculateSomeNumbers").onclick = function () {
    let num1 = 10
    let num2 = 5
    let remainder = num1 % num2
    document.getElementById("statement2").innerHTML = "<p class='text-center'>" + remainder + "</p>"
    let statement = "let num1 = " + num1 + "; <br> let num2 =" + num2 + "; <br>remainder = num1 % num2;"
    document.getElementById("statement1").innerHTML = statement

}


document.getElementById("ClearStatement").onclick = function () {
    document.getElementById('emp').innerHTML = ""
}
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById('emp1').innerHTML = ""
}