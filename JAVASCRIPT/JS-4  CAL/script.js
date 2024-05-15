function clr(){
    document.getElementById("dataField").innerHTML=""
}

function AddValue(num){
    document.getElementById("dataField").innerHTML += num
}

function Output(){
    let value = document.getElementById("dataField").innerHTML
    let answer = eval(value)
    document.getElementById("dataField").innerHTML = answer
}