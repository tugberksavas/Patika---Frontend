// INPUT icindeki degeri(value) almak

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)


function formSubmit(event) {
    event.preventDefault() // default islemi engelledik...
    console.log("islem gerceklesti")
    
    let scroteInputDOM = document.querySelector('#score')
    console.log(scroteInputDOM.value)
    localStorage.setItem('score', scroteInputDOM.value)
}