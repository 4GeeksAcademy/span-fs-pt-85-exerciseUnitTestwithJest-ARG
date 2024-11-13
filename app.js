// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function (valueInDollar) {
    let valueInYen = ( valueInDollar / 1.07 ) * 156.5;

    return valueInYen;
}
const fromYenToPound = function (valueInYen) {
    let valueInPound = ( valueInYen / 156.5 ) * 0.87;

    return valueInPound;
}


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen };
