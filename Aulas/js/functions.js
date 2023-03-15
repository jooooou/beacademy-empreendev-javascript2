/* // IIFE

(function helloWorld(){
    alert('Hello, World!')
})();


(function (message){
    alert(message)
}
)('Hello, World! 2');
*/

// Arrow Function (Simplifica a sintaxe)

/*  TRADICIONAL
function sum(a) {
    return a + 10
}

alert(sum(5))
*/

// Arrow

const sum = a => a + 100;
console.log(sum(5))

// exemplo com map()

const materials = [
    'Hidrogênio',
    'Hélio',
    "Lítio",
    "Berílio"
]

// const newArray = materials.map(
//     function showLength(materials) {
//         return materials.length
//     }
// ) 

 const newArray = materials.map(material => material.length)
console.log(newArray)