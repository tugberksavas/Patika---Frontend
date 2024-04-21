// ********** Kosullarla Calismak **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else


let userName = prompt("kuullanici adinizi giriniz: ")
// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

if ( userName.length > 0){
    console.log(`kullanici bilginiz ${userName}`)
}else {
    console.log(`bilgi yok`)
}