// Integrantes 
// Laura Lozada
// Miguel Simbaqueba
// Paula Ramos
// Johana Usaquen

const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//Pruebas nuevas División 

test('División de dos números: 6 y 2', () =>{
  expect(calculator.divide(6,2)).toBe(3)
}); 

test('División de dos números: 36 y 2', () =>{
  expect(calculator.divide(36,2)).toBe(18)
}); 

//Pruebas nuevas Multiplicación  

test('Multiplicación de dos números: 6 y 2', () =>{
  expect(calculator.multiply(6,2)).toBe(12)
}); 

test('Multiplicación de dos números: 25 y 5', () =>{
  expect(calculator.multiply(25,5)).toBe(125)
}); 