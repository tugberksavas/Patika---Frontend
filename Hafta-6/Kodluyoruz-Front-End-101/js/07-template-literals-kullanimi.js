// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "tugberk"
let DOMAIN  = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log("merhaba dunya", username, "sitemize hos geldin", "mail adresin:", email)

let info = `merhaba ${username} sitemize hosgeldin.. 
mail adresin : ${email}
mail adresinin uzunlugu : ${email.length}
borcunuz : ${(2+3)*10} Tl
gunun saat bilgisi : ${new Date().getHours()}
gunun dakika bilgisi : ${new Date().getMinutes()}
gunun saniye bilgisi : ${new Date().getSeconds()}

kisa isminiz : ${username[0]}.
`

console.log(info)