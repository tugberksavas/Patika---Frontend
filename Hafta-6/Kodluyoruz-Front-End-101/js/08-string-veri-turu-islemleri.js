// ********** String Veri Turu Islemleri ********** 
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "tugberk.savas@gmail.com"
let firstName = "tugberk"
let lastName = "SAVAS"

// string karakter sayisi -> length
console.log("email kac karakter: ",email.length)

// Ilk Karakteri Bulmak -> [0]:
console.log(firstName[0])
console.log(firstName.charAt(0))

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(email.search("@"))
console.log(email[13])

email.search('olmayan') // -1

// belli bir yere kadar al -> slice :  (domain bilgisi)
let DOMAIN = email.slice(email.search("@") + 1 )
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.')) // sadece gmail kismini aldik
)

//bilgiyi degistir  -> replace:
email = email.replace('gmail.com','kodluyoruz.org')
console.log(email)

//istedigim bilgi var mi: -> includes
email.includes('fddasfds') // false
email.includes('@') // true


// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(
    email.endsWith('kodluyoruz.org')
)

// Ilk Harflerini Buyuk Yapmak
firstName = "firstname"
lastName = "lastname"
let fullName = `
${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} - ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName)