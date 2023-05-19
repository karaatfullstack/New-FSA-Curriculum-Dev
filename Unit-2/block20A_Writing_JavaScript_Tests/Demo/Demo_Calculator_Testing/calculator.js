//  Bulding an object named calculation that holds functions like sum, diff, divide, and product

const calculations = {
    
    //     function to add values
        sum: function(a,b) {
            return a + b;
        },
        
    //     function to subtract values
        diff: function(a,b) {
            return a - b;
        },
        
    //     function to multiply values
        product: function(a,b) {
            return a * b
        },
    
    //     function to divide values
        divide: function(a,b) {
            return a/b
        }
     }
    
    //  exporting the module
       module.exports = calculations
    
