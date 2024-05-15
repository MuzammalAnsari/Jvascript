document.getElementById("SimpleAlert").onclick = function (){
    alert("Muzammal Ansari")
}

document.getElementById("PrintMyName").onclick = function(){
    let myName = document.getElementById("Input").value
    if (myName===""){
        alert("Please Enter your good name....")
    return
    }
    let text =document.getElementById("Output").innerHTML = myName
    // Output.text
}

let cities = ["Faisalabad","Lahore","Islamabad","Burewala","Sheikhupura","Kashmir"]
document.getElementById("PrintAllCities").onclick=function(){
  document.getElementById("Output").innerHTML = ""
for(let n=0;n<cities.length;n++){
    let num = n + 1
    document.getElementById("Output").innerHTML +=num + ")" +cities[n] +"<br>"
}
} 

document.getElementById("AddYourCityInList").onclick = function (){
let city = document.getElementById("Input").value
if(city===""){
    alert("Please Enter The City Name")
    return
}
cities.push(city)
document.getElementById("Output").innerHTML =city + " is added in your list"
}

document.getElementById("GenerateTable").onclick = function (){
  document.getElementById("Output").innerHTML = ""
let value = document.getElementById("Input").value
if(value===""){
    alert("Please Enter Number To Generate Table")
    return
}
for( n=1;n<=10;n++){
    let cal=value*n
    document.getElementById("Output").innerHTML +=value + "*" + n + "=" + eval(cal) +"<br>"

}
}


document.getElementById("ClearStatement").onclick = function () {
    document.getElementById('Output').innerHTML = ""
}
document.getElementById("btn-clear").onclick = function () {
    document.getElementById('Input').value = ""
}