var user = "Ansari Boy"

var marks = 444

var greet = `Hello "${user}" your marks is ${marks}`
// console.log(greet);

//.................................

let firsName = "Ansari"
let lastName = "Boy"

function fullName(firsName, lastName){
    return`${firsName} ${lastName}`;
}

let users = `Hello ${fullName(firsName,lastName)}`

// console.log(users);

// let obj = "Ansari"
// console.log(obj);




//.................................................

// localStorage.setItem("obj", obj)
// localStorage.setItem("obj1", obj)

// console.log(localStorage.getItem("obj1"));        {check console}



//..................................................

// localStorage.setItem("obj", "ansari")
// localStorage.getItem("obj1", "boy")

// localStorage.removeItem("obj")




//..................................................
// let arr = ["Ansari","boy"]
const handleSubmit = () => {
    event.preventDefault()

    let arr = document.getElementById("getvalue").value
    arr.push(arr)
    localStorage.setItem("obj", JSON.stringify(arr))
    console.log(arr);        //{check console}
}


sessionStorage.setItem("name1", "Bad")
sessionStorage.setItem("name2", "Boy")




