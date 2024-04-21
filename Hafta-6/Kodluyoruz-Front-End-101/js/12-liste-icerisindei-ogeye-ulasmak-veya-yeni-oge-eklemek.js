// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti..."
console.log(lastChild.innerHTML)

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti..."
console.log(firstChild.innerHTML)

let ulDOM = document.querySelector("ul#list")
console.log(ulDOM.innerHTML)
let liDOM = document.createElement('li')
console.log(liDOM.innerHTML)

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

// ulDOM.append(liDOM) // en sona ekler
ulDOM.prepend(liDOM)
console.log(liDOM.innerHTML)