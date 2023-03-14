const { Home, SingleFamilyHome, Apartment } = require('./index.js');

describe('Home', () => {
    test('is a class', () => {
        expect(typeof Home.prototype.constructor).toEqual('function');
    });
});

describe('SingleFamilyHome', () => {
    test('is a class', () => {
        expect(typeof SingleFamilyHome.prototype.constructor).toEqual('function');
    });
});

describe('Apartment', () => {
    test('is a class', () => {
        expect(typeof Apartment.prototype.constructor).toEqual('function');
    });
});