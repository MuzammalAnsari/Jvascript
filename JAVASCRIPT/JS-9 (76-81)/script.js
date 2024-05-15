var popupWindow

const whereWeAt = () => {
    Output.innerHTML = window.location.href
}

const goToGoogle = () => {
    window.location.href = "http://google.com"
}

const replaceUrl = () => {
    window.location.replace("http://google.com")
}

const openPopup = () => {
    popupWindow = window.open("", "myWindow", "width=500,height=500,left=500,top=100")
}

const fillContent = () => {
    popupWindow.document.write("<h1>HELLO ANSARI BOY</h1>")
}

const assignUrl = () => {
    popupWindow.location.assign("http://google.com")    
}

const closePopup = () => {
    popupWindow.close()
}