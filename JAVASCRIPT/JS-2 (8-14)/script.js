document.getElementById("ConcatenateSomeStrings").onclick = function(){
    let num1 = "20"
    let num2 = "23"
    OriginalStatement.innerHTML = '"20" + "23"'
    Output.innerHTML = num1 + num2
}
document.getElementById("AskNameFromUser").onclick = function(){
    let firstName = prompt("Enter Your First Name")
    let lastName = prompt("Enter Your Last Name")
    OriginalStatement.innerHTML = "First name  &  Last name"
    Output.innerHTML =  firstName + " " + lastName
}
document.getElementById("ComparisonOperator").onclick = function(){
    let firstValue = +prompt ("Enter First Value")
    let secondValue = +prompt ("Enter Second Value")
    OriginalStatement.innerHTML = firstValue + '==' + secondValue
    if(firstValue==secondValue)
    Output.innerHTML = "Condition is True"
    else{
    Output.innerHTML = "Condition is False"
    }
}
document.getElementById("IfElseIf").onclick = function(){
    let marks = +prompt("ENTER YOUR MARKS")
    if (marks>=90){
        document.getElementById("OriginalStatement").innerHTML = "Congratulation Your Grade is A+"
    }
    else if (marks>=80){
        document.getElementById("OriginalStatement").innerHTML = "Congratulation Your Grade is B"
    }
    else if (marks>=70){
        document.getElementById("OriginalStatement").innerHTML = "Congratulation Your Grade is C"
    }
    else if (marks>=60){
        document.getElementById("OriginalStatement").innerHTML = "Congratulation Your Grade is E"
    }
    else if (marks>=50){
        document.getElementById("OriginalStatement").innerHTML = "WARNING You Need To Work Hard"
    }
    else{
        document.getElementById("OriginalStatement").innerHTML = "YOU ARE FAIL"
    }

}
document.getElementById("TestingSetsofConditions").onclick = function(){
    let age = +prompt("ENTER YOUR AGE")
    let weight = +prompt("ENTER YOUR WEIGHT")
    if (age>= 18 && weight<=70){
        Output.innerHTML = "You Are Healthy"
    }
    else if(age>=18 && weight>=70){
        Output.innerHTML = "You Are FAT"
    }
    else{
        Output.innerHTML = "You Are BABY"
    }
}
document.getElementById("IfStatementsNested").onclick = function(){
    let age = +prompt("ENTER YOUR AGE")
    if(age>=18){
        let weight = +prompt("ENTER YOUR WEIGHT")
        if(weight<=70)
        Output.innerHTML = "You Are Healthy"
        else{
        Output.innerHTML = "You Are Fat"
        }
    }
    else{
        Output.innerHTML = "You Are Baby Boy/Girl"
    }
}
document.getElementById("Login").onclick = function(){
    let username = prompt("Enter Username")
    let password = prompt("Enter Password")
    if(username == "Muzammal" && password == "2213")
    {
        Output.innerHTML = "You Are Logged In"
    }
    else{
        Output.innerHTML = "Try using <b> Muzammal </b>as Username & <b> 2213 </b> as password"
    }
}





document.getElementById("ClearStatement").onclick = function () {
    document.getElementById('emp').innerHTML = ""
}
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById('emp1').innerHTML = ""
}