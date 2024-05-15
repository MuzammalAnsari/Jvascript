const getFieldValue = id => document.getElementById(id).value

let emailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    const signIn = () => {
        return window.location.assign("sign.html")
    }
    

const handleSubmit = () => {
    event.preventDefault()
    let firstName = getFieldValue("firstName"), lastName = getFieldValue("lastName")
    firstName.trim()
    lastName.trim()
    let fullName = firstName + " " + lastName
    console.log(fullName);
    let email = getFieldValue("email")
    let password = getFieldValue("password")
    // let confirmPassword = getFieldValue("confirmPassword")

    // if(firstName.length< 3){
    //     return showNotification("Please enter correct first Name", "error")
    // }

    // if(lastName.length < 3){
    //     return showNotification("Please enter correct last Name", "error")
    // }

    // if(password.length < 8){
    //     return showNotification("Please enter correct password", "error")

    // }

let user = { fullName,email,password}
let users = JSON.parse(localStorage.getItem("users")) || []
users.push(user)
localStorage.setItem("users",JSON.stringify(users))
console.log(users);
}





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
