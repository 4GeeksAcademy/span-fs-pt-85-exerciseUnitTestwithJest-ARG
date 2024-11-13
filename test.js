// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');


// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollar = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(dollar).toBe(expected);
})
test("One dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(1);

    const expected =  1 / 1.07  * 156.5; 

     expect(yen).toBe(expected);
})
test("100 yen should be 0.55 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(100);

    const expected = 100 / 156.5  * 0.87;
    
     expect(pound).toBe(expected);
})
