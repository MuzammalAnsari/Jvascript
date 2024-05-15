var originalText = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."

var cities = ['Faisalabad', 'Lahore','Karachi', 'Islamabad', 'Burewala','Sheikhupura','Kashmir']

document.getElementById("OrignalString").innerHTML = "<p>I love my country pakistan. <br> I like my city Faisalabad. <br> I love my Homeland.</p>"


                        //...................toLowerCase...............

function toLowerCase (){

    let lowerCaseText = originalText.toLowerCase()

    document.getElementById("Output").innerHTML = lowerCaseText
    // console.log(lowerCaseText)
}

                        //...................toUpperCase...............

function toUpperCase() {
    let upperCaseText = originalText.toUpperCase()

    document.getElementById("Output").innerHTML = upperCaseText
}

                        //...................capitalize...............

function capatalize(){
    let capitalizeText = '<span style=text-transform: capitilize>' + originalText +'</span>'
    document.getElementById("Output").innerHTML = capitalizeText
    
}

                        //...................betterFormatting...............

function betterFormatting() {
    let text = document.getElementById("inputText").value

    if(!text){
        alert("Please type your text")
        return
    }
    text = text.toLowerCase()
    document.getElementById("Output").style.textTransform = 'capitalize'
    document.getElementById("Output").innerHTML = text
}

                        //...................printAllCities...............

function printAllCities() {

    for( let i=0; i<cities.length; i++){
        let num = i + 1
        document.getElementById('Output').innerHTML += num + ')' + cities[i] + '<br>'
    }
}

                        //...................Add your city in list...............

function addCity(){
    let city = document.getElementById("inputText").value

    if (city=== "") {
        alert("Please type your city name correctly")
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

    if (city=== "") {
        alert("Please type your city name")
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
function findWord() {
    // var myName = "MUZAMMAL"
    // myName = myName.toLowerCase()
    // console.log(myName)
    let newOriginalText = originalText.toLowerCase()
    let word = document.getElementById("inputText").value

    if(!word){
        alert("please enter word to find another same word")
        return
    }

    word = word.toLowerCase()

    let findWord = newOriginalText.indexOf(word)

    // console.log(word.length)
    // console.log(findWord)

    if ( findWord !== -1){
        let html = '😁 Your word <span style="color:red; font-size: 20px;">'+ word +'</span>' + " is successfully found at index: "+ findWord
        document.getElementById("Output").innerHTML = html
        // console.log(html)
    }
    else{
        let html =  "😢  Sorry Your word is not found in the originalString"
        document.getElementById("Output").innerHTML = html  // + findWord
        // console.log(html)
    }
}

                        //.....................Replace this word...............

function replaceWord(){
    let oldword =document.getElementById("inputText").value;
    if(!oldword){
        alert("Please enter the word you want to replace");
        return;
    }
    let newword=prompt("Enter The Word")
    if(!newword){
        alert("Please Enter The Word to be replaced.")
        return;
    }
    oldword = oldword.toLowerCase();
    newword = newword.toLowerCase();
    let newOriginalText = originalText.toLowerCase();
    oldword = new RegExp(oldword, 'g');
    let replacedWord = newOriginalText.replace(oldword, newword);
    document.getElementById("Output").innerHTML = replacedWord;
}


function clr(){
        document.getElementById("Output").innerHTML = ""
}


    // document.getElementById("inputField").value = ""

