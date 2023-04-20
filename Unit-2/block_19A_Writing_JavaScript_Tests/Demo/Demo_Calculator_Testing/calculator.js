//  Bulding an object anmed calculation which hold function like sum, diff, divide, and produt

const calculations = {
    sum: function(a,b) {
        return a + b;
    },
    
    diff: function(a,b) {
        return a - b;
    },
    product: function(a,b) {
        return a * b
    },

    divide: function(a,b) {
        return a/b
    }
 }

//  exporting the module
   module.exports = calculations
