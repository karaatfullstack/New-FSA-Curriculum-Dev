// The function is used to calculate the total price of the checked services and to apply discount on the total
var Total_Value ; 
function Checkbox_Click() {

    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    let total = 0
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        total += parseFloat(checkboxes[i].value);
      }
    }
    Total_Value=total.toFixed(2);
    document.getElementById("output").innerHTML ="Total is: $" + Total_Value; 
    console.log(Total_Value);

    // calculating the discount and returning the output
    let applyDiscountCheckbox = document.getElementById("discountedTotal");
    if(!applyDiscountCheckbox.checked){
        document.getElementById("output").innerHTML ="Total is: $" + Math.round(Total_Value); 
       
    }
    else{
        Total_Value = Total_Value*0.9;
        document.getElementById("output").innerHTML ="After discount total is: $" + Math.round(Total_Value); 
    
         
    }

   
  }

//   The function gives an alert box if the "Pay Now" option is clicked
  function Payment()
  {
    //  ====================Payment=======================
    var paymentButton = document.getElementById("Payment1");
    if (Total_Value > 4) {
        paymentButton.addEventListener("click", function() {
        alert("Payment Done");
        console.log(Total_Value);
    });
    } 

  }
  //exporting the function
  module.exports = Checkbox_Click;



  
  
  
  
  
  






