var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#show-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var notes = [2000, 500, 100, 20, 10, 5, 1];


function calculateChange(amountToBeReturned) {
    for(let i = 0; i <= notes.length; i++) {
        var numberOfNotes = Math.trunc(amountToBeReturned / notes[i])
        amountToBeReturned = amountToBeReturned % notes[i]
        noOfNotes[i].innerText = numberOfNotes;
    }
    
}

function showMessage(errorMessage) {
    message.style.display = "block";
    message.innerText = errorMessage;
}
 
function validateBillAmountandCashGiven() {
    message.style.display = "none";
    if(Number(billAmount.value) > 0){
      if (Number(cashGiven.value) >= Number(billAmount.value)) {
        var amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
        // console.log(amountToBeReturned); 
        calculateChange(amountToBeReturned)

      } else {
          showMessage("Cash given should be greater than or equal to bill amount")
      }
    }
    else {
        showMessage("invalid bill amount")
    }
}

checkButton.addEventListener("click", validateBillAmountandCashGiven)