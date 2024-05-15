function signUp(){
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  if( email == "admin@user.com" && password == "123456"){
    // alert("hello")
    return window.location.assign("index1.html")
  }
  else{
// alert("hello g")

    Toastify({
      text: "Please Enter correct email and password",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }
}

function show(){
  Toastify({
    text: "Your Email = 'admin@user.com' & Your password = '12345'",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  return
}