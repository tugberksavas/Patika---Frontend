// array - dizilerle calismak

// Array olusturmak
let domain = "kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

items1 = [1, 2, 3 ]
console.log(items1)

let emptyArray  = [] // bos list

// Array icerisindeki eleman/oge sayisini ogrenmek
console.log(
    items.length
)

document.querySelector('#info').innerHTML = items.length

// Array icindeki ilk elemanin cagirilmasi
console.log( items[0] )

// Array icindeki son elemanin cagirilmasi
console.log( items[ items.length - 1 ] )

// Array icindeki ortadaki elemanin cagirilmasi
console.log(
    "ortadaki eleman: ", 
    items [ Math.floor(items.length/2 ) ]
)

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(
    typeof(items) // object olarak cikti
)

console.log(
    Array.isArray(items)
)

// hangileri isArray -> True verir ?
console.log("[] : ", Array.isArray( [] ) )
console.log("1 : ", Array.isArray( 1 ) )
console.log("true : ", Array.isArray( true ) )