var originalText = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."

var cities = ['Faisalabad', 'Lahore','Karachi', 'Islamabad', 'Burewala','Sheikhupura','Kashmir']

document.getElementById("OrignalString").innerHTML = "<p>You can Print All cities. <br> You can add your city. <br> You can check your added city in the list.</p>"



// function error(){
//     Toastify({
//         text: "Please Enter Required Data",
//         duration: 3000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "right", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//         onClick: function(){} // Callback after click
//       }).showToast();
// }

function login(){
  var userName =  document.getElementById("userName").value
  console.log(userName)
}
                        //...................printAllCities...............

function printAllCities() {
    document.getElementById("Output").innerHTML = ""

    for( let i=0; i<cities.length; i++){
        let num = i + 1
        document.getElementById('Output').innerHTML += num + ')' + cities[i] + '<br>'
    }
}

                        //...................Add your city in list...............

function addCity(){
    let city = document.getElementById("inputText").value
    // document.getElementById("Output").innerHTML = ""
    if (city=== "") {
        Toastify({
            text: "Please type your city Name",
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
    let cityFirstLetter = city.charAt(0).toUpperCase()
    let cityAllLetter = city.slice(1).toLowerCase()
    let cityWordInCapitilize = cityFirstLetter + cityAllLetter

    let cityFound = false
    
    for(let i = 0; i < cities.length; i++){
      
        if(cities[i] === cityWordInCapitilize){
            cityFound = true
            let html ="<span style='color: red; font-size: 20px;'>"  +  cityWordInCapitilize + "</span>" + ' is already in the list'
            document.getElementById("Output").innerHTML = html
        }

    }
        if (cityFound === false){
            cities.push(cityWordInCapitilize)
            let html ="<span style='color: red; font-size: 20px;'>"  +  cityWordInCapitilize + "</span>" + ' is added in the list'
            document.getElementById("Output").innerHTML = html
        }
}


                        //...................Check your city in list...............

function checkCity(){
    let city = document.getElementById("inputText").value
    document.getElementById("Output").innerHTML = ""
    if (city=== "") {
        // alert("Please type your city name")
                Toastify({
            text: "Please type your city Name",
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
    let cityFirstLetter = city.charAt(0).toUpperCase()
    let cityAllLetter = city.slice(1).toLowerCase()
    let cityWordInCapitilize = cityFirstLetter + cityAllLetter

    let cityFound = false

    for(let i = 0; i < cities.length; i++){
      
        if(cities[i] === cityWordInCapitilize){
            cityFound = true
            let html ="<span style='color: red; font-size: 20px;'>" +  cityWordInCapitilize + "</span>"+ " is in the list"
            document.getElementById("Output").innerHTML = html
        }

    }

    if (cityFound === false){
        let html ="Sorry we couldn't find your city. <span style='color: red; font-size: 20px;'>"  +  cityWordInCapitilize + "</span>"
        document.getElementById("Output").innerHTML = html
    }
}


                        //..................... Find this word...............

function clr(){
        document.getElementById("Output").innerHTML = ""
}


    // document.getElementById("inputField").value = ""

