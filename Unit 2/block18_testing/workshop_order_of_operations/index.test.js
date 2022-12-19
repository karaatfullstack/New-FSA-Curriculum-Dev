const { orderOfOperations } = require('./index');

//test the function orderOfOperations which takes three numbers as arguments and returns the result of the operation
test('orderOfOperations function exists and gives the correct result', () => {
    expect(orderOfOperations).toBeDefined();
    expect(orderOfOperations(1, 2, 3)).toEqual(7);
});

