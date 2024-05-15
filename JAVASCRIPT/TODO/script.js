window.onload = () => {
    setInterval(() => {
    document.getElementById("time").innerHTML = dayjs().format('dddd DD/MM/YYYY hh:mm:ss a')} ,1000)
}

// let userName = prompt("Please Enter Your Name")
// document.getElementById("name").innerHTML = userName

const emptyFieldValues = () => {
    document.getElementById("title").value = ""
    document.getElementById("location").value = ""
    document.getElementById("description").value = ""
}

const getRandomId = () => {
    return Math.random().toString(26).slice(2)
}

const getFieldValue = id => document.getElementById(id).value

function showOutput (output) {
    return document.getElementById("output").innerHTML = output
}

const clearOutput = () => {
    document.getElementById("output").innerHTML = ""
}

//...............................MAIN.....................................

    const handleSubmit = () => {
    event.preventDefault()
    let title = getFieldValue("title") , location = getFieldValue("location"), description = getFieldValue("description")
    title = title.trim()
    location = location.trim()
    description = description.trim()

    if(title.length < 3){
        showNotification("Please Enter title correctly", "error")
        return
    }
    if(location.length < 3){
        showNotification("Please Enter location correctly", "error")
        return
    }
    if(description.length < 10){
        showNotification("Please Enter description correctly", "error")
        return
    }

    let todo = { title, location, description}

    todo.id = getRandomId()
    todo.dateCreated = new Date().getTime()
    todo.status = "active"

    const todos = JSON.parse(localStorage.getItem("todos")) || []

    todos.push(todo)

    localStorage.setItem("todos",JSON.stringify(todos))

    showNotification("A new todo has been successfully added", "success")
    emptyFieldValues()
    showTodos()

}


function showTodos(){

    const users = JSON.parse(localStorage.getItem("todos")) || []

    if (!users.length){
        showOutput("<h5>Hurray! No task available. Add task button to add your task</h5>")
        return
    }

    let tableStart = '<div class="table-responsive"><table class="table">';
    let tableHead = '<thead><tr><th>#</th><th scope = "row">Title</th><th scope = "row">location</th><th scope = "row">Description</th><th scope = "row">Action</th></thead>';
    let tableEnd = '</table></div>';
    let tableBody = '';

    for (let i = 0; i < users.length; i++) {
        tableBody += '<tr><td>' + (i + 1) + '</td><td>' + users[i].title + '</td><td>' + users[i].location + '</td><td>' + users[i].description + '</td><td><button class="btn btn-sm btn-info m-2" data-value="' + users[i].id + '" onclick="editUser(event)">Edit</button><button class="btn btn-sm btn-danger m-2" data-value="' + users[i].id + '" onclick="deleteUser(event)">Delete</button>';
    }

    let table = tableStart + tableHead + '<tbody>' + tableBody + '</tbody>' + tableEnd
    document.getElementById("output").innerHTML = table
    showOutput(table)
}

const editTodo = (event) => {
    let todoId = event.target.getAttribute("data-value")
console.log(todoId);
    // const todos = S
}


    // toastify Custom Functions
    function showNotification(msg, type) {

        let bgColor;
        switch (type) {
            case "success":
                bgColor = "linear-gradient(to right ,#1D976C, #93F9B9)"
                break;
            case "error":
                bgColor = "linear-gradient(to right ,#93291e, #ed213a)"
                break;
            default:
                bgColor = "linear-gradient(to bottom, #ffffcc 0%, #000000 100%);"
        }
        Toastify({
            text: msg,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: bgColor,
            },
            onClick: function() {} // Callback after click
        }).showToast();
    }
