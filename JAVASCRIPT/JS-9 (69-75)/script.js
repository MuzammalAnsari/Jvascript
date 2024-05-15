
function showOutput(output){
    document.getElementById("Output").innerHTML = output
}

function clr() {
    document.getElementById("Output").innerHTML = " "
}
function getRandomId(){
    return Math.random().toString(36).slice(2)
}

function getFieldValue(Id){
    return document.getElementById(Id).value
}

let emailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/



//..............................................................
var userArray = [];

function user(firstName, lastName, email, dob, status, role){
this.firstName = firstName
this.lastName = lastName
this.email = email
this.dob = dob
this.id = getRandomId()
this.dateCreated = new Date().getTime()
this.status = status
this.role = role
this.calculateAge = age()
}

//...............................................................

function age () {
    let dob = getFieldValue("dob")
    dob = new Date(dob)

    let currentDate = new Date()
    let month_diff = currentDate.getTime() - dob.getTime()
    let age_dt = new Date(month_diff)
    let year = age_dt.getFullYear()
    let age = Math.abs(year - 1970)
    return age + "Years"
}

function handleSubmit(){
    event.preventDefault()

    let firstName = getFieldValue("firstName")
    let lastName = getFieldValue("lastName")
    let email = getFieldValue("email")
    let dob = getFieldValue("dob")

    firstName = firstName.trim()
    lastName = lastName.trim()
    email = email.trim()

    if(firstName.length < 3 ){
        showNotification("Please enter Correct Name", "error")
        return
    }
    if(!emailFormat.test(email)){
        showNotification("Please enter your email correctly", "error")
        return
    }
    if(!dob){
        showNotification("Please enter your Date Of Birth"< "error")
    }

    let User = new user(firstName, lastName, email, dob, "active", "student")
    
    //  for (let i = 0; i < userArray.length; i++) {
    //      if (user.email == userArray[i].email) {
    //          showNotification(" This user is already registered", "danger");
    //          return;
    //         }
    //     }

    userArray.push(User)
    showNotification(" A new user has been added successfully", "success")

}

function showTable(){
    // if (!userArray.length){
    //     showNotification("There is not a single user 2", "error")
    //     return
    // }

    if (!userArray.length){
        showNotification("There is not a single user", "error")
        return
    }
    else
    showNotification(" Users have been printed in the result box", "success");

    let tableStart = '<div class="table-responsive"><table class="table">';
    let tableHead = '<thead><tr><th>#</th><th scope = "col">First Name</th><th scope = "col">Last Name</th><th scope = "col">Email</th><th scope = "col">Date of Birth</th><th scope = "col">Age</th></tr></thead>';
    let tableEnd = '</table></div>';
    let tableBody = '';
    for (let i = 0; i < userArray.length; i++) {
        tableBody += '<tr><td>' + (i + 1) + '</td><td>' + userArray[i].firstName + '</td><td>' + userArray[i].lastName + '</td><td>' + userArray[i].email + '</td><td>' + userArray[i].dob + '</td><td>' + userArray[i].calculateAge + '</td></tr>';
    }
    let table = tableStart + tableHead + '<tbody>' + tableBody + '</tbody>' + tableEnd;
    showOutput(table)
}


function printUsers() {
    if (!userArray.length){
        showNotification("There is not a single user", "error")
        return
    }
    console.table(userArray)
    showNotification(" Users have been printed in the Console", "success");
}


//.....................................................................
    // Toastify Custom Functions
    function showNotification(msg, type){
    
        let bgColor
        switch (type) {
            case "success":
                bgColor = "linear-gradient(to right, #D976C, #93F9B9)"
                break;
            case "error":
                bgColor = "linear-gradient(to right, #93291e, #ed213a)"
                break
            default:
                bgColor = "#000" 
                break;
        }
    
        Toastify({
            text: msg,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: bgColor,
            },
            // onClick: function(){} // Callback after click
          }).showToast();      
        }
        
        // const toastifySuccess = (msg) => {
        //     Toastify({
        //         text: msg,
        //         duration: 3000,
        //         destination: "https://github.com/apvarun/toastify-js",
        //         newWindow: true,
        //         close: true,
        //         gravity: "top", // `top` or `bottom`
        //         position: "right", // `left`, `center` or `right`
        //         stopOnFocus: true, // Prevents dismissing of toast on hover
        //         style: {
        //           background: "linear-gradient(to right, #1D976C, #93F9B9)",
        //         },
        //         // onClick: function(){} // Callback after click
        //       }).showToast();      
        // }